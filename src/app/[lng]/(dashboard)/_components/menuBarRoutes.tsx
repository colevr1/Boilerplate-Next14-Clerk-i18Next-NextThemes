"use client";

// Import statements organized
import { useTranslation } from "../../../i18n/client"
import { Contact, Weight } from "lucide-react";
import MenuItem from "./menuItem";


// Define props type clearly
type Props = {
  params: {
    lng: string;
  };
};

// MenuBarRoutes component definition
export default function MenuBarRoutes({ params: { lng } }: Props) {
  // Use translation hook with language and translation file
  const { t } = useTranslation(lng, "translation");

  // Define translated routes within the function
  const getTranslatedRoutes = () => {
    return [
      {
        icon: Contact,
        label: t("contacts.title"), // Ensure the key matches what's defined in your translation files
        href: "/contacts",
      },
      {
        icon: Weight,
        label: t("sales.title"), // Ensure the key matches what's defined in your translation files
        href: "/sales",
      },
    ];
  };

  // Get translated routes
  const routes = getTranslatedRoutes();

  // Return JSX
  return (
    <div className="flex flex-row h-full items-center justify-center gap-4">
      {routes.map((route) => (
        <MenuItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
          lng={lng}
        />
      ))}
    </div>
  );
}
