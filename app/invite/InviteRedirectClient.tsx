'use client';

import { useEffect } from 'react';

const ANDROID_PLAY_URL =
    'https://play.google.com/store/apps/details?id=com.circlecheck.app';

interface InviteRedirectClientProps {
    inviteId: string | null;
}

export default function InviteRedirectClient({ inviteId }: InviteRedirectClientProps) {
    useEffect(() => {
        if (!inviteId) return;

        const appUrl = `circlecheck://invites?invite_id=${inviteId}`;

        // Try to open the app immediately
        window.location.href = appUrl;

        // After 1.5s, if app didn't open, show fallback content
        const timer = setTimeout(() => {
            const el = document.getElementById('fallback');
            if (el) el.style.display = 'block';
        }, 1500);

        return () => clearTimeout(timer);
    }, [inviteId]);

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
            <div style={{ maxWidth: 480, textAlign: 'center' }}>
                <h1>Opening Circle Check…</h1>
                <p>If you have the app installed, it should open automatically.</p>

                <div id="fallback" style={{ display: 'none', marginTop: 24 }}>
                    <p>If nothing happened, you may need to install the app first:</p>
                    <p>
                        <a
                            href={ANDROID_PLAY_URL}
                            style={{ color: '#2563eb', textDecoration: 'underline' }}
                        >
                            Open Circle Check on Google Play
                        </a>
                    </p>
                    <p style={{ marginTop: 16, fontSize: 14, color: '#555' }}>
                        After installing, come back to this email and tap the invite link
                        again.
                    </p>
                </div>
            </div>
        </main>
    );
}
