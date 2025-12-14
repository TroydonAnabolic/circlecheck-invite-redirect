// app/help/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Help & FAQ – Circle Check",
    description:
        "Learn how Circle Check works: circles, map, radius alerts, notifications, and account deletion.",
};

export default function HelpPage() {
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
                    Help & FAQ
                </h1>

                {/* Overview */}
                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    What is Circle Check?
                </h2>
                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    Circle Check lets you share your live location with selected circles
                    of people so you can see where everyone is on the map. You stay in
                    control of who can see you and when.
                </p>

                {/* Map & Tracking */}
                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    How does the map & tracking work?
                </h2>
                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    The Map screen shows your location and the locations of people in your
                    circles:
                </p>
                <ul style={{ color: "#4b5563", marginLeft: 20, marginTop: 4 }}>
                    <li>You appear as a green “ME” marker.</li>
                    <li>Each circle member appears as a colored marker with initials.</li>
                    <li>
                        Tap any marker to open a panel with their email, shared circles,
                        last update time, and a &quot;Get Directions&quot; button.
                    </li>
                    <li>
                        The panel also shows the live distance between you and the selected
                        member as locations change.
                    </li>
                </ul>
                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    If you tap &quot;Track&quot; on someone from the Circles screen, the
                    map will center on them and use a highlight color so you can easily
                    follow where they are.
                </p>

                {/* Circles & Invites */}
                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    How do circles and invites work?
                </h2>
                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    Circles are groups of people who can see each other on the map:
                </p>
                <ul style={{ color: "#4b5563", marginLeft: 20, marginTop: 4 }}>
                    <li>You can create a new circle and give it a name.</li>
                    <li>
                        Each member in a circle can have their own marker color that you can
                        change (tap the color swatch).
                    </li>
                    <li>
                        The &quot;Track&quot; button next to a member centers the map on
                        that person and may send them a push notification letting them know
                        you&apos;re getting directions to them.
                    </li>
                </ul>
                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    To invite someone:
                </p>
                <ul style={{ color: "#4b5563", marginLeft: 20, marginTop: 4 }}>
                    <li>Enter their email address and tap &quot;Invite&quot;.</li>
                    <li>
                        If they already have an account, they&apos;ll receive an invite and
                        can Accept or Decline in the app.
                    </li>
                    <li>
                        If they don&apos;t have an account yet, they&apos;ll get a magic
                        link email to sign up and then can join your circle.
                    </li>
                </ul>

                {/* Radius Alerts */}
                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    What are radius alerts and how do they work?
                </h2>
                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    Radius alerts let you define areas on the map where you want to be
                    notified when circle members enter or leave.
                </p>
                <p style={{ color: "#4b5563", marginTop: 4 }}>Creating a radius:</p>
                <ul style={{ color: "#4b5563", marginLeft: 20, marginTop: 4 }}>
                    <li>
                        On the Map screen, choose &quot;New radius at center&quot; (or
                        similar action).
                    </li>
                    <li>
                        Pan/zoom the map so the center is where you want the alert, then
                        choose a name, radius size (in meters), and a color, and save.
                    </li>
                    <li>
                        Radii are shown as colored circles on the map. The app prevents you
                        from creating or moving a radius so that it overlaps any of your
                        other radii.
                    </li>
                </ul>

                <p style={{ color: "#4b5563", marginTop: 4 }}>Managing radii:</p>
                <ul style={{ color: "#4b5563", marginLeft: 20, marginTop: 4 }}>
                    <li>Open the Radius Alerts screen to see all of your radii.</li>
                    <li>
                        For each radius you can see its name, distance, center coordinates,
                        whether it&apos;s enabled, how many circle members are currently
                        inside, and who they are.
                    </li>
                    <li>
                        You can toggle a radius on/off, edit its details, or tap &quot;View
                        on map&quot; to center and highlight it on the map.
                    </li>
                </ul>

                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    Advanced options per radius:
                </p>
                <ul style={{ color: "#4b5563", marginLeft: 20, marginTop: 4 }}>
                    <li>
                        <strong>Cooldown</strong>: minimum time between alerts for the same
                        person and radius. Default is about 1 minute, so you don&apos;t get
                        spammed if someone is hovering around the boundary.
                    </li>
                    <li>
                        <strong>Active hours</strong>: optional &quot;from&quot; / &quot;to&quot; window in 24‑hour
                        time (e.g. 08:00–22:00). Alerts outside this window are paused for
                        that radius.
                    </li>
                    <li>
                        Active hours use your <strong>notification time zone</strong> from
                        Settings (e.g. Europe/Berlin). If alerts don&apos;t fire when you
                        expect, check your time zone there.
                    </li>
                </ul>

                {/* Notifications & Settings */}
                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    How do notifications work and how can I control them?
                </h2>
                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    Circle Check uses push notifications for things like:
                </p>
                <ul style={{ color: "#4b5563", marginLeft: 20, marginTop: 4 }}>
                    <li>New circle invites.</li>
                    <li>When someone accepts or declines an invite (optional).</li>
                    <li>Tracking requests (when someone gets directions to you).</li>
                    <li>
                        Radius alerts when members enter or leave your defined areas.
                    </li>
                </ul>
                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    You can manage notification preferences in the app:
                </p>
                <ul style={{ color: "#4b5563", marginLeft: 20, marginTop: 4 }}>
                    <li>Toggle &quot;Push notifications&quot; on or off.</li>
                    <li>
                        Open your system notification settings to adjust sound, banners,
                        etc.
                    </li>
                    <li>
                        Set your <strong>notification time zone</strong>; this is used for
                        formatting times in alerts and for evaluating each radius&apos;s
                        active hours.
                    </li>
                </ul>

                {/* Privacy & Location */}
                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    Privacy & location sharing
                </h2>
                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    Your location is only visible to people who share at least one circle
                    with you. The app uses one latest‑location row per user in the
                    database to reduce stored history.
                </p>
                <p style={{ color: "#4b5563", marginTop: 4 }}>You stay in control:</p>
                <ul style={{ color: "#4b5563", marginLeft: 20, marginTop: 4 }}>
                    <li>You can turn off &quot;Share live location&quot; in Settings.</li>
                    <li>
                        You can revoke OS location permission at any time in your device
                        settings.
                    </li>
                    <li>
                        If you sign out, your session is cleared and you stop sending
                        updates.
                    </li>
                </ul>

                {/* Account & Deletion */}
                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    Account & data deletion
                </h2>
                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    You can request deletion of your Circle Check account and data:
                </p>
                <ul style={{ color: "#4b5563", marginLeft: 20, marginTop: 4 }}>
                    <li>
                        <strong>In‑app:</strong> Open Settings → &quot;Delete account and
                        data&quot; (in the mobile app). This removes your profile, circle
                        memberships, latest location, radius alerts, and device tokens from
                        Circle Check.
                    </li>
                    <li>
                        <strong>Email (full deletion):</strong> Send a request to{" "}
                        <a href="mailto:circlecheck.help@outlook.com">
                            circlecheck.help@outlook.com
                        </a>{" "}
                        with the subject &quot;Account Deletion Request&quot; and include
                        the email address you use to sign in. We will confirm ownership
                        before proceeding.
                    </li>
                    <li>
                        <strong>Email (partial deletion):</strong> If you would like only
                        some of your data removed (for example, certain circles, locations,
                        or radius alerts), email{" "}
                        <a href="mailto:circlecheck.help@outlook.com">
                            circlecheck.help@outlook.com
                        </a>{" "}
                        with the subject &quot;Partial Data Deletion Request&quot;, the
                        email you use to sign in, and a clear description of what you want
                        deleted.
                    </li>
                </ul>
                <p style={{ color: "#4b5563", marginTop: 4 }}>
                    When we delete your account, we remove or anonymize your profile,
                    memberships, latest location, device tokens, radius subscriptions, and
                    related alert state. Limited server logs may be retained for up to 30
                    days for fraud prevention, debugging, and legal compliance, but these
                    do not include precise location content.
                </p>

                {/* Troubleshooting */}
                <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>
                    Common issues
                </h2>
                <ul style={{ color: "#4b5563", marginLeft: 20, marginTop: 4 }}>
                    <li>
                        If someone does not appear on your map, make sure you both joined
                        the same circle, they have granted location permission and enabled
                        sharing, and they have opened the app recently.
                    </li>
                    <li>
                        If radius alerts don&apos;t fire, check that the radius is enabled
                        and that you can see the member on the map when they move into the
                        area.
                    </li>
                </ul>
            </article>
        </main>
    );
}