import About from "@/components/About";
import AskedQuestions from "@/components/AskedQuestions";
import Banner from "@/components/Banner";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="bg-gradient-to-b from-[#FF9900] from-10% via-[#FEE8C5] via-30% to-[#FF9900] to-90% ">
        <Navbar />
        <Banner />
      </div>
      <About />
      <HowItWorks />
      <Download />
      <div className="py-20 w-full">
        <div className="px-24 py-20 lg:px-32">
          <h3 className="text-3xl font-extrabold text-[#111827] ">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 text-[#4B5563]">
            We answered them so you don’t have to ask.
          </p>
        </div>
        <AskedQuestions
          question="How much do I pay to order a ride?"
          answer="We currently only serve registered businesses in Nigeria. We support sole traders, NGOs, partnerships, and limited liability companies. However, If your business is not yet registered, Brass can help you get your desired business registered on time with our partners."
        />
        <AskedQuestions
          question="Can I drive for Ije?"
          answer="We currently only serve registered businesses in Nigeria. We support sole traders, NGOs, partnerships, and limited liability companies. However, If your business is not yet registered, Brass can help you get your desired business registered on time with our partners."
        />
        <AskedQuestions
          question="How much do I pay to order a ride?"
          answer="We currently only serve registered businesses in Nigeria. We support sole traders, NGOs, partnerships, and limited liability companies. However, If your business is not yet registered, Brass can help you get your desired business registered on time with our partners."
        />
        <AskedQuestions
          question="Can I drive for Ije?"
          answer="We currently only serve registered businesses in Nigeria. We support sole traders, NGOs, partnerships, and limited liability companies. However, If your business is not yet registered, Brass can help you get your desired business registered on time with our partners."
        />
        <AskedQuestions
          question="How much do I pay to order a ride?"
          answer="We currently only serve registered businesses in Nigeria. We support sole traders, NGOs, partnerships, and limited liability companies. However, If your business is not yet registered, Brass can help you get your desired business registered on time with our partners."
        />
        <AskedQuestions
          question="Can I drive for Ije?"
          answer="We currently only serve registered businesses in Nigeria. We support sole traders, NGOs, partnerships, and limited liability companies. However, If your business is not yet registered, Brass can help you get your desired business registered on time with our partners."
        />
        <AskedQuestions
          question="How much do I pay to order a ride?"
          answer="We currently only serve registered businesses in Nigeria. We support sole traders, NGOs, partnerships, and limited liability companies. However, If your business is not yet registered, Brass can help you get your desired business registered on time with our partners."
        />
        <AskedQuestions
          question="Can I drive for Ije?"
          answer="We currently only serve registered businesses in Nigeria. We support sole traders, NGOs, partnerships, and limited liability companies. However, If your business is not yet registered, Brass can help you get your desired business registered on time with our partners."
        />
      </div>
      <Footer />
    </main>
  );
}
