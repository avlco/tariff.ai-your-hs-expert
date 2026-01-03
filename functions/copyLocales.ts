import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import { ensureDir } from "https://deno.land/std@0.168.0/fs/mod.ts";

Deno.serve(async (req) => {
    try {
        // Create target directory
        try {
            await ensureDir("components/locales");
        } catch (e) {
            // ignore if exists
        }

        const langs = ['en', 'he', 'fr', 'de', 'es', 'it', 'ru', 'ja', 'pt'];
        const results = {};

        for (const lang of langs) {
            try {
                const source = `locales/${lang}.json`;
                const dest = `components/locales/${lang}.json`;
                
                // Read content
                const content = await Deno.readTextFile(source);
                // Write to new location
                await Deno.writeTextFile(dest, content);
                
                results[lang] = "Copied";
            } catch (err) {
                results[lang] = err.message;
            }
        }
        
        return Response.json({ results });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});