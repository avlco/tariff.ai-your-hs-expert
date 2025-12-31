import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { request_id, verification_code } = await req.json();

        if (!request_id || !verification_code) {
            return Response.json({ 
                error: 'Request ID and verification code are required' 
            }, { status: 400 });
        }

        // Get the data request
        const requests = await base44.asServiceRole.entities.DataRequest.filter({
            id: request_id
        });

        if (!requests || requests.length === 0) {
            return Response.json({ 
                error: 'Request not found' 
            }, { status: 404 });
        }

        const dataRequest = requests[0];

        // Check if already verified
        if (dataRequest.verification_status === 'verified') {
            return Response.json({ 
                error: 'Request already verified' 
            }, { status: 400 });
        }

        // Verify code
        if (dataRequest.verification_code !== verification_code.toUpperCase()) {
            return Response.json({ 
                error: 'Invalid verification code' 
            }, { status: 400 });
        }

        // Check if request is older than 24 hours
        const requestDate = new Date(dataRequest.created_date);
        const now = new Date();
        const hoursDiff = (now - requestDate) / (1000 * 60 * 60);
        
        if (hoursDiff > 24) {
            await base44.asServiceRole.entities.DataRequest.update(request_id, {
                verification_status: 'failed',
                request_status: 'rejected',
                response_notes: 'Verification code expired'
            });
            
            return Response.json({ 
                error: 'Verification code expired' 
            }, { status: 400 });
        }

        // Update request as verified
        await base44.asServiceRole.entities.DataRequest.update(request_id, {
            verification_status: 'verified',
            request_status: 'under_review'
        });

        return Response.json({ 
            success: true,
            message: 'Request verified successfully. We will process your request within 30 days.'
        });

    } catch (error) {
        return Response.json({ 
            error: error.message 
        }, { status: 500 });
    }
});