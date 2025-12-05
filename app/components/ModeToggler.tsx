"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggler() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const handleToggle = () => {
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    if (!mounted) {
        return (
            <button
                className="relative flex items-center justify-center rounded-full p-2 w-10 h-10 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur transition-colors duration-200 cursor-pointer shadow-lg"
                aria-label="Toggle theme"
                disabled
                type="button"
            >
                <div className="w-5 h-5 bg-slate-300 dark:bg-slate-600 rounded-full animate-pulse" />
            </button>
        );
    }

    return (
        <button
            onClick={handleToggle}
            className="relative flex items-center justify-center rounded-full p-2 w-10 h-10 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur transition-colors duration-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-lg"
            aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            type="button"
        >
            <SunIcon className={`h-5 w-5 transition-all duration-300 ${resolvedTheme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100 text-yellow-500"}`} />
            <MoonIcon className={`absolute h-5 w-5 transition-all duration-300 ${resolvedTheme === "dark" ? "opacity-100 scale-100 text-indigo-400" : "opacity-0 scale-0"}`} />
        </button>
    );
}