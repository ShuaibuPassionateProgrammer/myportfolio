"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggler() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex items-center justify-center rounded-full p-2 w-10 h-10 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 cursor-pointer"
            aria-label="Toggle theme"
        >
            <SunIcon className={`h-5 w-5 transition-all ${theme === "dark" ? "opacity-0" : "opacity-100 text-yellow-500"}`} />
            <MoonIcon className={`absolute h-5 w-5 transition-all ${theme === "dark" ? "opacity-100 text-indigo-400" : "opacity-0"}`} />
        </button>
    );
}