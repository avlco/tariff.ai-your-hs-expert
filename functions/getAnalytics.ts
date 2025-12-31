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
        const limit = parseInt(url.searchParams.get('limit') || '100');
        const skip = parseInt(url.searchParams.get('skip') || '0');

        let query = {};
        
        // Add date filtering if provided
        if (startDate || endDate) {
            query.created_date = {};
            if (startDate) query.created_date.$gte = startDate;
            if (endDate) query.created_date.$lte = endDate;
        }

        let data;
        let stats = {};

        switch (entityType) {
            case 'pageview':
                data = await base44.asServiceRole.entities.PageView.filter(
                    query, 
                    '-created_date', 
                    limit, 
                    skip
                );
                
                // Calculate stats
                const totalViews = data.length;
                const uniqueSessions = new Set(data.map(d => d.session_id)).size;
                const avgDuration = data.reduce((sum, d) => sum + (d.duration || 0), 0) / totalViews;
                
                stats = {
                    total_views: totalViews,
                    unique_sessions: uniqueSessions,
                    avg_duration: avgDuration.toFixed(2),
                    device_breakdown: {
                        desktop: data.filter(d => d.device_type === 'desktop').length,
                        mobile: data.filter(d => d.device_type === 'mobile').length,
                        tablet: data.filter(d => d.device_type === 'tablet').length
                    }
                };
                break;

            case 'action':
                data = await base44.asServiceRole.entities.UserAction.filter(
                    query, 
                    '-created_date', 
                    limit, 
                    skip
                );
                
                stats = {
                    total_actions: data.length,
                    action_types: {}
                };
                
                // Count by action type
                data.forEach(action => {
                    stats.action_types[action.action_type] = 
                        (stats.action_types[action.action_type] || 0) + 1;
                });
                break;

            case 'conversion':
                data = await base44.asServiceRole.entities.Conversion.filter(
                    query, 
                    '-created_date', 
                    limit, 
                    skip
                );
                
                const totalValue = data.reduce((sum, d) => sum + (d.value || 0), 0);
                
                stats = {
                    total_conversions: data.length,
                    total_value: totalValue.toFixed(2),
                    conversion_types: {}
                };
                
                // Count by conversion type
                data.forEach(conv => {
                    stats.conversion_types[conv.conversion_type] = 
                        (stats.conversion_types[conv.conversion_type] || 0) + 1;
                });
                break;

            default:
                return Response.json({ error: 'Invalid type parameter' }, { status: 400 });
        }

        return Response.json({
            success: true,
            type: entityType,
            data,
            stats,
            pagination: {
                limit,
                skip,
                returned: data.length
            }
        });

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});