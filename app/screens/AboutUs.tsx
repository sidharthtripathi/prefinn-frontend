import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div>
      <AboutBanner />
      <Aboutus />
      <Vision />
    </div>
  );
}

function Vision() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center mt-5 mb-8 bg-blue-100 py-8 rounded-lg mx-16 px-4 ">
      <img
        className="h-52"
        src="https://img.freepik.com/free-vector/illustration-light-bulb-icon_53876-5884.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
        alt="vision image"
      />
      <div>
        <h1 className="text-3xl font-bold text-main mb-2">Our Vision</h1>
        <p className="text-xl leading-8 mt-4 mb-4">
          At Prefinn, our Vision is to Our vision is to build a frictionless
          financial ecosystem, enabling stakeholders and end consumers to access
          any kind of credit from their preferred lending partners with ease.
        </p>
        <div className="space-x-3">
          <Badge>💡 Smart Lending</Badge>
          <Badge>🔐 Secure Platform</Badge>
          <Badge>⚡ Instant Approvals</Badge>
        </div>
      </div>
    </div>
  );
}

function Aboutus() {
  return (
    <div>
      <section>
        <h1 className="text-3xl font-extrabold text-main text-center mb-4 mt-10">
          About us
        </h1>
        <p className="text-center text-lg text-dark-600 px-2 mb-5 mt-4 md:px-20">
          At Prefinn, we are committed to transforming access to credit across
          India. Our objective is to streamline lending products and extend
          their reach to Bharat consumers via a secure, unified digital platform
          powered by a robust network of Banks and NBFCs. As a modern fintech
          solution provider, we equip institutional and channel partners with an
          integrated lending suite, enabling the delivery of personalized
          financial services across all customer segments nationwide
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
        <img
          src="https://img.freepik.com/premium-vector/collaborative-brainstorming-session-about-us-page-concept_1263357-35648.jpg"
          alt="user image"
          className="w-7/12"
        />
        <ul className="space-y-6 text-lg">
          <li>
            ✅ Strategic Financial Partner for Institutions and Business Owners
          </li>

          <li>
            ✅ Multi-channel platform enabling a frictionless loan journey from
            onboarding to disbursal.
          </li>
          <li>
            ✅ Integrated portal offering a wide range of Home and SME Loan
            options from trusted Banks and NBFCs
          </li>
          <li>
            ✅ Single-window access to a full suite of Lending products and
            services for B2C Consumers.
          </li>
          <li>
            ✅ Expert panel combining financial acumen and technical prowess.
          </li>
        </ul>
      </section>
    </div>
  );
}

function AboutBanner() {
  return (
    <div className="bg-[url('https://img.freepik.com/free-photo/handshake-businessmen_1098-742.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740')] bg-cover bg-center h-96 w-full flex justify-center items-center animate-fade-in">
    <Card className="w-full sm:w-1/2 backdrop-blur-md bg-black/60 text-white font-bold border-none animate-slide-in-bottom">
      <CardHeader>
        <CardTitle className="text-center text-xl sm:text-3xl mb-2 font-bold animate-pulse">
          Simplifying Finance. Empowering Individuals and Businesses.
        </CardTitle>
        <CardDescription className="text-center text-base sm:text-lg animate-fade-in delay-200">
          We are dedicated to transforming financial access through seamless
          digital solutions. Whether you are an individual or business, our
          platform helps you get fast, transparent, and secure loan services.
        </CardDescription>
      </CardHeader>
    </Card>
  </div>
  );
}
