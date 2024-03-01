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
      <AskedQuestions />
      <Footer />
    </main>
  );
}
