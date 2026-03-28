"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import {
  Home,
  LineChart,
  CreditCard,
  MessageCircle,
  Trophy,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "About", icon: LineChart, href: "#about" },
  { label: "Themes", icon: CreditCard, href: "#themes" },
  { label: "Timeline", icon: MessageCircle, href: "#timeline" },
  { label: "Prizes", icon: Trophy, href: "#prizes" },
  { label: "Contact", icon: User, href: "#contact" },
];

const MOBILE_LABEL_WIDTH = 72;

type BottomNavBarProps = {
  className?: string;
  defaultIndex?: number;
  stickyBottom?: boolean;
};

export function BottomNavBar({
  className,
  defaultIndex = 0,
  stickyBottom = false,
}: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "bg-black/70 border border-cyan-400/40 rounded-full flex items-center p-2 shadow-[0_0_22px_rgba(0,229,255,0.22)] space-x-1 min-w-[320px] max-w-[95vw] h-[52px] backdrop-blur-md",
        stickyBottom && "fixed inset-x-0 bottom-4 mx-auto z-40 w-fit",
        className,
      )}
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <motion.a
            key={item.label}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "flex items-center gap-0 px-3 py-2 rounded-full transition-colors duration-200 relative h-10 min-w-[44px] min-h-[40px] max-h-[44px]",
              isActive
                ? "bg-cyan-400/15 text-cyan-300 gap-2"
                : "bg-transparent text-gray-300 hover:bg-cyan-400/10",
              "focus:outline-none focus-visible:ring-0",
            )}
            href={item.href}
            onClick={() => setActiveIndex(idx)}
            aria-label={item.label}
          >
            <Icon
              size={22}
              strokeWidth={2}
              aria-hidden
              className="transition-colors duration-200"
            />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "8px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.19 },
                marginLeft: { duration: 0.19 },
              }}
              className={cn("overflow-hidden flex items-center max-w-[72px]")}
            >
              <span
                className={cn(
                  "font-medium text-xs whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis text-[clamp(0.625rem,0.5263rem+0.5263vw,1rem)] leading-[1.9]",
                  isActive ? "text-cyan-300" : "opacity-0",
                )}
                title={item.label}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.a>
        );
      })}
    </motion.nav>
  );
}

export default BottomNavBar;