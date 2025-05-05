import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TbLocationDiscount } from "react-icons/tb";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}
const Footer = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
}: Footer7Props) => {
  return (
    <section>
      <section className=" grid grid-cols-1 sm:grid-cols-3 gap-4 place-items-center">
        <div className="container">
          <div className="flex w-full flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-start lg:text-left">
            <div className="flex w-full flex-col items-center justify-between gap-6 lg:items-start">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="https://shadcnblocks.com">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-8"
                  />
                </a>
                <h2 className="text-xl font-semibold">{logo.title}</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming finance through technology, trust, innovation, and
                smarter digital solutions.
              </p>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Our Company</h1>
          <ul className="space-y-3 text-link">
            <li>
              <Link href={"#"}>About us</Link>
            </li>
            <li>
              <Link href={"#"}>Become a partner</Link>
            </li>
            <li>
              <Link href={"#"}>Terms and Condition</Link>
            </li>
            <li>
              <Link href={"#"}>Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h1 className="text-xl font-bold mb-4">Contact Information</h1>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <PhoneIcon size={25} color="green" />
                <p>+91-9650812333</p>
              </li>
              <li className="flex gap-2">
                <MailIcon size={25} color="green" />
                <p>info@prefinn.com</p>
              </li>
              <li className="flex gap-2">
                <TbLocationDiscount size={45} color="green" />
                <p>
                  Prefinn Finserv Pvt.Ltd 204, 2nd Floor, MVL I-Park, Sector-15,
                  Part 2, Chandan Nagar, Gurgaon, Haryana - 122001
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-center mt-4 text-white bg-main py-3">
        Copyright © 2025 Prefinn Finserv Pvt.Ltd - All Rights Reserved
      </div>
    </section>
  );
};

export { Footer };
