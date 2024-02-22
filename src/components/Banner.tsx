import Image from "next/image";
const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-between h-900px sm:h-[800px] w-full sm:flex-row px-16 lg:px-32  ">
      <div className="px-2 md:ml-16 my-44 md:my-60 flex flex-col items-start w-full h-[90%] sm:justify-center">
        <h2 className="text-4xl font-bold flex py-3  flex-col">
          From A to Z and <span className="py-3">everywhere in between</span>
        </h2>
        <p>...your one stop platform for all your transportation needs</p>
        <div className="flex w-[431px] py-3">
          <Image src="/play-store.png" alt="Logo" width={100} height={25} />
          <Image src="/apple-store.png" alt="Logo" width={100} height={25} />
        </div>
      </div>
      <div className=" sm:mr-10 lg:mr20 sm:w-[50%] sm:h-[90%]">
        <Image
          src="/phone1.png"
          alt="phone"
          width={350}
          height={55}
          className="lg:h-[100%] lg:w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
