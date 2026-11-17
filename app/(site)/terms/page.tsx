import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage, { ContactEmail } from "@/components/legal/PolicyPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | FNC Shoppe",
};

// Interim terms. TODO: Replace with the Termly terms and conditions once the business is registered.
export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      intro="These terms apply when you use the FNC Shoppe website or buy from us. By using our site or placing an order, you agree to them."
    >
      <section>
        <h2>Our products</h2>
        <p>
          Our pieces are handmade, and most are one of a kind. Small
          variations in color, shape, texture and finish are a natural part
          of handmade work and are not considered defects. We do our best to
          show each piece accurately, but colors may look slightly different
          depending on your screen.
        </p>
      </section>

      <section>
        <h2>Pricing and availability</h2>
        <p>
          All prices are shown in U.S. dollars. Items are available on a
          first-come, first-served basis and are removed from the shop once
          purchased. We may change prices or remove items at any time.
        </p>
        <p>
          If an item is listed with an incorrect price or becomes unavailable
          after you order it, we may cancel the order and give you a full
          refund.
        </p>
      </section>

      <section>
        <h2>Orders and payment</h2>
        <p>
          Your order is an offer to buy, which we accept when your payment is
          confirmed. Payments are processed securely by Stripe. We may refuse
          or cancel an order if we suspect fraud or an error, in which case
          you will receive a full refund.
        </p>
      </section>

      <section>
        <h2>Shipping and returns</h2>
        <p>
          We currently ship within the United States only. See our{" "}
          <Link href="/shipping-returns">Shipping &amp; Returns</Link> page
          for delivery times, costs and our return policy.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          All designs, photographs, text and other content on this site
          belong to FNC Shoppe and may not be copied, reproduced or used
          without our written permission. Buying a piece does not give you
          the right to reproduce its design.
        </p>
      </section>

      <section>
        <h2>Using our site</h2>
        <p>
          You agree not to misuse the site, including by attempting to
          interfere with its operation, access it in unauthorized ways or use
          it for any unlawful purpose.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, FNC Shoppe is not liable for
          any indirect, incidental or consequential damages arising from your
          use of the site or our products. Our total liability for any claim
          relating to an order is limited to the amount you paid for that
          order. Nothing in these terms limits any rights you have under
          applicable consumer protection laws.
        </p>
      </section>

      <section>
        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The version in effect
          when you place an order applies to that order.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          If you have any questions about these terms, please contact{" "}
          <ContactEmail />.
        </p>
      </section>
    </PolicyPage>
  );
}
