import { CONTACT_EMAIL, POLICIES_LAST_UPDATED } from "@/lib/site-config";

type PolicyPageProps = {
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function ContactEmail() {
  if (!CONTACT_EMAIL) {
    return <>our customer service team</>;
  }

  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-gray-900">
      {CONTACT_EMAIL}
    </a>
  );
}

export default function PolicyPage({ title, intro, children }: PolicyPageProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="font-cormorant text-4xl font-light text-gray-900 sm:text-5xl">
        {title}
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Last updated: {POLICIES_LAST_UPDATED}
      </p>

      <p className="mt-6 text-base leading-relaxed text-gray-600">{intro}</p>

      <div className="mt-10 space-y-8 text-gray-700 [&_a]:underline [&_h2]:mb-2 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-gray-900 [&_li]:leading-relaxed [&_p]:leading-relaxed [&_p+p]:mt-3 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
