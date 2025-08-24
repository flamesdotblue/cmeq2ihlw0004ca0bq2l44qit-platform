'use client';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <div style={{ padding: 24, fontFamily: 'ui-sans-serif, system-ui' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>Something went wrong</h2>
          <p style={{ marginTop: 8, color: '#6b7280' }}>{error?.message || 'An unexpected error occurred.'}</p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: 16,
              padding: '10px 16px',
              borderRadius: 9999,
              background: '#e5e7eb',
              border: '1px solid #d1d5db',
              fontWeight: 600,
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
