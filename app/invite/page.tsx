// filepath: circlecheck-invite-redirect/app/invite/page.tsx
import { Suspense } from 'react';
import InviteRedirectClient from './InviteRedirectClient';

export const dynamic = 'force-dynamic';

export default function InviteRedirectPage() {
    return (
        <Suspense fallback={null}>
            <InviteRedirectClient />
        </Suspense>
    );
}
