import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import React, { ReactNode } from "react";
import Marquee from "react-fast-marquee";
import { FaHouseLaptop } from "react-icons/fa6";
import { GiDecapitation } from "react-icons/gi";
import { RiBankCardFill } from "react-icons/ri";
import { TbBuildingBank, TbHomeBitcoin } from "react-icons/tb";

const banks: { img: string }[] = [
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/159px-State_Bank_of_India_logo.svg.png",
  },
  {
    img: "https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg",
  },
  {
    img: "https://static.india.com/wp-content/uploads/2015/08/sf-14.jpg",
  },
  {
    img: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/logo.webp",
  },
  {
    img: "https://cdn.iconscout.com/icon/free/png-256/free-bajaj-finserv-logo-icon-download-in-svg-png-gif-file-formats--indian-company-companies-pack-logos-icons-2249165.png",
  },
  {
    img: "https://www.motilaloswal.com/media_15c0fcdc4deef99d8a791fee00d99b2066c8eb40a.svg",
  },
  {
    img: "https://www.ltfs.com/images/default-source/logo/ltf-logo-b-w.png",
  },
  {
    img: "https://storage.googleapis.com/iifl-storage/files/images/logos/iifl-finance.svg",
  },
  {
    img: "https://bankofindia.co.in/o/boi-global-theme/images/boi/logos/boi_en_US_logo.png",
  },
  {
    img: "https://www.hsbc.co.in/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg",
  },
  {
    img: "https://www.logoshape.com/wp-content/uploads/2024/08/kotak-mahindra-bank-logo-vector_logoshape.png",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/434px-HDFC_Bank_Logo.svg.png",
  },
  {
    img: "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/icons/bob-logo.svg",
  },
  {
    img: "https://hfcl-website-cms.s3.ap-south-1.amazonaws.com/logo_dc3ab7afd1.webp",
  },
];

const partners: { img: string; title: string; description: string }[] = [
  {
    img: "https://img.freepik.com/premium-vector/two-hands-holding-object-finger-pointing-up-down-handshake-single-main-vector-illustration-white-background-bright-color-cartoon-combine_424947-14034.jpg",
    title: "Institutional Channel",
    description:
      "Our success stems from robust corporate channels integrated with a cutting-edge tech enablement platform",
  },
  {
    img: "https://img.freepik.com/free-vector/construction-illustration-with-foreman-giving-instructions-team-builders-dressed-uniform-helmets_1284-29082.jpg",
    title: "Real Estate Channel",
    description:
      "Financing made easy for Real estate Buyers, Investors and Developers",
  },
  {
    img: "https://img.freepik.com/premium-vector/businessman-calculates-finances-surrounded-by-stacks-cash-paperwork_1297718-27718.jpg",
    title: "Independent Business Owners",
    description:
      "Fueling Growth through people-powered Loan sourcing on ground",
  },
];

const stories: { icon: string; stats: string; title: string }[] = [
  { icon: "😃", stats: "150+", title: "Happy Customers" },
  { icon: "₹", stats: "₹23cr+", title: "Loan's Disbursed" },
  { icon: "😃", stats: "130+", title: "Finance Partners" },
  { icon: "😃", stats: "250+", title: "Independent Business Owners" },
  { icon: "😃", stats: "5+", title: "Institutional Partners" },
];
const features: { title: string; description: string; icon: ReactNode }[] = [
  {
    icon: <TbHomeBitcoin size={40} className="text-main" />,
    title: "Product Diversification",
    description:
      "Offering multiple loan product options to Housing & SME customers at one platform.",
  },
  {
    icon: <TbHomeBitcoin size={40} className="text-main" />,
    title: "Customer-Centric Approach",
    description:
      "Prompt Relationship Manager service with optimized loan options saving time and money.",
  },
  {
    icon: <TbHomeBitcoin size={40} className="text-main" />,
    title: "Secure & Fast Processing",
    description:
      "Robust data encryption ensures smooth and secure customer experience.s.",
  },
  {
    icon: <TbHomeBitcoin size={40} className="text-main" />,
    title: "Transparent Updates",
    description:
      "Track your loan application in real-time with total transparency.",
  },
  {
    icon: <TbHomeBitcoin size={40} className="text-main" />,
    title: "130+ Lender Network",
    description:
      "Access top-tier banks and NBFCs offering competitive interest rates.",
  },
  {
    icon: <TbHomeBitcoin size={40} className="text-main" />,
    title: "Enhanced Agent Dashboard",
    description:
      "Manage leads, payouts, and commissions — all with real-time insights.",
  },
];

const products: {
  title: string;
  description: string;
  icon: ReactNode;
}[] = [
  {
    icon: <TbHomeBitcoin size={40} className="text-main" />,
    title: "Home Loan",
    description:
      "Prefinn helps clients assess their home financing needs by partnering with experienced consultants.",
  },
  {
    icon: <FaHouseLaptop size={40} className="text-main" />,
    title: "Loan Against Property ",
    description:
      "Prefinn’s finance experts help secure a Loan Against Property (LAP) from top banks.",
  },
  {
    icon: <GiDecapitation size={40} className="text-main" />,
    title: "Home Loan",
    description:
      "Prefinn helps clients assess their home financing needs by partnering with experienced consultants.",
  },
  {
    icon: <TbBuildingBank size={40} className="text-main" />,
    title: "Business Loan",
    description:
      "Prefinn offers Business Loan services to help businesses assess their short-term financing needs .",
  },
  {
    icon: <RiBankCardFill size={40} className="text-main" />,
    title: "Personal Loan",
    description:
      "Prefinn helps clients assess their personal loan requirements by partnering with licensed financial advisors. ",
  },
];

export function HomePage() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center px-0 sm:px-4 md:px-8 lg:px-16">
        <div>
          <h1 className="text-main font-extrabold text-5xl mb-5">
            We are Prefinn
          </h1>
          <p className="font-bold text-3xl mb-6">
            India’s Preferred Loan Distribution Platform
          </p>
          <p className="text-2xl font-thin mb-4">
            Prefinn streamlines the loan process by blending traditional finance
            with agile fintech, ensuring faster and more efficient
            disbursements.
          </p>
          <div>
            <p className="text-main font-bold">
              Partnered Bank & NBFC Offerings
            </p>
            <p className="text-main font-bold">
              {" "}
              Tailored Loans for Housing & MSMEs
            </p>
            <p className="text-main font-bold">
              Driving Financial Inclusion Nationwide
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/financial-recovery-after-coronavirus_23-2148558699.jpg?t=st=1745485575~exp=1745489175~hmac=c00bc585c175bc76525832b610ce96ed4609d237cf4e9278fad5185bc5f7eced&w=1380"
            alt="man image"
          />
        </div>
      </div>
      <div className="px-16">
        <h1 className=" mt-20 font-extrabold text-center text-3xl text-main mb-6">
          Our Loan Products
        </h1>
        <div className=" gap-4 flex flex-col md:flex-row">
          {products.map((product, idx) => (
            <Card key={idx}>
              <CardHeader className="flex items-center">
                {product.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-main mb-2">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-center">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className=" mt-16">
        <h1 className="text-3xl font-bold text-center text-main mb-6">
          Discover Our Feature
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {features.map((feature, idx) => (
            <Card key={idx}>
              <CardHeader className="flex items-center">
                {feature.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-second mb-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4 text-main text-center mt-8 ">
          Our Success Stories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {stories.map((story, idx) => (
            <Card key={idx}>
              <CardHeader className="flex items-center">
                {story.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-second mb-2">
                  {story.stats}
                </CardTitle>
                <CardDescription className="text-center">
                  {story.title}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-main font-bold text-3xl text-center mt-8 mb-4">
          Our Value Chain Partner
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {partners.map((partner, idx) => (
            <Card key={idx}>
              <CardHeader className="flex items-center">
                <img className="w-32" src={partner.img} alt="some image" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-second mb-2">
                  {partner.title}
                </CardTitle>
                <CardDescription className="text-center">
                  {partner.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="px-2">
        <h1 className="text-center font-bold text-3xl text-main mt-8 mb-4">
          Our service provider
        </h1>
        <div>
          <Marquee>
            {banks.map((img, idx) => (
              <img
                className="h-10 mr-8"
                src={img.img}
                key={idx}
                alt="bankname"
              />
            ))}
          </Marquee>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-main text-3xl font-bold mb-2">
              For Loan and Partner Query
            </h1>
            <p className="font-bold text-xl mb-3">Drop Us a Message</p>
            <form className="space-y-6">
              <div className="flex gap-4 items-center">
                <Label className="w-32">Full Name</Label>
                <Input
                  className=" w-full h-14"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex gap-4 items-center">
                <Label className="w-32">Email</Label>
                <Input
                  className=" w-full h-14"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-4 items-center">
                <Label className="w-32">Mobile</Label>
                <Input
                  className=" w-full h-14"
                  placeholder="Enter your mobile"
                />
              </div>
              <div className="flex justify-center">
                <Button className="bg-main">Submit</Button>
              </div>
              <div>
                By submitting, you acknowledge our{" "}
                <Link href="#" className="underline">Terms of Service</Link> and
                <Link href="#" className=" ml-1 underline">Privacy Policy</Link>
              </div>
            </form>
          </div>
        </div>
        <img src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4983.jpg" />
      </div>
    </div>
  );
}
