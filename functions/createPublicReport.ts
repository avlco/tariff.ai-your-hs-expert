import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        // 1. Validate API Key
        const apiKey = req.headers.get("X-API-KEY");
        const validApiKey = Deno.env.get("APP_TARIFFAI_API_KEY") || Deno.env.get("TARIFFAI_API_KEY");
        
        if (!validApiKey || apiKey !== validApiKey) {
            return Response.json({ error: "Unauthorized: Invalid API Key" }, { status: 401 });
        }

        const base44 = createClientFromRequest(req);
        
        // 2. Get Report Data
        const body = await req.json();
        if (!body) {
            return Response.json({ error: "Missing report data" }, { status: 400 });
        }

        // 3. Generate Token
        const token = crypto.randomUUID();

        // 4. Calculate Expiry (7 days from now)
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);

        // 5. Create Record
        // We assume the body contains the report data. We map specific fields if they exist at the top level,
        // otherwise we put everything into report_data.
        const shareableData = {
            token: token,
            expiry_date: expiryDate.toISOString(),
            report_id: body.id || body.report_id || crypto.randomUUID(), // Fallback if ID is missing in body
            created_by_email: body.created_by_email || "system@api",
            // Specific fields for easier querying if available
            hs_code: body.hs_code,
            product_description: body.product_description,
            origin_country: body.origin_country,
            destination_country: body.destination_country,
            // Store full data payload
            report_data: body
        };

        const newReport = await base44.asServiceRole.entities.ShareableReport.create(shareableData);

        // 6. Return Public URL (updated to lowercase route)
        const baseUrl = Deno.env.get("SELF_BASE_URL") || "https://test.tariff-ai.com"; // Fallback URL if env not set
        const shareUrl = `${baseUrl}/PublicReport?token=${token}`;

        return Response.json({ 
            success: true, 
            shareUrl: shareUrl,
            expiryDate: expiryDate.toISOString()
        });

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});