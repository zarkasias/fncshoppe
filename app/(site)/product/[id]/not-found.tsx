import Link from "next/link";

export default function ProductNotFound() {
  return <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 pb-20">
    <p className="text-gray-500">Product not found</p>
    <Link href="/" className="text-sm font-medium text-[#38BDF8] hover:underline">Back to shop</Link>
  </div>;
}
