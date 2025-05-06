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

      <FeatureBanner />
      <PromisesBanner />
      <ApplyBanner />
      <BLFAQ />
    </div>
  );
}

function Banner() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
      <h1 className="text-5xl font-bold">
        Tomorrow’s Venture, Financed Today by Prefinn
      </h1>
      <img
        className="h-80"
        src="https://img.freepik.com/premium-vector/rupee-plant-growth-money-jar-investment-mutual-fund-concept-vector-illustration_667085-819.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
        alt=""
      />
    </div>
  );
}

const growth = [
  {
    title: "Get Funded in Just a Few Clicks",
    description: [
      "✔ Apply in Minutes, Get Approval Fast",
      "✔ Competitive Interest Rates",
      "✔ Dedicated Support at Every Step",
    ],
  },
  {
    title: "Instant Eligibility Check & Paperless Process",
    description: [
      "✔ Hassle-Free Experience",
      "✔ End-to-End Assistance from Financial Experts",
      "✔ Tailored Loan Offers Based on Business",
    ],
  },
  {
    title: "Business Funding, Simplified",
    description: [
      "✔ Expert Support from Start to Settlement",
      "✔ Built for Founders, Backed by Fintech",
      "✔ Reliable Support, Every Step of the Way",
    ],
  },
];

function GrowthBanner() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-4">
        Growing Businesses Nationwide
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

const benefits = [
  {
    title: "Flexible Loan Tenure",
    description: "Flexible and longer repayment options",
    img: "https://cdn-icons-png.flaticon.com/128/9196/9196974.png",
  },
  {
    title: "Balance Transfer",
    description:
      "Transfer Existing Business Loan at lower EMIs with competitive rates",
    img: "https://cdn-icons-png.flaticon.com/128/3707/3707848.png",
  },
  {
    title: "Business Loan in Seconds",
    description:
      "Online and Instant loan disbursal for Banks existing current account holders",
    img: "https://cdn-icons-png.flaticon.com/128/9172/9172420.png",
  },
  {
    title: "No Collateral & Guarantor",
    description:
      "The business loan is collateral-free and requires no guarantor.",
    img: "https://cdn-icons-png.flaticon.com/128/17480/17480230.png",
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
    title: "Fuel Your Business Growth Instantly",
    description:
      "Get access to fast and flexible business loans designed to power your next big move.",
  },
  {
    title: "Business Loans Made Easy",
    description:
      "No delays. No hassle. Just fast funding to help your business thrive.",
  },
  {
    title: "Tailored Business Loans, Trusted Partners",
    description:
      "We connect you with verified lenders offering competitive rates and flexible terms.",
  },
  {
    title: "Intelligent Financing for Your Enterprise",
    description:
      "Empowering your business with smart funding solutions, competitive interest rates.",
  },
];

function PromisesBanner() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-main">
        The Prefinn Promise
      </h1>
      <p className="text-center">Smart Secure Bussiness Loans</p>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
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
    q: "1. What Can a Business Loan Be Used For?",
    a: "Yes, through fintech lenders or NBFCs offering collateral-free loans based on cash flow projections or invoice financing.",
  },
  {
    q: "2. Who can apply for a business loan?",
    a: "It increases short-term liabilities but improves liquidity to fund operations and stabilize assets.",
  },
  {
    q: "3. What is the interest rate for business loans?",
    a: "Yes, options like invoice discounting, merchant cash advances, or supply chain financing can bridge cash gaps.",
  },
  {
    q: "4. What documents are required?",
    a: "Depends on the lender; some fintech platforms allow prepayment, while banks may charge a fee.",
  },
];

function BLFAQ() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-main text-center mb-4">
        Business Loan FAQ
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
