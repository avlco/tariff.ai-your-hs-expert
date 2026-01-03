import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    const url = Deno.env.get("SELF_BASE_URL");
    return Response.json({ url });
});