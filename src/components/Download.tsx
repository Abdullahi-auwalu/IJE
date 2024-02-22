import Image from "next/image";

const Download = () => {
  return (
    <div className="mt-10 w-full flex items-center justify-center">
      <div className=" flex flex-col lg:flex-row w-[80%] lg:h-[640px] h-[1200px] rounded-3xl lg:px-26 py-10 px-20 bg-[#FAA928]">
        <div className="flex flex-col items-start gap-12 w-[40%]">
          <div className="flex flex-col gap-3 mt-24">
            <h1 className="text-5xl font-extrabold flex flex-col gap-5">
              Scan the QR code <span>to download Ije.</span>
            </h1>
            <p>
              Scan the QR code to download Ije. Available on iOS and Android
              devices.
            </p>
          </div>
          <div className="flex gap-2 ">
            <Image
              src="/play-store.png"
              alt="play-store"
              width={150}
              height={70}
            />
            <Image
              src="/apple-store.png"
              alt="play-store"
              width={150}
              height={70}
            />
          </div>
        </div>
        <div className="flex relative w-[60%] mt-24">
          <Image
            src="/QRcode.png"
            alt="phone"
            width={100}
            height={30}
            className=" h-[169px] w-[169px] mt-20 absolute"
          />
          <Image
            src="/phone3.png"
            alt="phone"
            width={300}
            height={100}
            className=" lg:pl-10 ml-20 w-[770px] lg:w-[570px] h-[503px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
