"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="secondary"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-90 rotate-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
}