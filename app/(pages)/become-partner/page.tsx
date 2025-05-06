import { PartnerForm } from "@/components/partnerForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <section>
      <PartnerForm />
      <PartnerSteps />
      <PartnerFAQs />
    </section>
  );
}

const partnerSteps: { title: string; description: string }[] = [
  {
    title: "Apply",
    description:
      "Begin your journey by filling out the application form and sharing the required documents—become a Prefinn partner today.",
  },
  {
    title: "Talk to Our Team",
    description:
      "Our support team will connect with you shortly to assist and coordinate the next steps.",
  },
  {
    title: "Connect with us",
    description:
      "Our Team will guide you through how to start generating leads effectively.",
  },
  {
    title: "Formalize your association",
    description:
      "Complete the process by signing the official partnership agreement.",
  },
];

function PartnerSteps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      {partnerSteps.map((step, idx) => (
        <Card key={idx}>
          <CardHeader className="text-center">
            <p>{idx + 1}</p>
            <CardTitle>{step.title}</CardTitle>
            <CardDescription>{step.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

const partnerFaqs = [
  {
    q: "Who can partner with Prefinn?",
    a: "Anyone from loan agents, ex-bankers, insurance agents, mutual fund distributors, chartered accountants, real estate professionals, or any working professionals can become a Prefinn Loan Partner.",
  },
  {
    q: "Is there any fee to become a partner?",
    a: "No, partnering with Prefinn is free of cost. However, certain verification steps may apply.",
  },
  {
    q: "How long does the verification process take?",
    a: "The verification process usually takes 2-3 business days, after which you can start generating leads.",
  },
  {
    q: "What documents are required?",
    a: "You typically need a PAN card, address proof, and any other professional ID or business-related documents.",
  },
  {
    q: "How do I start earning?",
    a: "Once you're onboarded and verified, you can start referring leads through your dashboard and earn commissions on successful loan disbursements.",
  },
  {
    q: "Can I partner if I am from a different country?",
    a: "Currently, Prefinn is open to Indian residents only. However, we are exploring international expansion in the future.",
  },
];

function PartnerFAQs() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-main text-center mb-4">
        Partners FAQ
      </h1>
      <p className="text-center">
        Answers to some frequently asked questions about becoming a Prefinn
        Partner.
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full text-left grid grid-cols-1 sm:grid-cols-2 gap-x-8"
      >
        {partnerFaqs.map((faq, idx) => (
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
