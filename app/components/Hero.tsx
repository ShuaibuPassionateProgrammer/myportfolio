"use client";

import React, { useState } from "react";
import { ArrowDownToLine, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {

    return (
        <section className="text-center space-y-4 pt-10">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-heading font-bold">
                Hi, I'm <span className="text-indigo-600">Ibrahim Shuaibu Isa</span>
            </motion.h1>
        </section>
    );
}