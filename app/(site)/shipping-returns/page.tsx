import type { Metadata } from "next";
import PolicyPage, { ContactEmail } from "@/components/legal/PolicyPage";

export const metadata: Metadata = {
  title: "Shipping & Returns | FNC Shoppe",
};

// Interim policy. TODO: Confirm the return window, conditions and who pays return shipping.
export default function ShippingReturnsPage() {
  return (
    <PolicyPage
      title="Shipping & Returns"
      intro="How your order gets to you, and what to do if something isn't right."
    >
      <section>
        <h2>Shipping</h2>
        <ul>
          <li>We currently ship within the United States only.</li>
          <li>Standard shipping is a flat $4.00 per order.</li>
          <li>Orders are typically delivered within 3–7 business days.</li>
        </ul>
        <p>
          Delivery times are estimates and may vary because of carrier delays,
          holidays or weather. Please make sure your shipping address is
          correct when you check out; we are not responsible for orders sent
          to an incorrect address provided at checkout.
        </p>
      </section>

      <section>
        <h2>Returns</h2>
        <p>
          We want you to love your piece. If you are not happy with it, you
          may return it within 14 days of delivery for a refund, as long as it
          is unused and in its original condition and packaging.
        </p>
        <p>To start a return, contact <ContactEmail /> with your order number. Please note:</p>
        <ul>
          <li>Return shipping costs are the buyer&rsquo;s responsibility unless the item arrived damaged or we sent the wrong item.</li>
          <li>The original shipping charge is not refundable.</li>
          <li>Custom or personalized orders cannot be returned unless they arrive damaged.</li>
        </ul>
      </section>

      <section>
        <h2>Damaged or incorrect items</h2>
        <p>
          We pack every piece with care, but accidents happen. If your order
          arrives damaged or is not what you ordered, please contact{" "}
          <ContactEmail /> within 7 days of delivery with your order number
          and photos of the item and packaging. We will arrange a replacement
          where possible, or a full refund including shipping.
        </p>
      </section>

      <section>
        <h2>Refunds</h2>
        <p>
          Once we receive and inspect your return, we will issue a refund to
          your original payment method. Refunds are usually processed within
          5–10 business days, though it may take longer for your bank to
          show the credit.
        </p>
      </section>
    </PolicyPage>
  );
}
