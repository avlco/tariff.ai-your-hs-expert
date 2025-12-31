import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { token } = await req.json();

        if (!token) {
            return Response.json({ error: "Token is required" }, { status: 400 });
        }

        // 1. Fetch Report by Token using Service Role (to ensure access even if RLS was restrictive)
        const reports = await base44.asServiceRole.entities.ShareableReport.filter({ token: token });

        if (!reports || reports.length === 0) {
            return Response.json({ error: "Report not found" }, { status: 404 });
        }

        const report = reports[0];

        // 2. Check Expiry
        const now = new Date();
        const expiry = new Date(report.expiry_date);

        if (now > expiry) {
            return Response.json({ error: "Report expired" }, { status: 410 }); // 410 Gone
        }

        // 3. Return Data
        return Response.json({ 
            success: true, 
            data: report.report_data,
            meta: {
                created_at: report.created_date,
                expires_at: report.expiry_date
            }
        });

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});