import { LoanApplyForm } from "@/components/LoanApplyForm";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div>
      <LoanApplyForm />
      <LoanSteps />
    </div>
  );
}

const loanSteps = [
  "Fill out the online Apply Loan form on website and provide your Basic details..Call Prefinn Team or wait for Call Back.",
  "While discussing your loan requirements with the Prefinn team, feel free to select the Bank or NBFC of your choice based on you.",
  "Once Your Loan Application is filed. Have a personal discussion with Bank Loan Manager and finalise the Loan Amount .",
  "Meet the Loan Manager , sign the original Loan Application file and take Disbursement of Loan.",
  "Track your loan status through Prefinn's support system and follow up for any updates.",
  "Get post-loan support, EMI reminders, and account service from Prefinn's team.",
];

function LoanSteps() {
  return (
    <div>
      <h1 className="text-center">Steps to Get a Loan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {loanSteps.map((step, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-center">{idx + 1}</CardTitle>
              <CardDescription className="text-center">{step}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
