import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { email, is_consented, source_page } = await req.json();

        if (!email || !is_consented) {
            return Response.json({ 
                error: 'Email and consent are required' 
            }, { status: 400 });
        }

        // Check if email already exists
        const existing = await base44.asServiceRole.entities.NewsletterSubscriber.filter({ 
            email: email 
        });

        if (existing && existing.length > 0) {
            return Response.json({ 
                error: 'Email already subscribed',
                already_subscribed: true
            }, { status: 409 });
        }

        // Create new subscriber
        const result = await base44.asServiceRole.entities.NewsletterSubscriber.create({
            email,
            is_consented,
            source_page: source_page || 'unknown',
            subscription_date: new Date().toISOString()
        });

        return Response.json({ 
            success: true,
            id: result.id,
            message: 'Successfully subscribed to newsletter'
        });

    } catch (error) {
        return Response.json({ 
            error: error.message 
        }, { status: 500 });
    }
});