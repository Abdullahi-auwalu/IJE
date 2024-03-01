import Image from "next/image";

const Download = () => {
  return (
    <div className="mt-10 w-full flex items-center justify-center">
      <div className=" flex flex-col lg:flex-row w-[80%] lg:h-[623px] h-[1145px] rounded-3xl lg:px-26 py-10 px-6 sm:px-20 bg-[#FAA928]">
        <div className="flex flex-col items-start gap-12 lg:w-[40%]">
          <div className="flex flex-col gap-3 mt-24">
            <h1 className="text-5xl font-extrabold flex flex-col gap-5">
              Scan the QR code to <span>download Ije.</span>
            </h1>
            <p>
              Scan the QR code to download Ije. Available on iOS and Android
              devices.
            </p>
          </div>
          <div className="flex gap-1 -ml-5 sm:ml-0 ">
            <Image
              src="/play-store.png"
              alt="play-store"
              width={200}
              height={100}
              className=" w-[150px] sm:w-[200px] h-[80px]"
            />
            <Image
              src="/apple-store.png"
              alt="play-store"
              width={150}
              height={70}
              className=" w-[150px] sm:w-[200px] h-[80px]"
            />
          </div>
        </div>
        <div className="flex relative md:w-[60%] mt-20 sm:mt-52 md:mt-20">
          <Image
            src="/QRcode.png"
            alt="phone"
            width={100}
            height={30}
            className=" h-[169px] sm:w-[169px] mt-20 -ml-3 sm:ml-3 absolute"
          />
          <Image
            src="/phone3.png"
            alt="phone"
            width={400}
            height={100}
            className=" lg:pl-10 md:ml-20 w-[770px] lg:w-[570px] h-[503px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
