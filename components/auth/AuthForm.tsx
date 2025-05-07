"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

interface PartnerLoginFormProps extends React.ComponentPropsWithoutRef<"div"> {
  toggleLogin: Dispatch<SetStateAction<boolean>>;
}
export function PartnerLoginForm({
  className,
  toggleLogin,
  ...props
}: PartnerLoginFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Login as Partner
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to log in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
          <Button
            className="w-full mt-2"
            variant={"secondary"}
            onClick={() => {
              toggleLogin(false);
            }}
          >
            Signup
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function PartnerSignupForm({
  className,
  toggleLogin,
  ...props
}: PartnerLoginFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email and password to create your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Signup
              </Button>
            </div>
          </form>
          <Button
            className="w-full mt-2"
            variant={"secondary"}
            onClick={() => {
              toggleLogin(true);
            }}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function PartnerAuthForm() {
  const [isLogin, toggleLogin] = useState(true);
  return (
    <div>
      {isLogin ? (
        <PartnerLoginForm toggleLogin={toggleLogin} />
      ) : (
        <PartnerSignupForm toggleLogin={toggleLogin} />
      )}
    </div>
  );
}

export function CustomerLoginForm({
  className,
  toggleLogin,
  ...props
}: PartnerLoginFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Login as Partner
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to log in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
          <Button
            className="w-full mt-2"
            variant={"secondary"}
            onClick={() => {
              toggleLogin(false);
            }}
          >
            Signup
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function CustomerSignupForm({
  className,
  toggleLogin,
  ...props
}: PartnerLoginFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email and password to create your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Signup
              </Button>
            </div>
          </form>
          <Button
            className="w-full mt-2"
            variant={"secondary"}
            onClick={() => {
              toggleLogin(true);
            }}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function CustomerAuthForm() {
  const [isLogin, toggleLogin] = useState(true);
  return (
    <div>
      {isLogin ? (
        <CustomerLoginForm toggleLogin={toggleLogin} />
      ) : (
        <CustomerSignupForm toggleLogin={toggleLogin} />
      )}
    </div>
  );
}

export function CustomerAuthDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger className="text-sm font-bold p-2">
        <DialogTitle>{children}</DialogTitle>
      </DialogTrigger>
      <DialogContent>
        <CustomerAuthForm />
      </DialogContent>
    </Dialog>
  );
}

export function PartnerAuthDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger className="text-sm font-bold p-2">
        <DialogTitle>{children}</DialogTitle>
      </DialogTrigger>
      <DialogContent>
        <PartnerAuthForm />
      </DialogContent>
    </Dialog>
  );
}
