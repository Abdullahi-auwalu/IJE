"use client";

import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const AskedQuestions = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => {
    setIsTextVisible(!isTextVisible);
  };
  return (
    <div className="py-20 w-full">
      <div className="px-24 py-20 lg:px-32">
        <h3 className="text-3xl font-extrabold text-[#111827] ">
          Frequently Asked Questions
        </h3>
        <p className="mt-4 text-[#4B5563]">
          We answered them so you don’t have to ask.
        </p>
      </div>
      <div className=" px-14 w-auto">
        <div className=" lg:h-[199px] bg-[#FFF8ED] p-10">
          <div className="flex w-full justify-between">
            <h3 className="pb-10 text-2xl text-[#111827] font-bold">
              How do I sign up for Ije?
            </h3>
            <MdKeyboardArrowUp size={25} className="flex float-right" />
          </div>
          <p className="text-[#4B5563]">
            We currently only serve registered businesses in Nigeria. We support
            sole traders, NGOs, partnerships and limited liability companies.
            However, If your business is not yet registered, Brass can help you
            get your desired business registered on time with our partners.
          </p>
        </div>
        <div>
          <div className="flex w-full justify-between pt-10 pl-10">
            <h3 className="pb-10 text-xl text-[#96979A]">
              How much do I pay to order a ride?
            </h3>
            <MdKeyboardArrowUp
              size={25}
              className="flex float-right text-[#96979A]"
            />
          </div>
        </div>
        <div>
          <div className="flex w-full justify-between pt-3 pl-10">
            <h3 className="pb-10 text-xl text-[#96979A]">
              How do I sign up for Ije?
            </h3>
            <MdKeyboardArrowUp
              size={25}
              className="flex float-right text-[#96979A]"
            />
          </div>
        </div>
        <div>
          <div className="flex w-full justify-between pt-3 pl-10">
            <h3 className="pb-10 text-xl text-[#96979A] ">
              How do I sign up for Ije?
            </h3>
            <MdKeyboardArrowUp
              size={25}
              className="flex float-right text-[#96979A]"
            />
          </div>
        </div>
        <div>
          <div className="flex w-full justify-between pt-3 pl-10">
            <h3 className="pb-10 text-xl text-[#96979A] ">
              How do I sign up for Ije?
            </h3>
            <MdKeyboardArrowUp
              size={25}
              className="flex float-right text-[#96979A]"
            />
          </div>
        </div>
        <div>
          <div className="flex w-full justify-between pt-3 pl-10">
            <h3 className="pb-10 text-xl text-[#96979A] ">
              How do I sign up for Ije?
            </h3>
            <MdKeyboardArrowUp
              size={25}
              className="flex float-right text-[#96979A]"
            />
          </div>
        </div>
        <div>
          <div className="flex w-full justify-between pt-3 pl-10">
            <h3 className="pb-10 text-xl text-[#96979A] ">
              How do I sign up for Ije?
            </h3>
            <MdKeyboardArrowUp
              size={25}
              className="flex float-right text-[#96979A]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskedQuestions;

// import { useState } from "react";
// import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

// interface AskedQuestionsProps {
//   question: string;
//   answer: string;
// }

// const AskedQuestions: React.FC<AskedQuestionsProps> = ({
//   question,
//   answer,
// }: AskedQuestionsProps) => {
//   const [isTextVisible, setIsTextVisible] = useState(false);

//   const handleClick = () => {
//     setIsTextVisible(!isTextVisible);
//   };

//   return (
//     <div>
//       <div className=" px-14 w-auto">
//         <div
//           className={`px-14 lg:h-[199px] p-10 w-auto ${
//             isTextVisible ? "bg-[#FFF8ED]" : ""
//           }`}
//         >
//           <div className="flex w-full justify-between">
//             <h3 className="pb-10 text-2xl text-[#111827] font-bold">
//               {question}
//             </h3>
//             {isTextVisible ? (
//               <MdKeyboardArrowUp
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             )}
//           </div>
//           {isTextVisible && <p className="text-[#4B5563]">{answer}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AskedQuestions;

// import React, { useState } from "react";
// import { MdKeyboardArrowUp } from "react-icons/md";
// import { MdKeyboardArrowDown } from "react-icons/md";

// const AskedQuestions = ({ question, answer }) => {
//   const [isTextVisible, setIsTextVisible] = useState(false);

//   const handleClick = () => {
//     setIsTextVisible(!isTextVisible);
//   };

//   return (
//     <div>
//       <div className=" px-14 w-auto">
//         <div
//           className={`px-14 lg:h-[199px] p-10 w-auto ${
//             isTextVisible ? "bg-[#FFF8ED]" : ""
//           }`}
//         >
//           <div className="flex w-full justify-between">
//             <h3 className="pb-10 text-2xl text-[#111827] font-bold">
//               {question}
//             </h3>
//             {isTextVisible ? (
//               <MdKeyboardArrowUp
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             )}
//           </div>
//           {isTextVisible && <p className="text-[#4B5563]">{answer}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AskedQuestions;

// import { useState } from "react";
// import { MdKeyboardArrowUp } from "react-icons/md";
// import { MdKeyboardArrowDown } from "react-icons/md";

// const AskedQuestions = () => {
//   const [isTextVisible, setIsTextVisible] = useState(false);

//   const handleClick = () => {
//     setIsTextVisible(!isTextVisible);
//   };
//   return (
//     <div className="py-20 w-full">
//       <div className="px-24 py-20 lg:px-32">
//         <h3 className="text-3xl font-extrabold text-[#111827] ">
//           Frequently Asked Questions
//         </h3>
//         <p className="mt-4 text-[#4B5563]">
//           We answered them so you don’t have to ask.
//         </p>
//       </div>
//       <div className=" px-14 w-auto">
//         <div
//           className={`px-14 lg:h-[199px] p-10 w-auto ${
//             isTextVisible ? "bg-[#FFF8ED]" : ""
//           }`}
//         >
//           <div className="flex w-full justify-between">
//             <h3 className="pb-10 text-2xl text-[#111827] font-bold">
//               How much do I pay to order a ride?
//             </h3>
//             {isTextVisible ? (
//               <MdKeyboardArrowUp
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             )}
//           </div>
//           {isTextVisible && (
//             <p className="text-[#4B5563]">
//               We currently only serve registered businesses in Nigeria. We
//               support sole traders, NGOs, partnerships, and limited liability
//               companies. However, If your business is not yet registered, Brass
//               can help you get your desired business registered on time with our
//               partners.
//             </p>
//           )}
//         </div>
//       </div>
//       <div className=" px-14 w-auto">
//         <div
//           className={`px-14 lg:h-[199px] p-10 w-auto ${
//             isTextVisible ? "bg-[#FFF8ED]" : ""
//           }`}
//         >
//           <div className="flex w-full justify-between">
//             <h3 className="pb-10 text-2xl text-[#111827] font-bold">
//               Can I drive for Ije?
//             </h3>
//             {isTextVisible ? (
//               <MdKeyboardArrowUp
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             )}
//           </div>
//           {isTextVisible && (
//             <p className="text-[#4B5563]">
//               We currently only serve registered businesses in Nigeria. We
//               support sole traders, NGOs, partnerships, and limited liability
//               companies. However, If your business is not yet registered, Brass
//               can help you get your desired business registered on time with our
//               partners.
//             </p>
//           )}
//         </div>
//       </div>
//       <div className=" px-14 w-auto">
//         <div
//           className={`px-14 lg:h-[199px] p-10 w-auto ${
//             isTextVisible ? "bg-[#FFF8ED]" : ""
//           }`}
//         >
//           <div className="flex w-full justify-between">
//             <h3 className="pb-10 text-2xl text-[#111827] font-bold">
//               How do I request a ride?
//             </h3>
//             {isTextVisible ? (
//               <MdKeyboardArrowUp
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             )}
//           </div>
//           {isTextVisible && (
//             <p className="text-[#4B5563]">
//               We currently only serve registered businesses in Nigeria. We
//               support sole traders, NGOs, partnerships, and limited liability
//               companies. However, If your business is not yet registered, Brass
//               can help you get your desired business registered on time with our
//               partners.
//             </p>
//           )}
//         </div>
//       </div>
//       <div className=" px-14 w-auto">
//         <div
//           className={`px-14 lg:h-[199px] p-10 w-auto ${
//             isTextVisible ? "bg-[#FFF8ED]" : ""
//           }`}
//         >
//           <div className="flex w-full justify-between">
//             <h3 className="pb-10 text-2xl text-[#111827] font-bold">
//               What happens if I need to cancel a ride?
//             </h3>
//             {isTextVisible ? (
//               <MdKeyboardArrowUp
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             )}
//           </div>
//           {isTextVisible && (
//             <p className="text-[#4B5563]">
//               We currently only serve registered businesses in Nigeria. We
//               support sole traders, NGOs, partnerships, and limited liability
//               companies. However, If your business is not yet registered, Brass
//               can help you get your desired business registered on time with our
//               partners.
//             </p>
//           )}
//         </div>
//       </div>
//       <div className=" px-14 w-auto">
//         <div
//           className={`px-14 lg:h-[199px] p-10 w-auto ${
//             isTextVisible ? "bg-[#FFF8ED]" : ""
//           }`}
//         >
//           <div className="flex w-full justify-between">
//             <h3 className="pb-10 text-2xl text-[#111827] font-bold">
//               What if I want a personal driver?
//             </h3>
//             {isTextVisible ? (
//               <MdKeyboardArrowUp
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             )}
//           </div>
//           {isTextVisible && (
//             <p className="text-[#4B5563]">
//               We currently only serve registered businesses in Nigeria. We
//               support sole traders, NGOs, partnerships, and limited liability
//               companies. However, If your business is not yet registered, Brass
//               can help you get your desired business registered on time with our
//               partners.
//             </p>
//           )}
//         </div>
//       </div>
//       <div className=" px-14 w-auto">
//         <div
//           className={`px-14 lg:h-[199px] p-10 w-auto ${
//             isTextVisible ? "bg-[#FFF8ED]" : ""
//           }`}
//         >
//           <div className="flex w-full justify-between">
//             <h3 className="pb-10 text-2xl text-[#111827] font-bold">
//               How do I rate and provide feedback on my driver?
//             </h3>
//             {isTextVisible ? (
//               <MdKeyboardArrowUp
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             )}
//           </div>
//           {isTextVisible && (
//             <p className="text-[#4B5563]">
//               We currently only serve registered businesses in Nigeria. We
//               support sole traders, NGOs, partnerships, and limited liability
//               companies. However, If your business is not yet registered, Brass
//               can help you get your desired business registered on time with our
//               partners.
//             </p>
//           )}
//         </div>
//       </div>
//       <div className=" px-14 w-auto">
//         <div
//           className={`px-14 lg:h-[199px] p-10 w-auto ${
//             isTextVisible ? "bg-[#FFF8ED]" : ""
//           }`}
//         >
//           <div className="flex w-full justify-between">
//             <h3 className="pb-10 text-2xl text-[#111827] font-bold">
//               What should I do in case I left something in the vehicle?
//             </h3>
//             {isTextVisible ? (
//               <MdKeyboardArrowUp
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             )}
//           </div>
//           {isTextVisible && (
//             <p className="text-[#4B5563]">
//               We currently only serve registered businesses in Nigeria. We
//               support sole traders, NGOs, partnerships, and limited liability
//               companies. However, If your business is not yet registered, Brass
//               can help you get your desired business registered on time with our
//               partners.
//             </p>
//           )}
//         </div>
//       </div>
//       <div className=" px-14 w-auto">
//         <div
//           className={`px-14 lg:h-[199px] p-10 w-auto ${
//             isTextVisible ? "bg-[#FFF8ED]" : ""
//           }`}
//         >
//           <div className="flex w-full justify-between">
//             <h3 className="pb-10 text-2xl text-[#111827] font-bold">
//               Do you have any discounts or promo codes available?
//             </h3>
//             {isTextVisible ? (
//               <MdKeyboardArrowUp
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             )}
//           </div>
//           {isTextVisible && (
//             <p className="text-[#4B5563]">
//               We currently only serve registered businesses in Nigeria. We
//               support sole traders, NGOs, partnerships, and limited liability
//               companies. However, If your business is not yet registered, Brass
//               can help you get your desired business registered on time with our
//               partners.
//             </p>
//           )}
//         </div>
//       </div>
//       <div className=" px-14 w-auto">
//         <div
//           className={`px-14 lg:h-[199px] p-10 w-auto ${
//             isTextVisible ? "bg-[#FFF8ED]" : ""
//           }`}
//         >
//           <div className="flex w-full justify-between">
//             <h3 className="pb-10 text-2xl text-[#111827] font-bold">
//               Is Ije currently hiring?
//             </h3>
//             {isTextVisible ? (
//               <MdKeyboardArrowUp
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 size={25}
//                 className="flex float-right cursor-pointer"
//                 onClick={handleClick}
//               />
//             )}
//           </div>
//           {isTextVisible && (
//             <p className="text-[#4B5563]">
//               We currently only serve registered businesses in Nigeria. We
//               support sole traders, NGOs, partnerships, and limited liability
//               companies. However, If your business is not yet registered, Brass
//               can help you get your desired business registered on time with our
//               partners.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AskedQuestions;
