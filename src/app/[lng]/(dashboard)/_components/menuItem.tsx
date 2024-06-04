"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  icon: LucideIcon;
  label: string;
  href: string;
  lng: string;
};

export default function MenuItem({ icon: Icon, label, href, lng }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  // Construct the full path with the language prefix
  const fullHref = `/${lng}${href}`;

  const isActive =
    (pathname === "/" && fullHref === "/") ||
    pathname === fullHref ||
    pathname?.startsWith(`${fullHref}/`);
  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex flex-col items-center gap-y-4 h-12 rounded-md text-slate-300 text-lg font-[500] transition-all hover:text-slate-300 hover:bg-sky-500/20 overflow-hidden",
        isActive &&
          "text-sky-700 bg-sky-700/20 hover:bg-sky-500/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-y-2 pt-2 px-2">
        <Icon
          size={22}
          className={cn("text-slate-300 mr-2", isActive && "text-sky-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "h-2 opacity-0 border-2 border-sky-700 w-full transition-all -mt-2",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
}
