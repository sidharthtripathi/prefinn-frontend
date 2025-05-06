import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div>
      <h1>Smarter Management Made Simple</h1>
      <p>Reduce Interest Cost And Consolidate Our Balance Transfer solutions</p>
      <LoanServices />
      <TransferSteps />
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

const transferSteps: {
  title: string;
  description: string;
}[] = [
  {
    title: "Balance Analysis",
    description: "Review current debt structure",
  },
  {
    title: "Offer Matching",
    description: "Find best transfer options",
  },
  { title: "Risk Assessment", description: "Creditworthiness evaluation" },
  { title: "Transfer Execution", description: "Secure debt migration" },
];

function TransferSteps() {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Tranfer Process</h1>
      <p className="text-center">Streamlined 4-step transfer workflow</p>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {transferSteps.map((step, idx) => (
          <Card key={idx} className="text-center">
            <CardHeader>
              <p>{idx + 1}</p>
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
