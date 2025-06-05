"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ModeToggler() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="secondary"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`
                relative flex items-center justify-center
                rounded-full p-2
                border border-slate-200 dark:border-slate-700
                bg-white dark:bg-slate-800
                transition-colors duration-200
                hover:bg-indigo-100 dark:hover:bg-indigo-900
                hover:border-indigo-400 dark:hover:border-indigo-500
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                group
                cursor-pointer
            `}>
            <SunIcon
                className={`
                    h-[1.2rem] w-[1.2rem] transition-all
                    ${
                        theme === "dark"
                            ? "opacity-0 scale-75"
                            : "opacity-100 scale-100 text-yellow-500 group-hover:text-yellow-600"
                    }
                `}
            />
            <MoonIcon
                className={`
                    absolute h-[1.2rem] w-[1.2rem] transition-all
                    ${
                        theme === "dark"
                            ? "opacity-100 scale-100 text-indigo-400 group-hover:text-indigo-300"
                            : "opacity-0 scale-75"
                    }
                `}
            />
        </Button>
    );
}