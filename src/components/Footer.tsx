import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-[#111827] h-[808px] w-full">
      <div className="flex flex-col items-center py-10 justify-center">
        <div className="flex flex-col h-[100px] w-auto text-center">
          <h1 className="text-[#E5E7EB] text-3xl font-bold py-5">
            Let’s stay in touch
          </h1>
          <p className="text-[#6B7280]">Subscribe for updates on Ije</p>
        </div>
        <div className="flex pt-14 ">
          <input
            type="text"
            placeholder="Enter your email"
            className="sm:w-[396px] h-[56px] text-[#6B7280] mr-3 px-5 bg-[#0c0c0c] rounded-lg"
          />
          <button className="bg-[#FFAD0D] h-[56px] px-3 rounded-lg font-semibold">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-auto justify-between items-center md:items-start  px-24">
        <div>
          <Image
            src="/footer-logo.png"
            alt="logo"
            width={90}
            height={35}
            className="py-3 mb-10"
          />
        </div>
        <div className="flex ">
          <div>
            <h3>Links </h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use </li>
              <li>Platform Access Agreement</li>
              <li>Fare Agreement</li>
              <li>Indemnity Agreement</li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>Need help or have a question? Contact us at:</p>
            <p>info@ijemove.com customerservice@ijemove.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
