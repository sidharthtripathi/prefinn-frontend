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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div>
      <Banner />
      <GrowthBanner />
      <HeadingBanner />
      <FeatureBanner />
      <PromisesBanner />
      <ApplyBanner />
      <WCLFAQ />
    </div>
  );
}

function Banner() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
      <h1 className="text-5xl font-bold">
        Fuel Your Ambitions, Financed Today by Prefinn
      </h1>
      <img
        className="h-80"
        src="https://img.freepik.com/premium-vector/rupee-bundle-with-rupee-bag-with-coins-economy-growth-vector-illustration_667085-62.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&w=740"
        alt=""
      />
    </div>
  );
}

const growth = [
  {
    title: "Fuel Your Business Expansion Smoothly",
    description: [
      "✔ Quick Funding to Bridge Cash Flow Gaps",
      "✔ Flexible Repayment — Tailored to Your Needs",
      "✔ Minimal Documentation, Hassle-Free Disbursal",
    ],
  },
  {
    title: "Fueling Your Operations with Fast Finance",
    description: [
      "✔ Instant Online Application & Same-Day Approval",
      "✔ Dedicated Support from Loan Experts",
      "✔ Customized Financing Solutions for SMEs",
    ],
  },
  {
    title: "Instant Working Capital, Simplified",
    description: [
      "✔ Flexible Financing for Business Continuity",
      "✔ Crafted for Ambitious Entrepreneurs",
      "✔ Boost Growth Without Disrupting Cash Flow",
    ],
  },
];

function GrowthBanner() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-4">
        Powering Business Growth with Reliable Working Capital Loans
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {growth.map((g, idx) => (
          <Card key={idx} className="text-center">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{g.title}</CardTitle>
              <CardDescription>
                <ul className="text-left">
                  {g.description.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

function HeadingBanner() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center h-96">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Fuel Your Business Growth, Every Step of the Way
        </h1>
        <p className="text-lg">
          Smart & Flexible Working Capital Loans by Prefinn
        </p>
      </div>
      <img
        className="max-w-96 rounded-lg"
        src="https://img.freepik.com/premium-photo/man-suit-tie-shaking-hands-with-another-man_1217673-334141.jpg?ga=GA1.1.1559874935.1744648139&semt=ais_hybrid&w=740"
      />
    </div>
  );
}

const benefits = [
  {
    title: "Instant Approval",
    description:
      "Get working capital within 24-48 hours to meet urgent business needs like inventory or payroll.",
    img: "https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740",
  },
  {
    title: "Flexible Repayment",
    description:
      "Choose repayment terms (3-12 months) aligned with your cash flow cycles.",
    img: "https://img.freepik.com/free-vector/hand-drawn-payday-template_52683-150955.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740",
  },
  {
    title: "No Collateral Needed",
    description:
      "Unsecured loans up to ₹50 lakhs based on business turnover and creditworthiness.",
    img: "https://img.freepik.com/free-vector/nfc-connection-abstract-concept-vector-illustration-bank-connection-nfc-communication-contactless-card-payment-method-banking-technology-financial-transaction-paying-app-abstract-metaphor_335657-2509.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740",
  },
  {
    title: "Competitive Interest",
    description:
      "Attractive rates starting at 1.2% per month to keep costs manageable.",
    img: "https://img.freepik.com/free-vector/modern-indian-rupee-composition_23-2147995729.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740",
  },
];

function FeatureBanner() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-main text-center mb-4">
        Features & Benefits of Business Loan
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 px-4">
        {benefits.map((benefit, idx) => (
          <Card key={idx}>
            <CardHeader className="flex items-center">
              <img
                className="w-20 rounded-full"
                src={benefit.img}
                alt="some image"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-center text-second mb-2">
                {benefit.title}
              </CardTitle>
              <CardDescription className="text-center">
                {benefit.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const promises = [
  {
    title: "No More Waiting, Get Your Personal Loan Fast",
    description:
      "Our quick and easy process gets you the funds when you need them most.",
  },
  {
    title: "Loan Experts Who Care",
    description:
      "Count on expert support and a dedicated advisor to simplify your personal loan journey.",
  },
  {
    title: "Customized Loans, Professional Service",
    description:
      "Get matched with reputable lenders offering low-interest personal loans tailored for you.",
  },
  {
    title: "Smart Financing Here",
    description:
      "Benefit from low rates, flexible tenures, and loan offers.personalized to your financial profile.",
  },
];

function PromisesBanner() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-main mb-4">
        The Prefinn Promise
      </h1>
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

const faqs = [
  {
    q: "1. Can a startup with no credit history get a working capital loan?",
    a: "Yes, through fintech lenders or NBFCs offering collateral-free loans based on cash flow projections or invoice financing.",
  },
  {
    q: "2. How does a working capital loan impact my balance sheet?",
    a: "It increases short-term liabilities but improves liquidity to fund operations and stabilize assets.",
  },
  {
    q: "3. Are there alternatives to traditional working capital loans?",
    a: "Yes, options like invoice discounting, merchant cash advances, or supply chain financing can bridge cash gaps.",
  },
  {
    q: "4. Can I prepay a working capital loan without penalties?",
    a: "Depends on the lender; some fintech platforms allow prepayment, while banks may charge a fee.",
  },
  {
    q: "5. Is GST registration mandatory to apply for a working capital loan?",
    a: "Not always, but lenders may prioritize GST-registered businesses for easier income verification.",
  },
];

function WCLFAQ() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-main text-center mb-4">
        Working Capital Loan FAQ
      </h1>
      <Accordion type="single" collapsible className="w-full text-left">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="font-bold text-lg">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
