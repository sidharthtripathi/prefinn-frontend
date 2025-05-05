import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div>
      <Banner />
      <CardBanner />
      <ValueBanner />
      <PromisesBanner />
      <ApplyBanner />
      <LAPFAQ/>
    </div>
  );
}

function ApplyBanner() {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <h1 className="text-3xl font-bold">
        At Prefinn your success is our success.
      </h1>
      <Button size={"lg"}>Apply Now</Button>
    </div>
  );
}

function Banner() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
      <h1 className="text-6xl font-bold">
        Leverage Your Equity, Funded Today by{" "}
        <span className="text-second">Prefinn</span>
      </h1>
      <img
        className="h-96"
        src="https://img.freepik.com/premium-vector/bank-with-rupee-bundle-money-bag-coin-showing-npa-bad-loan-concept-vector-illustration_667085-2.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&w=740"
        alt=""
      />
    </div>
  );
}

function CardBanner() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold">
            100% SIMPLE PROCESS
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <ul>
            <li>✔ PROVIDE YOUR BASIC INFORMATION</li>
            <li>✔ PICK THE BEST OFFER FOR YOU</li>
            <li>✔ RECEIVE YOUR LOAN WITHOUT WAIT</li>
          </ul>
        </CardFooter>
      </Card>
      <img
        className="rounded-2xl"
        src="https://img.freepik.com/premium-photo/young-indian-banker-agronomist-showing-some-detail-farmer-smartphone_54391-5356.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
        alt=""
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold">
            Empower Our Smart Solution
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <ul>
            <li>✔ GET FUNDS TRANSFERRED QUICKLY</li>
            <li>✔ RECEIVE YOUR LOAN WITHOUT WAIT</li>
            <li>✔ GET MONEY IN YOUR ACCOUNT</li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
}

const values = [
  {
    title: "Quick Property Evaluation",
    description:
      "Get your property assessed fast and unlock higher loan eligibility with ease.",
  },
  {
    title: "Quick Property Evaluation",
    description:
      "Get your property assessed fast and unlock higher loan eligibility with ease.",
  },
  {
    title: "Quick Property Evaluation",
    description:
      "Get your property assessed fast and unlock higher loan eligibility with ease.",
  },
];

function ValueBanner() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-4">
        Unlock the True Value of Your Property
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {values.map((value, idx) => (
          <Card key={idx} className="text-center">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
              <CardDescription>{value.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

const promises = [
  {
    title: "Unlock Property Value Quickly",
    description:
      "Leverage your property's worth for high-value loans with a smooth and transparent process.",
  },
  {
    title: "Personalized Guidance from Experts",
    description:
      "Our dedicated advisors ensure the right loan structure that fits your financial needs.",
  },
  {
    title: "Attractive Interest Rates",
    description:
      "Access market-competitive rates and maximize the benefits of your property-backed loan.",
  },
  {
    title: "Hassle-Free Approvals",
    description:
      "Simplified documentation and speedy disbursals — making your property work for you.",
  },
];

function PromisesBanner() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-main">
        The Prefinn Promise
      </h1>
      <p className="text-center mb-6">
        Unlock Funds with Your Property’s Potential
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {promises.map((promise, idx) => (
          <Card key={idx} className="text-center">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {promise.title}
              </CardTitle>
              <CardDescription>{promise.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "1. Can I pledge a jointly-owned property for a loan against property?",
    a: "Yes, but all co-owners must consent and become co-borrowers or guarantors for the loan.",
  },
  {
    q: "2. Is agricultural land accepted as collateral for a loan against property?",
    a: "Rarely, most lenders prefer residential/commercial properties; agricultural land eligibility depends on state laws and lender policies",
  },
  {
    q: "3. How does a loan against property affect my existing home loan?",
    a: "Your property’s equity (market value minus existing loan) determines eligibility; existing loans reduce the LAP amount you can avail.",
  },
  {
    q: "4. Can I get tax benefits on a loan against property?",
    a: "No, unless the loan is used for business purposes (interest may qualify as a business expense under IT Act.",
  },
  {
    q: "5. What happens if I use a loan against property to fund expenses abroad?",
    a: "Permitted, but lenders may restrict forex transactions; currency conversion risks and RBI guidelines apply.",
  },
];

function LAPFAQ() {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full text-left">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="font-bold text-lg">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent>
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
