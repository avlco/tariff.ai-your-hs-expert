import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const url = Deno.env.get("SELF_BASE_URL");
        if (!url) return Response.json({error: "No SELF_BASE_URL"});
        
        // Wait a bit for the frontend to build/deploy the new page
        // actually we can't wait too long, but usually it's fast.
        
        const pageUrl = `${url}/DebugLocales`;
        console.log("Fetching " + pageUrl);
        
        const response = await fetch(pageUrl);
        const text = await response.text();
        
        return Response.json({ html: text });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});