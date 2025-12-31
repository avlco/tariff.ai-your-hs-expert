import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen font-sans antialiased">
      {children}
    </div>
  );
}