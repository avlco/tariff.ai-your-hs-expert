import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        // Try to read the files from the current working directory
        const languages = ['en', 'he', 'fr', 'de', 'es', 'it', 'ru', 'ja', 'pt'];
        const results = {};
        
        for (const lang of languages) {
            try {
                // Try different paths
                let content;
                try {
                    content = await Deno.readTextFile(`locales/${lang}.json`);
                } catch (e) {
                    try {
                        content = await Deno.readTextFile(`src/locales/${lang}.json`);
                    } catch (e2) {
                         try {
                            content = await Deno.readTextFile(`./locales/${lang}.json`);
                        } catch (e3) {
                            content = "Not found";
                        }
                    }
                }
                
                if (content !== "Not found") {
                    results[lang] = JSON.parse(content);
                } else {
                    results[lang] = { error: "File not found" };
                }
            } catch (err) {
                results[lang] = { error: err.message };
            }
        }

        return Response.json({ results, cwd: Deno.cwd() });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});