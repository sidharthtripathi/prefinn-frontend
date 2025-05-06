import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div>
      <Banner />
      <SmartFinance />
      <Privileges />
    </div>
  );
}

const privileges = [
  {
    title: "No More Delays, Get Your Loans Quick",
    description:
      "Our hassle-free home loan process makes getting approved a breeze.",
  },
  {
    title: "Expert & Dedicated Help At Every Step",
    description:
      "Your trusted team, from start to dream with your dedicated loan advisor.",
  },
  {
    title: "Low Interest Rates, Big Savings",
    description:
      "Get personalized home loan matches from top lenders to fit your needs.",
  },
  {
    title: "Honest Loans, No Surprises",
    description: "What you see is what you get. No hidden charges.",
  },
];

function Banner() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center px-2 sm:px-6">
      <h1 className="sm:text-5xl text-3xl w-2/3 text-main font-bold">
        Own Tomorrow Home, Funded Today by Prefinn
      </h1>
      <img
        className="h-96"
        src="https://img.freepik.com/premium-vector/vector-elements-city-town-buildings-including-rupee-symbol-real-estate-india-rupee-coin_615232-446.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
        alt=""
      />
    </div>
  );
}

function SmartFinance() {
  return (
    <Card className="text-center py-3 bg-secondary">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-main">
          Prefinn Smart financing
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-3 mx-32">
        <div className="flex flex-col">
          <span>Loan as</span>
          <span className="text-4xl font-bold">90%</span>
          <span>of Property Value</span>
        </div>
        <div className="flex flex-col">
          <span>Interest</span>
          <span className="text-4xl font-bold">8.35%</span>
          <span>Interest Rates</span>
        </div>
        <div className="flex flex-col">
          <span>Finance</span>
          <span className="text-4xl font-bold">130+</span>
          <span>From Lenders</span>
        </div>
      </CardContent>
      <CardFooter>
        <p className="px-20">
          Prefinn ensures you find the right home loan by analyzing offers from
          multiple lenders based on your financial profile and needs. Loan
          amount sanctioned by banks and HFCs varies between 75% to 90% of the
          property price, depending on the applicants financial stability and
          credit score.
        </p>
      </CardFooter>
    </Card>
  );
}

function Privileges() {
  return (
    <div className="text-center my-8 mx-4">
      <h1 className="text-3xl font-bold text-main mb-2">
        The Prefinn Privileges
      </h1>
      <p className="mb-4">Your Future Home Starts with Prefinn!</p>
      <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {privileges.map((p, idx) => (
          <Card key={idx} className="text-center py-3 bg-secondary rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="my-8 space-y-4">
        <h1 className="text-3xl font-extrabold text-main">
          At Prefinn your success is our success.
        </h1>
        <Button size={"lg"}>Apply Now</Button>
      </div>

      <div className="mx-4 my-8">
        <h1 className="text-center text-4xl font-bold text-main">
          Home Loan FAQ
        </h1>
        <Accordion type="single" collapsible className="w-full text-left">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-lg">
              1. What documents are required for a home loan?
            </AccordionTrigger>
            <AccordionContent>
              The required property documents for a home loan can vary depending
              on the purpose of the loan. For instance, the documentation needed
              to purchase a new house might differ from what’s required for
              constructing a home. For a detailed list of documents required for
              a home loan, it’s best to consult with your lender.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-lg">
              2. Which bank offers the best home loan?
            </AccordionTrigger>
            <AccordionContent>
              The best home loan depends on various factors like interest rates,
              processing fees, and customer service. Compare multiple banks and
              financial institutions to find the most suitable option.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold text-lg">
              3. Can I get a home loan for the full property value?
            </AccordionTrigger>
            <AccordionContent>
              Most lenders finance up to 80-90% of the property value. You may
              need to arrange the remaining amount as a down payment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold text-lg">
              4. What is the maximum home loan I can get?
            </AccordionTrigger>
            <AccordionContent>
              The maximum loan amount depends on factors like your income,
              credit score, repayment capacity, and the lenders policies.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
