"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "@/lib/utils";
import CameraCapture from "./CameraCapture";

const partnerBenefits = [
  "Strategic Financial Partner for Institutions and Business Owner",
  "Multi-channel platform enabling a frictionless loan journey from onboarding to disbursal.",
  "Integrated portal offering a wide range of Home and SME Loan options from trusted Banks and NBFCs",
  "Single-window access to a full suite of Lending products and services for B2C Consumers.",
  "Expert panel combining financial acumen and technical prowess.",
];
export function PartnerForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
      <div>
        <p>We are Indias Leading Loan Distributors</p>
        <p>
          Partner with us & expand your financial Services reach with Prefinns
          Lending Products.
        </p>
        <p>Complete your onboarding now</p>

        <form className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <Label>Full Name</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Mobile Number</Label>
            <Input type="tel" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" />
          </div>
          <div>
            <Label>State</Label>
            <StateComboBox />
          </div>
          <div>
            <Label>City</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Pincode</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Profession</Label>
            <SelectProfession />
          </div>
          <div>
            <Label>Company Name</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>PAN Number</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Aadhar Number</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Upload PAN Card</Label>
            <Input type="file" />
          </div>
          <div>
            <Label>Upload Aadhar Card</Label>
            <Input type="file" />
          </div>
          <CameraCapture/>
        </form>
      </div>
      <div>
        <img
          src="https://img.freepik.com/premium-vector/two-people-shake-hands-as-result-agreement-successful-cooperation_277904-4694.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
          alt="handshake"
          className="h-96"
        />
        <ul>
          {partnerBenefits.map((benefit, idx) => (
            <li key={idx}>✅ {benefit}</li>
          ))}
        </ul>
      </div>
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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full"
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

const professions = [
  "Salaried",
  "Self-Employed",
  "Business Owner",
  "Insurance Agent",
  "Real Estate Professional",
  "Chartered Accountant",
  "Mutual Fund Distributor",
  "Other",
];

function SelectProfession() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select Profession" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Choose Profession</SelectLabel>
          {professions.map((p, idx) => (
            <SelectItem key={idx} value={p}>
              {p}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
