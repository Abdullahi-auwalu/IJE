import Image from "next/image";
const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-between h-900px sm:h-[800px] w-full sm:flex-row px-16 lg:px-32 ">
      <div className="px-2 md:ml-16 my-44 md:my-60 flex flex-col items-start lg:w-[700px]  sm:justify-center">
        <h2 className="text-5xl font-extrabold flex py-3  flex-col">
          From A to Z and <span className="py-3">everywhere in between</span>
        </h2>
        <p className="py-3">
          ...your one stop platform for all your transportation needs
        </p>
        <div className="flex lg:w-[450px] w-[311px] py-3 gap-2  ">
          <Image
            src="/play-store.png"
            alt="play-store"
            width={200}
            height={100}
            className=" w-[150px] sm:w-[150px]"
          />
          <Image
            src="/apple-store.png"
            alt="play-store"
            width={150}
            height={70}
            className=" w-[150px] sm:w-[150px] "
          />
        </div>
      </div>
      <div className=" sm:mr-10  sm:w-[50%] sm:h-[90%]">
        <Image
          src="/phone1.png"
          alt="phone"
          width={350}
          height={55}
          className="lg:h-[100%] lg:w-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
