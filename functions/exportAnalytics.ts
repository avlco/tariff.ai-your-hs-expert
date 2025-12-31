import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        // Verify API key
        const apiKey = req.headers.get('x-api-key');
        const validApiKey = Deno.env.get('ANALYTICS_API_KEY');
        
        if (!apiKey || apiKey !== validApiKey) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const url = new URL(req.url);
        const entityType = url.searchParams.get('type') || 'pageview';
        const startDate = url.searchParams.get('start_date');
        const endDate = url.searchParams.get('end_date');

        let query = {};
        
        if (startDate || endDate) {
            query.created_date = {};
            if (startDate) query.created_date.$gte = startDate;
            if (endDate) query.created_date.$lte = endDate;
        }

        let data;
        let headers;

        switch (entityType) {
            case 'pageview':
                data = await base44.asServiceRole.entities.PageView.filter(query, '-created_date');
                headers = ['ID', 'Created Date', 'Page URL', 'Page Title', 'Referrer', 'Device Type', 'Country', 'Duration', 'Session ID'];
                break;

            case 'action':
                data = await base44.asServiceRole.entities.UserAction.filter(query, '-created_date');
                headers = ['ID', 'Created Date', 'Action Type', 'Action Name', 'Page URL', 'Element ID', 'Element Text', 'Session ID'];
                break;

            case 'conversion':
                data = await base44.asServiceRole.entities.Conversion.filter(query, '-created_date');
                headers = ['ID', 'Created Date', 'Conversion Type', 'Conversion Name', 'Value', 'Currency', 'Page URL', 'Session ID'];
                break;

            default:
                return Response.json({ error: 'Invalid type parameter' }, { status: 400 });
        }

        // Convert to CSV
        const csvRows = [headers.join(',')];
        
        data.forEach(item => {
            const row = [];
            
            switch (entityType) {
                case 'pageview':
                    row.push(
                        item.id,
                        item.created_date,
                        `"${item.page_url}"`,
                        `"${item.page_title || ''}"`,
                        `"${item.referrer || ''}"`,
                        item.device_type,
                        item.country || '',
                        item.duration || 0,
                        item.session_id
                    );
                    break;

                case 'action':
                    row.push(
                        item.id,
                        item.created_date,
                        item.action_type,
                        `"${item.action_name}"`,
                        `"${item.page_url}"`,
                        item.element_id || '',
                        `"${item.element_text || ''}"`,
                        item.session_id
                    );
                    break;

                case 'conversion':
                    row.push(
                        item.id,
                        item.created_date,
                        item.conversion_type,
                        `"${item.conversion_name}"`,
                        item.value || 0,
                        item.currency,
                        `"${item.page_url}"`,
                        item.session_id
                    );
                    break;
            }
            
            csvRows.push(row.join(','));
        });

        const csv = csvRows.join('\n');
        const filename = `analytics_${entityType}_${new Date().toISOString().split('T')[0]}.csv`;

        return new Response(csv, {
            status: 200,
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="${filename}"`
            }
        });

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});