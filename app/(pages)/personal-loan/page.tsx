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
      <PLFAQ />
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
      <h1 className="text-5xl font-bold">
        <span className="text-6xl">Your Ambitions,</span> Priority Personal
        Loans by Prefinn
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
        src="https://img.freepik.com/free-photo/excited-ceo-corporate-man-manager-pointing-aside-promo-text-showing-left-banner-smiling-amazed-standing-white-background_176420-53107.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid"
        alt=""
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold">
            Empower Yourself with Our Smart Solution
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <ul>
            <li>✔ SUBMIT DETAILS SECURELY</li>
            <li>✔ GET FUNDS TRANSFERRED QUICKLY</li>
            <li>✔ GET MONEY IN YOUR ACCOUNT</li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
}

const values = [
  {
    title: "Get Instant Approval",
    description:
      "Quick Decisions, Faster Access to Funds Receive loan approval in real time .",
  },
  {
    title: "Your Ideal Personal Loan Starts Here",
    description:
      "From low interest rates to fast approvals ,Prefinn brings it all together lenders.",
  },
  {
    title: "No Fuss Make It Happen",
    description: "Personal loans designed to match your life and your pace.",
  },
];

function ValueBanner() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-4">
        Fast Approvals, Safe Process That’s the Prefinn Promise
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
    title: "Get Your Personal Loan",
    description:
      "Our quick and easy process gets you the funds when you need them most.",
  },
  {
    title: "Loan Experts Who Care",
    description:
      "Count on expert support and a dedicated advisor to simplify your personal loan journey.",
  },
  {
    title: "Professional Service",
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
      <h1 className="text-3xl text-center font-bold text-main">
        The Prefinn Promise
      </h1>
      <p className="text-center mb-6">Smart Secure Personal Loans</p>
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
    q: "1. What can I use a personal loan for?",
    a: "A personal loan can be used for almost any type of expense ranging from big ticket appliance purchases and home renovations to luxury vacations and debt consolidation. Some other cases where personal loans may be useful include payment to unexpected medical bills, investment in business, fixing your car, down payment of new house and much more.",
  },
  {
    q: "2. Is there a minimum personal loan amount that I need to borrow?",
    a: "Yes. Though the exact amount of the minimum personal loan amount varies from one lending institution to another, most lenders have set their minimum personal loan principal amount at Rs. 30,000",
  },
  {
    q: "3. What is the tenure of a personal loan?",
    a: "Personal loans feature tenure of 1 year to 5 years or 12 to 60 months. In rare cases, shorter or longer personal loan tenures may be allowed by the borrower on a case by case basis.",
  },
  {
    q: "4. How to repay the personal loan?",
    a: "The loan can be repaid in the form of Equated Monthly Installment (EMI) via post-dated cheques drawn in favour of the bank or by releasing a mandate allowing payment through the Electronic Clearing Services (ECS) system.",
  },
  {
    q: "5. What are the key documents required when applying for a personal loan?",
    a: "this is",
  },
];

function PLFAQ() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-main text-center mb-4">
        Personal Loan FAQ
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
