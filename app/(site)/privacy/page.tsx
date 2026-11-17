import type { Metadata } from "next";
import PolicyPage, { ContactEmail } from "@/components/legal/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | FNC Shoppe",
};

// Interim policy. TODO: Replace with the Termly privacy policy once the business is registered.
export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro="FNC Shoppe respects your privacy. This policy explains what information we collect when you visit our site or place an order, how we use it, and the choices you have."
    >
      <section>
        <h2>Information we collect</h2>
        <p>When you place an order, we collect:</p>
        <ul>
          <li>Your name and shipping address</li>
          <li>Your email address and phone number</li>
          <li>Details of the items you purchased and the order total</li>
        </ul>
        <p>
          Payments are processed securely by Stripe. Your card details are
          entered directly with Stripe and are never seen or stored by FNC
          Shoppe.
        </p>
        <p>
          You can browse our site without creating an account or giving us
          any personal information.
        </p>
      </section>

      <section>
        <h2>How we use your information</h2>
        <p>We use the information we collect only to:</p>
        <ul>
          <li>Process, fulfill and ship your order</li>
          <li>Contact you about your order, delivery or any issues with it</li>
          <li>Handle returns, refunds and customer service requests</li>
          <li>Prevent fraud and keep our site secure</li>
          <li>Meet our legal, tax and accounting obligations</li>
        </ul>
        <p>
          We will not send you marketing emails unless you have chosen to
          receive them.
        </p>
      </section>

      <section>
        <h2>How we share your information</h2>
        <p>
          We do not sell or rent your personal information. We share it only
          with service providers that help us run the shop, and only as much
          as they need to do their job:
        </p>
        <ul>
          <li>Stripe, to process payments and prevent fraud</li>
          <li>Our database and website hosting providers, to store order records and run the site</li>
          <li>Shipping carriers, to deliver your order</li>
        </ul>
        <p>
          We may also disclose information if required by law or to protect
          our rights, our customers or the public.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          We only use cookies that are strictly necessary for the site to
          work. These include cookies set by Stripe during checkout to keep
          payments secure and prevent fraud. We do not use advertising,
          analytics or tracking cookies.
        </p>
      </section>

      <section>
        <h2>How long we keep your information</h2>
        <p>
          We keep order information for as long as needed to fulfill your
          order and to meet our legal, tax and accounting requirements. After
          that, we delete it or make it anonymous.
        </p>
      </section>

      <section>
        <h2>How we protect your information</h2>
        <p>
          We use reputable service providers and reasonable technical and
          organizational safeguards to protect your information. No method of
          transmission or storage is completely secure, but we work to keep
          your data safe.
        </p>
      </section>

      <section>
        <h2>Your choices and rights</h2>
        <p>
          You may ask us to access, correct or delete the personal information
          we hold about you, subject to any records we are required by law to
          keep. Depending on where you live, including California, you may
          have additional rights under state law. To make a request, contact{" "}
          <ContactEmail />.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          Our site is not directed to children under 13, and we do not
          knowingly collect personal information from them.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. When we do, we will
          change the &ldquo;Last updated&rdquo; date at the top of this page.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          If you have any questions about this policy or your information,
          please contact <ContactEmail />.
        </p>
      </section>
    </PolicyPage>
  );
}
