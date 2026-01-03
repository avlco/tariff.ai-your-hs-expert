import React, { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const langs = ['en', 'he', 'fr', 'de', 'es', 'it', 'ru', 'ja', 'pt'];
      const res = {};
      for (const l of langs) {
        try {
          const m = await import(`../locales/${l}.json`);
          res[l] = m.default;
        } catch (e) {
          res[l] = { error: e.message };
        }
      }
      setData(res);
    }
    load();
  }, []);

  if (!data) return <div>Loading locales...</div>;

  return (
    <pre id="locales-data" style={{whiteSpace: 'pre-wrap'}}>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}