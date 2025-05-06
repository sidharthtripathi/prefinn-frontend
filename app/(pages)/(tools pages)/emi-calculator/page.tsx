import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div>
      <h1>Smart Loans For Bright Futures</h1>
      <p>
        Achieve your dreams with our flexible financial solutions and
        competitive rates
      </p>
      <Button>Apply Now</Button>
      <LoanServices />
      <LoanApprovalSteps/>
    </div>
  );
}

const loanServices: {
  emoji: string;
  title: string;
}[] = [
  {
    emoji: "🏠",
    title: "Home Loan",
  },
  {
    emoji: "🏡🔑",
    title: "Loan Against Property",
  },
  {
    emoji: "🔄",
    title: "Working Capital Loan",
  },
  {
    emoji: "🏢",
    title: "Business Loan",
  },
  {
    emoji: "👤",
    title: "Personal Loan",
  },
];

function LoanServices() {
  return (
    <div>
      <h1>Our Loan Services</h1>
      <p>Financial solutions for every need</p>
      <div className="grid grid-cols-1 sm:grid-cols-5">
        {loanServices.map((loan, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-center">{loan.emoji}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">{loan.title}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const workingSteps: {
  title: string;
  description: string;
}[] = [
  {
    title: "Application Submit",
    description: "Quick online application process",
  },
  {
    title: "Review & Verification",
    description: "Document validation and checks",
  },
  { title: "Loan Approval", description: "Instant approval decision" },
  { title: "Loan Disbursement", description: "Fast fund transfer to account" },
];

function LoanApprovalSteps(){
    return (
        <div>
            <h1 className="text-center font-bold text-4xl">How It Works</h1>
            <p className="text-center">Simple 4-step approval process</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {
                    workingSteps.map((step,idx)=>(
                        <Card key={idx} className="text-center">
                            <CardHeader>
                                <p>{idx+1}</p>
                                <CardTitle>{step.title}</CardTitle>
                                <CardDescription>{step.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
