//// filepath: circlecheck-invite-redirect/app/page.tsx
'use client';

const ANDROID_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.circlecheck.app';
const IOS_APP_STORE_URL =
  'https://apps.apple.com/app/idYOUR_IOS_APP_ID'; // replace when you have it

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <div style={{ maxWidth: 640 }}>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          Circle Check
        </h1>
        <p style={{ fontSize: 18, marginBottom: 24, color: '#4b5563' }}>
          Share live locations with the people you trust. Create circles,
          follow friends on the map, and get alerts when they arrive or leave
          places you care about.
        </p>

        <ul style={{ marginBottom: 24, paddingLeft: 20, color: '#4b5563' }}>
          <li>Live map of your circles</li>
          <li>Radius alerts when friends enter or leave an area</li>
          <li>Simple email invites and private sharing</li>
        </ul>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={ANDROID_PLAY_URL}
            style={{
              padding: '10px 18px',
              borderRadius: 9999,
              backgroundColor: '#16a34a',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Get it on Google Play
          </a>

          <a
            href={IOS_APP_STORE_URL}
            style={{
              padding: '10px 18px',
              borderRadius: 9999,
              border: '1px solid #d1d5db',
              color: '#111827',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Coming to iOS
          </a>
        </div>

        <p style={{ marginTop: 24, fontSize: 13, color: '#9ca3af' }}>
          If you followed an invite link from email, install the app and return
          to that email to open your invite.
        </p>
      </div>
    </main>
  );
}