import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { NavbarSheet } from "./MobileNavbar";
import { MenuIcon } from "lucide-react";

export function Navbar() {
  return (
    <Menubar className="w-full justify-between sm:justify-between items-center">
      <div className="flex items-center">
        <MenubarMenu>
          <MenubarTrigger className="block sm:hidden">
            <NavbarSheet>

              <MenuIcon size={15} />
            </NavbarSheet>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Logo</MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="flex items-center">
        <MenubarMenu>
          <MenubarTrigger className="hidden sm:block">Home</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hidden sm:block">About Us</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="hidden sm:block">Products</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Home Loan</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Loan Against a property</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Working Capital Loan</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Business Loan</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Personal Loan</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hidden sm:block">Tools</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>EMI Calculator</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Balance Transfer Calculator</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Know your credit score</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <div className="flex items-center">
        <MenubarMenu>
          <MenubarTrigger className="hidden sm:block">
            Apply for Loan
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="hidden sm:block">
            Become a partner
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Login</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Login as Customer</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Login as Partner</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
