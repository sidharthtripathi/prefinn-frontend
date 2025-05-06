import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
      <CreditBanner />
      <CibilScoreForm />
    </div>
  );
}

function CreditBanner() {
  return (
    <div className="bg-blue-800 flex items-center justify-center w-2/3">
      <div className="bg-blue-800 text-white text-center p-8 rounded-lg shadow-lg max-w-sm w-full">
        <img
          src="https://img.freepik.com/free-vector/modern-credit-score-scale-meter-concept-design_1017-53354.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
          alt="Credit Score Banner"
          className="mx-auto mb-6 w-48 h-auto rounded"
        />

        <h2 className="text-2xl font-semibold mb-6">Get Your Credit Score</h2>

        <ul className="space-y-4 text-left">
          <li className="flex items-center">
            <span className="text-white mr-2">✔️</span> Instant Results
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">✔️</span> No Hidden Fees
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">✔️</span> Secure & Confidential
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">✔️</span> No Impact on Your Credit
            Report
          </li>
        </ul>
      </div>
    </div>
  );
}

function CibilScoreForm() {
  return (
    <div>
      <h1>Get your Credit Score Report</h1>
      <p>Check Credit Scores for FREE!</p>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Full Name</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>DOB (DDMMYYYY)</Label>
            <Input type="date" />
          </div>
          <div>
            <Label>+91 Mobile No.</Label>
            <Input type="tel" />
          </div>
          <div>
            <Label>Email Address</Label>
            <Input type="email" />
          </div>
          <div>
            <Label>PAN Card</Label>
            <Input type="text" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        <Button className="w-full" size={"lg"}>
          Check Cibil Score
        </Button>
      </form>
    </div>
  );
}
