import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { eventType, data } = await req.json();

        if (!eventType || !data) {
            return Response.json({ error: 'Missing eventType or data' }, { status: 400 });
        }

        // Generate session ID if not provided
        const sessionId = data.session_id || crypto.randomUUID();

        // Get user agent and IP from request headers
        const userAgent = req.headers.get('user-agent') || 'unknown';
        const ipAddress = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                         req.headers.get('x-real-ip') || 'unknown';

        // Detect device type from user agent
        const isMobile = /Mobile|Android|iPhone/i.test(userAgent);
        const isTablet = /iPad|Tablet/i.test(userAgent);
        const deviceType = isTablet ? 'tablet' : (isMobile ? 'mobile' : 'desktop');

        // Detect browser
        let browser = 'Unknown';
        if (userAgent.includes('Chrome')) browser = 'Chrome';
        else if (userAgent.includes('Safari')) browser = 'Safari';
        else if (userAgent.includes('Firefox')) browser = 'Firefox';
        else if (userAgent.includes('Edge')) browser = 'Edge';

        // Detect OS
        let os = 'Unknown';
        if (userAgent.includes('Windows')) os = 'Windows';
        else if (userAgent.includes('Mac OS')) os = 'macOS';
        else if (userAgent.includes('Linux')) os = 'Linux';
        else if (userAgent.includes('Android')) os = 'Android';
        else if (userAgent.includes('iOS')) os = 'iOS';

        // Extract additional browser data
        const screenResolution = data.screen_resolution || '';
        const language = data.language || '';
        const timezone = data.timezone || '';

        // Get geo-location from IP (using ipapi.co free service)
        let country = '';
        let city = '';
        try {
            if (ipAddress !== 'unknown' && !ipAddress.startsWith('192.168.') && !ipAddress.startsWith('10.')) {
                const geoResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`);
                if (geoResponse.ok) {
                    const geoData = await geoResponse.json();
                    country = geoData.country_name || '';
                    city = geoData.city || '';
                }
            }
        } catch (error) {
            console.error('Geo-IP lookup failed:', error);
        }

        let result;

        switch (eventType) {
            case 'pageview':
                result = await base44.asServiceRole.entities.PageView.create({
                    page_url: data.page_url,
                    page_title: data.page_title,
                    referrer: data.referrer || '',
                    user_agent: userAgent,
                    session_id: sessionId,
                    user_id: data.user_id || '',
                    ip_address: ipAddress,
                    country: country,
                    city: city,
                    device_type: deviceType,
                    browser: browser,
                    os: os,
                    screen_resolution: screenResolution,
                    language: language,
                    timezone: timezone,
                    duration: data.duration || 0,
                    timestamp: new Date().toISOString()
                });
                break;

            case 'action':
                result = await base44.asServiceRole.entities.UserAction.create({
                    action_type: data.action_type,
                    action_name: data.action_name,
                    page_url: data.page_url,
                    element_id: data.element_id || '',
                    element_text: data.element_text || '',
                    element_class: data.element_class || '',
                    session_id: sessionId,
                    user_id: data.user_id || '',
                    scroll_depth: data.scroll_depth || 0,
                    form_id: data.form_id || '',
                    viewport_size: data.viewport_size || '',
                    timestamp_ms: data.timestamp_ms || Date.now(),
                    timestamp: new Date().toISOString(),
                    metadata: data.metadata || {}
                });
                break;

            case 'conversion':
                result = await base44.asServiceRole.entities.Conversion.create({
                    conversion_type: data.conversion_type,
                    conversion_name: data.conversion_name,
                    value: data.value || 0,
                    currency: data.currency || 'USD',
                    page_url: data.page_url,
                    session_id: sessionId,
                    user_id: data.user_id || '',
                    conversion_date: new Date().toISOString(),
                    metadata: data.metadata || {}
                });
                break;

            case 'consent':
                result = await base44.asServiceRole.entities.UserConsent.create({
                    session_id: sessionId,
                    consent_type: data.consent_type,
                    consent_status: data.consent_status,
                    consent_details: data.consent_details || {},
                    ip_address: ipAddress,
                    user_agent: userAgent,
                    privacy_policy_version: data.privacy_policy_version || '1.0',
                    consent_date: new Date().toISOString()
                });
                break;

            default:
                return Response.json({ error: 'Invalid eventType' }, { status: 400 });
            }

        return Response.json({ 
            success: true, 
            id: result.id,
            session_id: sessionId 
        });

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});