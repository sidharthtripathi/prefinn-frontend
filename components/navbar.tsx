"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const products: { title: string; href: string; description: string }[] = [
  {
    title: "Home Loan",
    href: "/home-loan",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Loan against property",
    href: "/loan-against-property",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Working Capital Loan",
    href: "/working-capital-loan",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Business Loan",
    href: "/business-loan",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Personal Loan",
    href: "/personal-loan",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

const tools: { title: string; href: string; description: string }[] = [
  { title: "EMI calculator", description: "zyd", href: "/emi-calculator" },
  {
    title: "Balance transfer calculator",
    description: "zyd",
    href: "/balance-transfer-calculator",
  },
  { title: "Know your credit score", description: "zyd", href: "/cibilscore" },
  {
    title: "check your credibility",
    description: "zyd",
    href: "/eligibility-check",
  },
];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList >
       
        
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {tools.map((tool) => (
                  <ListItem
                    key={tool.title}
                    title={tool.title}
                    href={tool.href}
                  >
                    {tool.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {products.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                    href={product.href}
                  >
                    {product.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/loan-apply" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Apply for loan
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/become-partner" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Become a partner
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
       
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
