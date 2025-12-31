import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { full_name, email, company, subject, message } = await req.json();

        if (!full_name || !email || !subject) {
            return Response.json({ 
                error: 'Full name, email, and subject are required' 
            }, { status: 400 });
        }

        // Create contact submission
        const result = await base44.asServiceRole.entities.ContactSubmission.create({
            full_name,
            email,
            company: company || '',
            subject,
            message: message || '',
            submission_date: new Date().toISOString()
        });

        return Response.json({ 
            success: true,
            id: result.id,
            message: 'Contact form submitted successfully'
        });

    } catch (error) {
        return Response.json({ 
            error: error.message 
        }, { status: 500 });
    }
});