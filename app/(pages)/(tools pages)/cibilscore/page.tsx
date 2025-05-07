

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl rounded-lg shadow-xl overflow-hidden">
        <CreditBanner />
        <CibilScoreForm />
      </div>
    </div>
  );
}

function CreditBanner() {
  return (
    <div className="bg-blue-800 text-white p-8 flex flex-col items-center justify-center">
      <img
        src="https://img.freepik.com/free-vector/modern-credit-score-scale-meter-concept-design_1017-53354.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
        alt="Credit Score Banner"
        className="mx-auto mb-6 w-40 h-auto rounded"
      />
      <h2 className="text-2xl font-semibold mb-4">Get Your Credit Score</h2>
      <ul className="space-y-2 text-left">
        <li className="flex items-center">
          <span className="text-green-400 mr-2">✔️</span> Instant Results
        </li>
        <li className="flex items-center">
          <span className="text-green-400 mr-2">✔️</span> No Hidden Fees
        </li>
        <li className="flex items-center">
          <span className="text-green-400 mr-2">✔️</span> Secure & Confidential
        </li>
        <li className="flex items-center">
          <span className="text-green-400 mr-2">✔️</span> No Impact on Your Credit
          Report
        </li>
      </ul>
    </div>
  );
}

function CibilScoreForm() {
  return (
    <div className="bg-white p-8 flex flex-col justify-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Get your Credit Score Report</h1>
      <p className="text-gray-600 mb-6">Check Credit Scores for FREE!</p>
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name *</Label>
            <Input type="text" id="fullName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <Label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">DOB (DD/MM/YYYY) *</Label>
            <Input type="date" id="dob" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <Label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">+91 Mobile No. *</Label>
            <Input type="tel" id="mobile" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <Label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address *</Label>
            <Input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="pan" className="block text-gray-700 text-sm font-bold mb-2">PAN Card (Optional)</Label>
            <Input type="text" id="pan" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox id="terms" className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300" />
          <label
            htmlFor="terms"
            className="text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>
          </label>
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" size={"lg"}>
          Check Credit Score →
        </Button>
      </form>
    </div>
  );
}

