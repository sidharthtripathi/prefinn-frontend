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
      "Prefinn helps clients assess their home financing needs by partnering with experienced consultants.",
  },
  {
    title: "Loan against property",
    href: "/loan-against-property",
    description:
      "Prefinn’s finance experts help secure a Loan Against Property (LAP) from top banks.",
  },
  {
    title: "Working Capital Loan",
    href: "/working-capital-loan",
    description:
      "Expert financial solutions to maintain smooth business operations",
  },
  {
    title: "Business Loan",
    href: "/business-loan",
    description: "Prefinn offers Business Loan services to help businesses assess their short-term financing needs",
  },
  {
    title: "Personal Loan",
    href: "/personal-loan",
    description:
      "Prefinn helps clients assess their personal loan requirements by partnering with licensed financial advisors.",
  },
];

const tools: { title: string; href: string; description: string }[] = [
  {
    title: "EMI calculator",
    description: "Estimate your monthly loan installments easily.",
    href: "/emi-calculator",
  },
  {
    title: "Balance transfer calculator",
    description: "Check how much you can save by transferring your loan.",
    href: "/balance-transfer-calculator",
  },
  {
    title: "Know your credit score",
    description: "Get insights into your creditworthiness and score.",
    href: "/cibilscore",
  },
  {
    title: "Check your credibility",
    description: "Find out your loan eligibility based on your profile.",
    href: "/eligibility-check",
  },
];

export function Navbar() {
  return (
    <NavigationMenu className="h-20 border-b-2 max-w-none">
      <NavigationMenuList>
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
          <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {tools.map((tool) => (
                <ListItem key={tool.title} title={tool.title} href={tool.href}>
                  {tool.description}
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
