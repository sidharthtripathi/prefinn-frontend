"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function LoanApplyForm() {
  return (
    <div>
      <h1 className="text-center">Request a Loan Quote</h1>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email-ID" />
          <Input type="tel" placeholder="Mobile Number" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Loan Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Loan Type</SelectLabel>
                <SelectItem value="Home Loan">Home Loan</SelectItem>
                <SelectItem value="Loan Against Property">
                  Loan Agaist property
                </SelectItem>
                <SelectItem value="Working Capital Loan">
                  Working Capital Loan
                </SelectItem>
                <SelectItem value="Business Loan">Business Loan</SelectItem>
                <SelectItem value="Personal Loan">Personal Loan</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Loan Amount" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Loan Amount</SelectLabel>
                <SelectItem value="1L-5L">1L-5L</SelectItem>
                <SelectItem value="5L-10L">5L-10L</SelectItem>
                <SelectItem value="20L-50L">20L-50L</SelectItem>
                <SelectItem value="50L-1Cr">50L-1Cr</SelectItem>
                <SelectItem value="1Cr-5Cr">1Cr-5Cr</SelectItem>
                <SelectItem value="Above 5Cr">Above 5Cr</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <StateComboBox />
          <BankComboBox />
        </div>
        <Button className="w-full">Submit</Button>
      </form>
    </div>
  );
}

const states = [
  { value: "andhra_pradesh", label: "Andhra Pradesh" },
  { value: "arunachal_pradesh", label: "Arunachal Pradesh" },
  { value: "assam", label: "Assam" },
  { value: "bihar", label: "Bihar" },
  { value: "chhattisgarh", label: "Chhattisgarh" },
  { value: "goa", label: "Goa" },
  { value: "gujarat", label: "Gujarat" },
  { value: "haryana", label: "Haryana" },
  { value: "himachal_pradesh", label: "Himachal Pradesh" },
  { value: "jharkhand", label: "Jharkhand" },
  { value: "karnataka", label: "Karnataka" },
  { value: "kerala", label: "Kerala" },
  { value: "madhya_pradesh", label: "Madhya Pradesh" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "manipur", label: "Manipur" },
  { value: "meghalaya", label: "Meghalaya" },
  { value: "mizoram", label: "Mizoram" },
  { value: "nagaland", label: "Nagaland" },
  { value: "odisha", label: "Odisha" },
  { value: "punjab", label: "Punjab" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "sikkim", label: "Sikkim" },
  { value: "tamil_nadu", label: "Tamil Nadu" },
  { value: "telangana", label: "Telangana" },
  { value: "tripura", label: "Tripura" },
  { value: "uttar_pradesh", label: "Uttar Pradesh" },
  { value: "uttarakhand", label: "Uttarakhand" },
  { value: "west_bengal", label: "West Bengal" },
];

function StateComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value
            ? states.find((state) => state.value === value)?.label
            : "Select State..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {states.map((state) => (
                <CommandItem
                  key={state.value}
                  value={state.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {state.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === state.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

const banks = [
  { value: "hdfc_bank", label: "HDFC Bank" },
  { value: "icici_bank", label: "ICICI Bank" },
  { value: "axis_bank", label: "Axis Bank" },
  { value: "state_bank_of_india", label: "State Bank of India" },
  { value: "kotak_mahindra_bank", label: "Kotak Mahindra Bank" },
  { value: "yes_bank", label: "Yes Bank" },
  { value: "boi", label: "BOI" },
  { value: "motilal_oswal", label: "Motilal Oswal" },
  { value: "hero_fincorp", label: "Hero Fincorp" },
  { value: "hsbc", label: "HSBC" },
  { value: "iifl", label: "IIFL" },
  { value: "lnt_finance", label: "L&T Finance" },
  { value: "motilal_oswal_home", label: "Motilal Oswal Home" },
  { value: "aditya_birla_capital", label: "Aditya Birla Capital" },
  { value: "bajaj_finserv", label: "Bajaj Finserv" },
  { value: "other", label: "Other" },
];

function BankComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value
            ? banks.find((state) => state.value === value)?.label
            : "Preferred Bank"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Preferred Bank" className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {banks.map((bank) => (
                <CommandItem
                  key={bank.value}
                  value={bank.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {bank.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === bank.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
