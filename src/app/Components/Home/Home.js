import Image from "next/image";
import HomeNav from "./HomeNav";
import Button from "../Button/Button";
export default function Home() {
  return (
    <div>
      <HomeNav />
      <div className="text-area w-full text-center flex justify-center lg:mt-32 mt-12">
        <div className="lg:w-[60%] md:w-[75%] w-[90%]">
          <Image
            src="/images/home-text.png"
            width={900}
            height={270}
            layout="responsive"
          />
        </div>
      </div>
      <div className="mt-12 mb-6">
        <p className="text-white text-sm w-full text-center">
          Smarter Pricing, seamless project management, and tailored
          briefs-designed for your success.
        </p>
      </div>
      <div className="text-center w-full">
      <Button buttonData="Start For Free" />
      </div>
    </div>
  );
}
