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
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "./ui/label";
export function LoanApply({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-main mb-4">{title}</h1>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Full Name" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Email-ID" />
          </div>
          <div>
            <Label>Mobile</Label>
            <Input type="tel" placeholder="Mobile Number" />
          </div>
          <div>
            <Label>OTP</Label>
            <Input type="text" placeholder="OTP" />
          </div>
          <div>
            <Label>City</Label>
            <Input type="text" placeholder="city" />
          </div>
          <div>
            <Label>Pincode</Label>
            <Input type="text" placeholder="pincode" />
          </div>
          <div>
            <Label>PAN Card</Label>
            <Input type="text" placeholder="pan card" />
          </div>
          <div>
            <Label>Occupation Type</Label>
            <SelectProfession />
          </div>
          <div>
            <Label>Loan Amont</Label>
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
          </div>
        </div>
        <Button className="w-full">Submit</Button>
      </form>
    </div>
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

export function LoanApplyDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Apply Loan</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <LoanApply title="Apply for Home Loan" />
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}
