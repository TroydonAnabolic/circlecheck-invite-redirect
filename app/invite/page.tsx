// filepath: circlecheck-invite-redirect/app/invite/page.tsx
import { Suspense } from 'react';
import InviteRedirectClient from './InviteRedirectClient';

export const dynamic = 'force-dynamic';

interface InviteRedirectPageProps {
    searchParams?: {
        invite_id?: string | string[];
    };
}

export default function InviteRedirectPage({ searchParams }: InviteRedirectPageProps) {
    const rawInviteId = searchParams?.invite_id;
    const inviteId = Array.isArray(rawInviteId) ? rawInviteId[0] : rawInviteId;

    return (
        <Suspense fallback={null}>
            <InviteRedirectClient inviteId={inviteId ?? null} />
        </Suspense>
    );
}
