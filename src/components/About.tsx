import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center my-32 mx-20 ">
      <div className="flex flex-col items-center justify-center lg:w-[730px] sm:py-28 ">
        <h2 className="text-2xl font-bold my-5">About Us</h2>
        <p className="flex text-center">
          We connect people or goods in need of transportation in contact with
          reliable people and businesses that have the means to deliver
        </p>
      </div>
      <div className="flex flex-col w-full md:col-span-3  md:flex-row justify-center gap-20 md:ml-24 md:mx-10">
        <div>
          <div className="flex w-auto gap-4 items-center  py-4 ">
            <Image
              src="/show.png"
              alt="vision"
              width={40}
              height={10}
              className="py-3"
            />
            <h2 className="text-2xl font-bold">Vision</h2>
          </div>
          <p>
            Moving people and goods in safety and comfort, fostering a greener
            environment.
          </p>
        </div>
        <div>
          <div className="flex w-auto gap-4 items-center  py-4">
            <Image
              src="/show.png"
              alt="vision"
              width={40}
              height={10}
              className="py-3"
            />
            <h2 className="text-2xl font-bold">Mission Statement</h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image
                src="/mark.png"
                alt="vision"
                width={15}
                height={5}
                className="w-[20px] h-[20px]"
              />
              <p>
                Strive to be the go-to information service for reliable
                transportation of persons and goods.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/mark.png"
                alt="vision"
                width={15}
                height={5}
                className="w-[20px] h-[20px]"
              />
              <p>
                To provide excellent customer experience in all our dealings and
                be responsive to feedbacks to enhance our desired quality
                service.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/mark.png"
                alt="vision"
                width={20}
                height={5}
                className="w-[20px] h-[20px]"
              />
              <p>
                To work in sync with all interested stakeholders to protect the
                environment and support a green economy.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/mark.png"
                alt="vision"
                width={20}
                height={5}
                className="w-[20px] h-[20px] "
              />
              <p>
                Putting people first in all we do by creating an inclusive, safe
                and motivating workplace.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex w-auto gap-4 items-center  py-4">
            <Image
              src="/Chart.png"
              alt="vision"
              width={40}
              height={10}
              className="py-3"
            />
            <h2 className="text-2xl font-bold">Our Core Values</h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image
                src="/mark.png"
                alt="vision"
                width={15}
                height={5}
                className="w-[20px] h-[20px]"
              />
              <p>
                PEOPLE: We care about our people as our best asset; we embrace
                diversity and treat everyone with respect and dignity.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/mark.png"
                alt="vision"
                width={15}
                height={5}
                className="w-[20px] h-[20px]"
              />
              <p>
                SERVICE: We pride our customer-focused service benchmarked on
                respect, safety, reliability, and competitive cost.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/mark.png"
                alt="vision"
                width={20}
                height={5}
                className="w-[20px] h-[20px]"
              />
              <p>
                OWNERSHIP: We take full responsibility for our decisions,
                actions, and outcomes. We own our company and treat it with the
                clinical attention it deserves just as we take our customers,
                partners, and stakeholders as family.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/mark.png"
                alt="vision"
                width={20}
                height={5}
                className="w-[20px] h-[20px]"
              />
              <p>
                TEAMWORK: Together each achieves more – internal and external
                clients. We are all in one team; we engage and understand each
                other better to create a safe workplace and produce excellent
                outcomes for our customers, staff, partners, and the
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
