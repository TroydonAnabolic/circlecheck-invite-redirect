// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy – Circle Check",
    description:
        "Learn how Circle Check collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                padding: "40px 24px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <article style={{ maxWidth: 800, color: "#111827", fontSize: 15 }}>
                <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>
                    Privacy Policy
                </h1>
                <p style={{ marginBottom: 16, color: "#4b5563" }}>
                    Last updated: 14 December 2025
                </p>

                <p style={{ marginBottom: 16, color: "#4b5563" }}>
                    This Privacy Policy explains how Circle Check (&quot;we&quot;,
                    &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your
                    information when you use our mobile app and this website.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    1. Information We Collect
                </h2>

                <h3 style={{ fontSize: 16, fontWeight: 600, marginTop: 12 }}>
                    1.1 Account and contact information
                </h3>
                <ul style={{ marginLeft: 20, marginTop: 4, color: "#4b5563" }}>
                    <li>Email address used to sign in and receive invites.</li>
                    <li>Basic profile data such as your display name (if you set one).</li>
                </ul>

                <h3 style={{ fontSize: 16, fontWeight: 600, marginTop: 12 }}>
                    1.2 Location data
                </h3>
                <p style={{ marginTop: 4, color: "#4b5563" }}>
                    Circle Check is a location sharing app. With your permission, we may
                    collect:
                </p>
                <ul style={{ marginLeft: 20, marginTop: 4, color: "#4b5563" }}>
                    <li>
                        Foreground location: your approximate or precise location while the
                        app is open and you have enabled sharing.
                    </li>
                    <li>
                        Background location (optional): if you explicitly enable background
                        sharing, the app may update your location while it is not in the
                        foreground.
                    </li>
                    <li>
                        Circle membership and radius alerts: which circles you belong to,
                        which alert radii you create, and when a circle member enters or
                        leaves those areas.
                    </li>
                </ul>

                <h3 style={{ fontSize: 16, fontWeight: 600, marginTop: 12 }}>
                    1.3 Device and usage data
                </h3>
                <ul style={{ marginLeft: 20, marginTop: 4, color: "#4b5563" }}>
                    <li>
                        Device identifiers such as push notification tokens needed to send
                        alerts to your device.
                    </li>
                    <li>
                        Basic technical information like device type, operating system
                        version, app version, and log data to maintain and improve the
                        service.
                    </li>
                </ul>

                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    2. How We Use Your Information
                </h2>
                <ul style={{ marginLeft: 20, marginTop: 4, color: "#4b5563" }}>
                    <li>To provide the app&apos;s core features and services.</li>
                    <li>
                        To show your location to people in your circles, according to your
                        sharing settings.
                    </li>
                    <li>
                        To send you push notifications when a circle member enters or leaves
                        a radius you configured (subject to your active hours and cooldown
                        settings).
                    </li>
                    <li>To secure, monitor, and improve the stability of the app.</li>
                    <li>To respond to support requests and communicate with you.</li>
                </ul>

                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    3. Legal Bases (if you are in the EU/EEA or similar regions)
                </h2>
                <p style={{ marginTop: 4, color: "#4b5563" }}>
                    Where applicable, we rely on the following legal bases to process your
                    personal data:
                </p>
                <ul style={{ marginLeft: 20, marginTop: 4, color: "#4b5563" }}>
                    <li>
                        <strong>Consent</strong> – for location sharing, push notifications,
                        and optional background location.
                    </li>
                    <li>
                        <strong>Contract</strong> – to provide the app and its features
                        according to our terms.
                    </li>
                    <li>
                        <strong>Legitimate interests</strong> – to maintain and improve the
                        service, prevent abuse, and secure our systems.
                    </li>
                </ul>

                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    4. How We Share Your Information
                </h2>
                <p style={{ marginTop: 4, color: "#4b5563" }}>
                    We do not sell your personal data. We may share information with:
                </p>
                <ul style={{ marginLeft: 20, marginTop: 4, color: "#4b5563" }}>
                    <li>
                        <strong>Service providers</strong>, such as:
                        <ul style={{ marginLeft: 20, marginTop: 4 }}>
                            <li>Cloud hosting and database providers (e.g., Supabase).</li>
                            <li>
                                Push notification services (e.g., Apple Push Notification
                                Service, Firebase Cloud Messaging).
                            </li>
                            <li>
                                Analytics or logging tools used to understand app performance
                                (if enabled).
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Circle members</strong>: depending on your settings, circle
                        members can see your location and when you enter/leave configured
                        radii.
                    </li>
                    <li>
                        <strong>Legal and security purposes</strong>: if required by law or
                        to protect our rights, users, or the public.
                    </li>
                </ul>

                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    5. Data Retention
                </h2>
                <p style={{ marginTop: 4, color: "#4b5563" }}>
                    We retain your information for as long as necessary to provide the
                    service and for legitimate business or legal purposes. If you stop
                    using Circle Check, we may retain certain data for a reasonable period
                    (for example, backups, security logs, or as required by law).
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    6. Your Choices and Rights
                </h2>
                <ul style={{ marginLeft: 20, marginTop: 4, color: "#4b5563" }}>
                    <li>
                        You can enable or disable location sharing in the app&apos;s
                        settings and via your device&apos;s system permissions.
                    </li>
                    <li>
                        You can enable or disable push notifications in the app and in your
                        device&apos;s system settings.
                    </li>
                    <li>
                        You can delete radius alerts or circles you own at any time from
                        within the app.
                    </li>
                    <li>
                        Depending on your jurisdiction, you may have rights to access,
                        correct, or delete your personal data, or to object to certain types
                        of processing.
                    </li>
                </ul>
                <p style={{ marginTop: 4, color: "#4b5563" }}>
                    To exercise these rights or ask questions, contact us using the
                    details below.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    7. Children&apos;s Privacy
                </h2>
                <p style={{ marginTop: 4, color: "#4b5563" }}>
                    Circle Check is not intended for children under 13, and we do not
                    knowingly collect personal information from children under 13. If you
                    believe a child has provided us with personal information, please
                    contact us so we can take appropriate action.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    8. Changes to This Policy
                </h2>
                <p style={{ marginTop: 4, color: "#4b5563" }}>
                    We may update this Privacy Policy from time to time. When we do, we
                    will change the &quot;Last updated&quot; date at the top of this
                    page. In some cases, we may notify you in the app or by email.
                </p>

                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    9. Contact Us
                </h2>
                <p style={{ marginTop: 4, color: "#4b5563" }}>
                    If you have questions about this Privacy Policy or how we handle your
                    data, please contact us at:
                </p>
                <p style={{ marginTop: 4, color: "#4b5563" }}>
                    Email: <a href="mailto:support@circlecheck.app">support@circlecheck.app</a>
                </p>
            </article>
        </main>
    );
}