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
            verification_status: 'verified'
        });

        if (!requests || requests.length === 0) {
            return Response.json({ 
                error: 'Invalid or unverified request' 
            }, { status: 403 });
        }

        const dataRequest = requests[0];

        // Collect all personal data
        const userData = {
            collection_date: new Date().toISOString(),
            email: email
        };

        // Get user account data
        try {
            const users = await base44.asServiceRole.entities.User.filter({ email: email });
            userData.account = users[0] || null;
        } catch (e) {
            userData.account = null;
        }

        // Get newsletter subscriptions
        try {
            const newsletters = await base44.asServiceRole.entities.NewsletterSubscriber.filter({ email: email });
            userData.newsletter_subscriptions = newsletters;
        } catch (e) {
            userData.newsletter_subscriptions = [];
        }

        // Get contact submissions
        try {
            const contacts = await base44.asServiceRole.entities.ContactSubmission.filter({ email: email });
            userData.contact_submissions = contacts;
        } catch (e) {
            userData.contact_submissions = [];
        }

        // Get analytics data (if user_id exists)
        if (userData.account) {
            try {
                const pageViews = await base44.asServiceRole.entities.PageView.filter({ user_id: userData.account.id });
                userData.page_views = pageViews;
            } catch (e) {
                userData.page_views = [];
            }

            try {
                const actions = await base44.asServiceRole.entities.UserAction.filter({ user_id: userData.account.id });
                userData.user_actions = actions;
            } catch (e) {
                userData.user_actions = [];
            }

            try {
                const conversions = await base44.asServiceRole.entities.Conversion.filter({ user_id: userData.account.id });
                userData.conversions = conversions;
            } catch (e) {
                userData.conversions = [];
            }
        }

        // Get consent records
        try {
            const consents = await base44.asServiceRole.entities.UserConsent.filter({ user_email: email });
            userData.consent_records = consents;
        } catch (e) {
            userData.consent_records = [];
        }

        // Update request status
        await base44.asServiceRole.entities.DataRequest.update(request_id, {
            request_status: 'completed',
            completed_date: new Date().toISOString(),
            response_notes: 'Data access request fulfilled'
        });

        return Response.json({ 
            success: true,
            data: userData
        });

    } catch (error) {
        return Response.json({ 
            error: error.message 
        }, { status: 500 });
    }
});