import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-[#111827] sm:h-[1000px] md:h-[880px] h-[1300px] w-full">
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
      <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start  px-24 pt-10">
        <div className=" w-[200px]">
          <Image
            src="/footer-logo.png"
            alt="logo"
            width={90}
            height={35}
            className=""
          />
        </div>
        <div className="flex flex-col flex2 sm:flex-row  items-center justify-center sm:items-start px-10 pt-14 sm:pt-0">
          <div className="text-[#6B7280]">
            <h3 className="text-2xl font-bold">Links </h3>
            <ul>
              <li className="mt-5">Privacy Policy</li>
              <li className="mt-5">Terms of Use </li>
              <li className="mt-5">Platform Access Agreement</li>
              <li className="mt-5">Fare Agreement</li>
              <li className="mt-5">Indemnity Agreement</li>
            </ul>
          </div>
          <div className="text-[#6B7280] py-10 sm:py-0 pl-10">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="mt-5">Need help or have a question? Contact us at:</p>
            <p className="mt-5">info@ijemove.com customerservice@ijemove.com</p>
            <div className="flex gap-4 item-center py-8">
              <Image
                src="/linkedin.png"
                alt="logo"
                width={30}
                height={15}
                className=" pr-1 w-8 h-8"
              />
              <Image
                src="/facebook.png"
                alt="logo"
                width={20}
                height={10}
                className=" pr-1 w-8 h-8"
              />
              <Image
                src="/instagram.png"
                alt="logo"
                width={30}
                height={15}
                className=" pr-1 w-8 h-8"
              />
              <Image
                src="/x.png"
                alt="logo"
                width={30}
                height={15}
                className=" pr-1 w-8 h-8"
              />
              <Image
                src="/tiktok.png"
                alt="logo"
                width={30}
                height={15}
                className=" pr-1 w-8 h-8"
              />
              <Image
                src="/youtube.png"
                alt="logo"
                width={30}
                height={15}
                className=" w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-[#374151] mt-32" />
      <p className="text-center mt-16 text-[#9CA3AF] -mb-5">
        Copyright © 2021 Ijeoma Ltd.
      </p>
    </div>
  );
};

export default Footer;
