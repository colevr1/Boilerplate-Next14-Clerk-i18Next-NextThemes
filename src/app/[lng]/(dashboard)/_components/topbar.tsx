"use client"
import { UserButton } from "@clerk/nextjs";
import MenuBarRoutes from "./menuBarRoutes";
import Logo from "./logo";
import LngSwitch from "./lngSwitch";
import ThemeSwitch from "./themeSwitch";
import { useTheme } from 'next-themes';
import { dark } from "@clerk/themes";
import { useState, useEffect } from 'react';

type Props = {
    lng: string;
};

export default function Topbar({ lng }: Props) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const clerkTheme = resolvedTheme === "dark" ? dark : undefined;

    return (
        <div className="w-full h-16 bg-slate-900 flex flex-row justify-between">
            <Logo />
            <div className="text-white">
                <MenuBarRoutes params={{ lng }} />
            </div>
            <div className="p-4 flex flex-row gap-3">
                <ThemeSwitch />
                <LngSwitch lng={lng}/>
                <UserButton appearance={{ baseTheme: clerkTheme }} />
            </div>
        </div>
    );
}