import React, { useState, useEffect } from 'react';

export default function DebugLocales() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const langs = ['en', 'he', 'fr', 'de', 'es', 'it', 'ru', 'ja', 'pt'];
      const res = {};
      for (const l of langs) {
        try {
          // Assuming pages are in src/pages and locales in src/locales
          const m = await import(`../locales/${l}.json`);
          res[l] = m.default;
        } catch (e) {
          res[l] = e.message;
        }
      }
      setData(res);
    }
    load();
  }, []);

  return (
    <pre id="locales-data">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}