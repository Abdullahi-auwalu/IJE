import Image from "next/image";

const Download = () => {
  return (
    <div className="mt-10 w-full flex items-center justify-center">
      <div className=" flex flex-col lg:flex-row w-[80%] rounded-3xl gap-[50px] lg:px-26 pt-10 px-6 sm:px-20 bg-[#FAA928]">
        <div className="flex flex-col gap-[30px] sm:flex-1">
          <div className="flex flex-col gap-3 mt-5 sm:mt-0">
            <h1 className="text-5xl font-extrabold flex flex-col">
              Scan the QR code to download Ije.
            </h1>
            <p>
              Scan the QR code to download Ije. Available on iOS and Android
              devices.
            </p>
          </div>
          <div className="self-center lg:self-start sm:flex sm:gap-1 sm:ml-0">
            <Image
              src="/play-store.png"
              alt="play-store"
              width={200}
              height={100}
              className="w-[200px] mb-5 sm:mb-0 sm:w-[180px]"
            />
            <Image
              src="/apple-store.png"
              alt="play-store"
              width={150}
              height={70}
              className=" w-[200px] sm:w-[150px]"
            />
          </div>
        </div>
        <div className="flex mt-[90px] md:mt-[50px] relative lg:mt-0 md:self-center">
          <Image
            src="/QRcode.png"
            alt="phone"
            width={100}
            height={30}
            className="mt-[-50px] lg:mt-20 left-[100px] md:ml-3 lg:ml-[-150px] absolute"
          />
          <Image
            src="/phone3.png"
            alt="phone"
            width={400}
            height={100}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
