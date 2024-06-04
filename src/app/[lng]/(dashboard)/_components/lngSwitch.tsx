"use client";
import React from "react";
import Link from "next/link";
import { languages } from "../../../i18n/settings";

type Props = {
  lng: string;
}

export default function LngSwitch({ lng }:Props) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, lang: string) => {
        if (lng === lang) {
          event.preventDefault(); // Prevent navigation if it's the current language
          return;
        }
        // Apply the class directly to the clicked element
        const svgElement = event.currentTarget.querySelector('svg');
        if (svgElement) {
            svgElement.classList.add('grayscaled');
        }
      };

  return (
    <>
    {languages
      .filter((l) => lng !== l)
      .map((l, index) => (
        <React.Fragment key={l}>  {/* Key is now correctly placed on the top-level fragment */}
          <div className="text-white">
            {index > 0 && " or "}
            <Link 
            href={`/${l}`} 
            scroll={false}
            onClick={(e) => handleClick(e, l)}
            aria-label="Switch Language"
            >
              {l === "en" ? ("EN") : ("FR")}
              </Link>
            </div>
          </React.Fragment>
        ))}
    </>
  );
}
