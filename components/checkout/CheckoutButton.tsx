"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function CheckoutBackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mb-4 inline-flex items-center gap-2 text-sm text-gray-500  hover:text-gray-800"
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="text-xs font-medium uppercase tracking-widest">
        Back
      </span>
    </button>
  );
}
