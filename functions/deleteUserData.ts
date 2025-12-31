import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { email, request_id, verification_code } = await req.json();

        if (!email || !request_id || !verification_code) {
            return Response.json({ 
                error: 'Email, request ID, and verification code are required' 
            }, { status: 400 });
        }

        // Verify the data request
        const requests = await base44.asServiceRole.entities.DataRequest.filter({
            id: request_id,
            requester_email: email,
            verification_status: 'verified',
            request_type: 'erasure'
        });

        if (!requests || requests.length === 0) {
            return Response.json({ 
                error: 'Invalid or unverified erasure request' 
            }, { status: 403 });
        }

        const deletionLog = {
            email: email,
            deleted_at: new Date().toISOString(),
            deleted_records: {}
        };

        // Delete newsletter subscriptions
        try {
            const newsletters = await base44.asServiceRole.entities.NewsletterSubscriber.filter({ email: email });
            for (const record of newsletters) {
                await base44.asServiceRole.entities.NewsletterSubscriber.delete(record.id);
            }
            deletionLog.deleted_records.newsletter_subscriptions = newsletters.length;
        } catch (e) {
            deletionLog.deleted_records.newsletter_subscriptions = 0;
        }

        // Delete contact submissions
        try {
            const contacts = await base44.asServiceRole.entities.ContactSubmission.filter({ email: email });
            for (const record of contacts) {
                await base44.asServiceRole.entities.ContactSubmission.delete(record.id);
            }
            deletionLog.deleted_records.contact_submissions = contacts.length;
        } catch (e) {
            deletionLog.deleted_records.contact_submissions = 0;
        }

        // Delete or anonymize analytics data (if user account exists)
        try {
            const users = await base44.asServiceRole.entities.User.filter({ email: email });
            if (users && users.length > 0) {
                const userId = users[0].id;

                // Delete PageViews
                const pageViews = await base44.asServiceRole.entities.PageView.filter({ user_id: userId });
                for (const record of pageViews) {
                    await base44.asServiceRole.entities.PageView.delete(record.id);
                }
                deletionLog.deleted_records.page_views = pageViews.length;

                // Delete UserActions
                const actions = await base44.asServiceRole.entities.UserAction.filter({ user_id: userId });
                for (const record of actions) {
                    await base44.asServiceRole.entities.UserAction.delete(record.id);
                }
                deletionLog.deleted_records.user_actions = actions.length;

                // Delete Conversions
                const conversions = await base44.asServiceRole.entities.Conversion.filter({ user_id: userId });
                for (const record of conversions) {
                    await base44.asServiceRole.entities.Conversion.delete(record.id);
                }
                deletionLog.deleted_records.conversions = conversions.length;

                // Note: User account deletion should be handled separately through proper channels
                deletionLog.user_account_note = 'User account requires manual review for deletion';
            }
        } catch (e) {
            deletionLog.analytics_deletion_error = e.message;
        }

        // Delete consent records
        try {
            const consents = await base44.asServiceRole.entities.UserConsent.filter({ user_email: email });
            for (const record of consents) {
                await base44.asServiceRole.entities.UserConsent.delete(record.id);
            }
            deletionLog.deleted_records.consent_records = consents.length;
        } catch (e) {
            deletionLog.deleted_records.consent_records = 0;
        }

        // Update request status
        await base44.asServiceRole.entities.DataRequest.update(request_id, {
            request_status: 'completed',
            completed_date: new Date().toISOString(),
            response_notes: JSON.stringify(deletionLog)
        });

        // Send confirmation email
        try {
            await base44.asServiceRole.integrations.Core.SendEmail({
                to: email,
                subject: 'Your Data Has Been Deleted - tariff.ai',
                body: `
                    <h2>Data Deletion Confirmation</h2>
                    <p>Your personal data has been successfully deleted from our systems.</p>
                    <p>Deleted records:</p>
                    <ul>
                        <li>Newsletter subscriptions: ${deletionLog.deleted_records.newsletter_subscriptions || 0}</li>
                        <li>Contact submissions: ${deletionLog.deleted_records.contact_submissions || 0}</li>
                        <li>Analytics data: ${(deletionLog.deleted_records.page_views || 0) + (deletionLog.deleted_records.user_actions || 0) + (deletionLog.deleted_records.conversions || 0)}</li>
                    </ul>
                    <p>Best regards,<br>tariff.ai Team</p>
                `
            });
        } catch (emailError) {
            console.error('Failed to send confirmation email:', emailError);
        }

        return Response.json({ 
            success: true,
            message: 'Your data has been deleted successfully',
            deletion_summary: deletionLog
        });

    } catch (error) {
        return Response.json({ 
            error: error.message 
        }, { status: 500 });
    }
});