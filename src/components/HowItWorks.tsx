"use client";

import { useState } from "react";
import Image from "next/image";

type ButtonName = "hand" | "user" | "car";

const HowItWorks: React.FC = () => {
  const [activeButton, setActiveButton] = useState<ButtonName | null>(null);

  const handleButtonClick = (buttonName: ButtonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className=" px-10 sm:px-16 w-full lg:h-[900px]  md:h-[1500px] flex flex-col">
      <div className=" flex flex-col gap-3 items-center justify-center sm:px-14 lg:px-44">
        <h2 className="text-2xl font-bold py-3">How Ije Works</h2>
        <p className="text-center">
          Ije is a transport and delivery pooling solution. When you book a ride
          or delivery, our system uses your GPS to find the nearest driver to
          you, we ensure the driver is given the shortest possible route so that
          you pay the lowest possible fee.
        </p>
      </div>
      <div className="flex  flex-col gap-20 lg:flex-row justify-between  py-20 md:h-[600px] ">
        <div className=" flex justify-between h-[500px] flex-1 gap-16 md:mt-20  ">
          <div>
            <button
              className={`flex justify-center items-center w-[100px] h-[90px] rounded-full ${
                activeButton === "hand" ? "bg-[#FFAD0D]" : "bg-[#F0F0F0]"
              }`}
              onClick={() => handleButtonClick("hand")}
            >
              <Image
                src="/hand.png"
                alt="vision"
                width={50}
                height={20}
                className=""
              />
            </button>
            <div
              className={`w-1 h-[140px] ${
                activeButton === "hand" ? "bg-[#FFAD0D]" : "bg-[#F0F0F0]"
              } ml-12`}
            ></div>
            <button
              className={`flex justify-center items-center w-[100px] h-[90px] rounded-full ${
                activeButton === "user" ? "bg-[#FFAD0D]" : "bg-[#F0F0F0]"
              }`}
              onClick={() => handleButtonClick("user")}
            >
              <Image
                src="/user.png"
                alt="vision"
                width={50}
                height={20}
                className=""
              />
            </button>
            <div
              className={`w-1 h-[140px] ${
                activeButton === "user" ? "bg-[#FFAD0D]" : "bg-[#F0F0F0]"
              } ml-12`}
            ></div>
            <button
              className={`flex justify-center items-center w-[100px] h-[90px] rounded-full ${
                activeButton === "car" ? "bg-[#FFAD0D]" : "bg-[#F0F0F0]"
              }`}
              onClick={() => handleButtonClick("car")}
            >
              <Image
                src="/car.png"
                alt="vision"
                width={50}
                height={20}
                className=""
              />
            </button>
          </div>
          <div className="flex flex-col justify-between -mb-10 pt-4 -ml-5">
            <div className="flex gap-2  flex-col">
              <h4 className="text-xl font-bold">Deliveries</h4>
              <p>Fast, Reliable and Safe. Pay less, deliver more.</p>
            </div>
            <div className="gap-2">
              <h4 className="text-xl font-bold">Drivers</h4>
              <p>
                Put money in your pocket. Drive when you want. Choose who or
                what you carry- passengers or goods or both.
              </p>
            </div>
            <div className="gap-4">
              <h4 className="text-xl font-bold">Riders</h4>
              <p>
                Ride how you want, when you want and with who you want. Save
                money and time when you ride with Ije.
              </p>
            </div>
          </div>
        </div>

        <div className="flex  flex-1 w-auto justify-center">
          <div
            className={`flex items-end justify-center w-[389px] sm:w-[589px] h-[601px] ${
              activeButton === "hand" ? "bg-[#FFEEDB]" : "bg-[#e4e1e1]"
            }`}
          >
            <Image
              src="/phone2.png"
              alt="phone"
              width={200}
              height={80}
              className="w-[289px] h-[460px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

// import Image from "next/image";

// const HowItWorks = () => {
//   return (
//     <div className="px-16 w-full lg:h-[900px]  md:h-[1500px] flex flex-col">
//       <div className=" flex flex-col gap-3 items-center justify-center sm:px-14 lg:px-44">
//         <h2 className="text-2xl font-bold py-3">How Ije Works</h2>
//         <p className="text-center">
//           Ije is a transport and delivery pooling solution. When you book a ride
//           or delivery, our system uses your GPS to find the nearest driver to
//           you, we ensure the driver is given the shortest possible route so that
//           you pay the lowest possible fee.
//         </p>
//       </div>
//       <div className="flex  flex-col gap-20 lg:flex-row justify-between  py-20 md:h-[600px] ">
//         <div className=" flex flex-col justify-between h-[500px] flex-1 gap-16 md:mt-20  ">
//           <div>
//             <button className=" flex justify-center items-center w-[100px] h-[90px] rounded-full bg-[#FFAD0D]">
//               <Image
//                 src="/hand.png"
//                 alt="vision"
//                 width={50}
//                 height={20}
//                 className=""
//               />
//             </button>
//             <div className="w-1 h-[140px] bg-[#FFAD0D] ml-12"></div>
//             <button className=" flex justify-center items-center w-[100px] h-[90px] rounded-full bg-[#F0F0F0]">
//               <Image
//                 src="/user.png"
//                 alt="vision"
//                 width={50}
//                 height={20}
//                 className=""
//               />
//             </button>
//             <div className="w-1 h-[140px] bg-[#F0F0F0] ml-12"></div>
//             <button className=" flex justify-center items-center w-[100px] h-[90px] rounded-full bg-[#F0F0F0]">
//               <Image
//                 src="/car.png"
//                 alt="vision"
//                 width={50}
//                 height={20}
//                 className=""
//               />
//             </button>
//           </div>
//           <div></div>
//         </div>

//         <div className="flex  flex-1 w-auto justify-center">
//           <div className="flex items-end justify-center w-[389px] sm:w-[589px] h-[601px] bg-[#FFEEDB]">
//             <Image
//               src="/phone2.png"
//               alt="phone"
//               width={200}
//               height={80}
//               className="w-[289px] h-[460px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;

// <div className="flex gap-8 sm:gap-20 items-center">
//             <div className=" flex items-center w-[100px] h-[90px] rounded-full bg-[#FFAD0D]">
//               <Image
//                 src="/hand.png"
//                 alt="vision"
//                 width={50}
//                 height={20}
//                 className=""
//               />
//             </div>
//             <div>
// <div className="flex gap-2  flex-col">
//   <h4 className="text-xl font-bold">Deliveries</h4>
//   <p>Fast, Reliable and Safe. Pay less, deliver more.</p>
// </div>
//             </div>
//           </div>

//           <div className="flex gap-8 sm:gap-20 items-center w-full">
//             <div className=" flex items-center w-[100px] h-[100px] rounded-full bg-[#FFAD0D]">
//               <Image
//                 src="/user.png"
//                 alt="vision"
//                 width={50}
//                 height={20}
//                 className=""
//               />
//             </div>
//             <div>
// <div className="gap-2">
//   <h4 className="text-xl font-bold">Drivers</h4>
//   <p>
//     Put money in your pocket. Drive when you want. Choose who or
//     what you carry- passengers or goods or both.
//   </p>
// </div>
//             </div>
//           </div>
//           <div className="flex gap-8 sm:gap-20 items-center">
//             <div className=" flex items-center w-[100px] h-[90px] rounded-full bg-[#FFAD0D]">
//               <Image
//                 src="/car.png"
//                 alt="vision"
//                 width={50}
//                 height={20}
//                 className=""
//               />
//             </div>
//             <div>
// <div className="gap-4">
//   <h4 className="text-xl font-bold">Riders</h4>
//   <p>
//     Ride how you want, when you want and with who you want. Save
//     money and time when you ride with Ije.
//   </p>
// </div>
//             </div>
//           </div>
