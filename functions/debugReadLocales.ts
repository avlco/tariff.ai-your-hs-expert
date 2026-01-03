import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        const languages = ['en', 'he', 'fr', 'de', 'es', 'it', 'ru', 'ja', 'pt'];
        const results = {};
        
        for (const lang of languages) {
            try {
                // Try reading directly from CWD (which is /src)
                let content;
                try {
                    content = await Deno.readTextFile(`${lang}.json`);
                } catch (e) {
                     try {
                        content = await Deno.readTextFile(`locales/${lang}.json`);
                    } catch (e2) {
                        content = "Not found";
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
        
        // Also list files in CWD to be sure
        const files = [];
        try {
            for await (const dirEntry of Deno.readDir(".")) {
                files.push(dirEntry.name);
            }
        } catch(e) {
            files.push("Error listing dir: " + e.message);
        }

        return Response.json({ results, files, cwd: Deno.cwd() });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});