import type { NextConfig } from "next";

function getSupabaseStorageRemotePatterns(): NonNullable<
  NextConfig["images"]
>["remotePatterns"] {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!supabaseUrl) {
    return [];
  }

  const parsedUrl = new URL(supabaseUrl);
  const protocol = parsedUrl.protocol.replace(":", "");

  if (protocol !== "http" && protocol !== "https") {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL must use HTTP or HTTPS.");
  }

  return [
    {
      protocol,
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      pathname: "/storage/v1/object/public/product-images/**",
    },
  ];
}

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: getSupabaseStorageRemotePatterns(),
  },
};

export default nextConfig;
