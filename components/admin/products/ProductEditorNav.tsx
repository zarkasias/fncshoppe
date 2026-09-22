"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ProductEditorNavProps = {
  productId: string;
};

export default function ProductEditorNav({ productId }: ProductEditorNavProps) {
  const pathname = usePathname();

  const items = [
    {
      label: "Product",
      href: `/admin/products/${productId}/edit`,
    },
    {
      label: "Images",
      href: `/admin/products/${productId}/edit/images`,
    },
    {
      label: "Selling",
      href: `/admin/products/${productId}/edit/selling`,
    },
    {
      label: "Review",
      href: `/admin/products/${productId}/edit/review`,
    },
  ];

  return (
    <nav className="flex gap-2 overflow-x-auto border-b border-gray-200 pb-3 lg:flex-col lg:border-r lg:border-b-0 lg:pr-6 lg:pb-0">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-sky-50 text-sky-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
