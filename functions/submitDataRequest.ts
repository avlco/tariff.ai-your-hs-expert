import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { request_type, requester_email, requester_name, request_details } = await req.json();

        if (!request_type || !requester_email || !requester_name) {
            return Response.json({ 
                error: 'Request type, email, and name are required' 
            }, { status: 400 });
        }

        // Generate verification code
        const verificationCode = Math.random().toString(36).substring(2, 8).toUpperCase();

        // Create data request
        const result = await base44.asServiceRole.entities.DataRequest.create({
            request_type,
            requester_email,
            requester_name,
            request_details: request_details || '',
            verification_code: verificationCode,
            verification_status: 'pending',
            request_status: 'submitted'
        });

        // Send verification email
        try {
            await base44.asServiceRole.integrations.Core.SendEmail({
                to: requester_email,
                subject: 'Verify Your Data Request - tariff.ai',
                body: `
                    <h2>Data Request Verification</h2>
                    <p>Hello ${requester_name},</p>
                    <p>We received a data request from this email address. To verify your identity and process your request, please use the following verification code:</p>
                    <h3 style="background: #f0f0f0; padding: 10px; text-align: center; font-family: monospace; letter-spacing: 3px;">${verificationCode}</h3>
                    <p>This code will expire in 24 hours.</p>
                    <p>If you did not make this request, please disregard this email.</p>
                    <p>Best regards,<br>tariff.ai Team</p>
                `
            });
        } catch (emailError) {
            console.error('Failed to send verification email:', emailError);
        }

        return Response.json({ 
            success: true,
            request_id: result.id,
            message: 'Data request submitted. Please check your email for verification code.'
        });

    } catch (error) {
        return Response.json({ 
            error: error.message 
        }, { status: 500 });
    }
});