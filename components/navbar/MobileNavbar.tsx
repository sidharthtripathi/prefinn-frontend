"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
export function NavbarSheet({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side={"left"} className="w-11/12">
        <SheetHeader>
          <SheetDescription><CollapsibleList /></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

import * as React from "react";
import {
  ChevronDown,
  ChevronRight,
  Folder,
  Home,
  Info,
  Settings,
} from "lucide-react";

type CollapsibleListItemProps = {
  title: string;
  icon?: React.ReactNode;
  items?: Array<{
    title: string;
    icon?: React.ReactNode;
    href?: string;
  }>;
  defaultOpen?: boolean;
};

export function CollapsibleListItem({
  title,
  icon,
  items = [],
  defaultOpen = false,
}: CollapsibleListItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50 data-[state=open]:bg-muted/50">
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
        {icon}
        <span>{title}</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-9 pt-1">
        <ul className="flex flex-col gap-1">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href || "#"}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted/50"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function CollapsibleList() {
  return (
    <div className="w-full max-w-sm rounded-lg border bg-card p-4 shadow-sm">
      <h2 className="mb-4 px-3 text-lg font-semibold">Navigation</h2>
      <ul className="flex flex-col gap-1">
        <li>
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50"
          >
            <Home className="h-4" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50"
          >
            <Info className="h-4" />
            <span>About Us</span>
          </a>
        </li>
        <li>
          <CollapsibleListItem
            title="Products"
            icon={<Folder className="h-4" />}
            items={[
              { title: "Home Loan" },
              {
                title: "Loan Against a Property",
              },
              {
                title: "Working Capital Loan",
              },
              { title: "Business Loan" },
              { title: "Personal Loan" },
            ]}
          />
        </li>
        <li>
          <CollapsibleListItem
            title="Tools"
            icon={<Settings className="h-4" />}
            items={[
              { title: "EMI Calculator" },
              {
                title: "Balance Transfer Calculator",
              },
              {
                title: "Know your credit score",
              }
            ]}
          />
        </li>
      </ul>
    </div>
  );
}
