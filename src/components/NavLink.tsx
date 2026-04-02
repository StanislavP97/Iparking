import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 120, damping: 20 };
const MotionRouterNavLink = motion.create(RouterNavLink);

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <MotionRouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            "inline-block",
            className,
            isActive && activeClassName,
            isPending && pendingClassName,
          )
        }
        whileHover={{ scale: 1.03, opacity: 0.92 }}
        transition={spring}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
