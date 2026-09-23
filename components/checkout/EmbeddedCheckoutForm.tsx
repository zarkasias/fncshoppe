"use client";

import { useCallback } from "react";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";

import { stripePromise } from "@/lib/stripe/client";

import { createCheckoutSession } from "@/app/(site)/checkout/action";

type EmbeddedCheckoutFormProps = {
  variantId: string;
  quantity: number;
};

export default function EmbeddedCheckoutForm({
  variantId,
  quantity,
}: EmbeddedCheckoutFormProps) {
  const fetchClientSecret = useCallback(async () => {
    return createCheckoutSession({
      variantId,
      quantity,
    });
  }, [variantId, quantity]);

  return (
    <EmbeddedCheckoutProvider
      stripe={stripePromise}
      options={{ fetchClientSecret }}
    >
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  );
}
