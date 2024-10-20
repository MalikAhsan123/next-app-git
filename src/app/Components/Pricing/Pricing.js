import Image from "next/image";
import Card from "../Cards/Card";
import Button from "../Button/Button";
export default function Pricing() {
  return (
    <div className="mx-[80px] mt-12">
      <p className="w-full text-center text-2xl text-blue-700">Pricing</p>
      <p className="text-white text-lg text-center w-full">
        Find a Plan that fits your needs.
      </p>
      <div className="flex flex-wrap mt-8">
        <div className="p-2 lg:w-1/3 md:w-1/3 w-full">
          <div className="border rounded-lg">
            <Card
              title="$9/mo"
              titleClass="text-lg font-semibold text-center w-full"
              amount="Starter Plan"
              amountClass="text-center w-full"
              description="Ideal For Freelance Designers Starting With AI."
              descriptionClass="text-white text-sm text-center w-full"
              breakDown1=".Basic Tools :"
              breakDown1Text="Essential tools get Started"
              breakDown2=".Limited Prok=jects :"
              breakDown2Text="10 projects/Month"
              breakDown3=".Basic Tracking :"
              breakDown3Text="Simple project management"
              dropdownClass="text-[16px] font-semibold"
            />
            <div className="text-center my-4">
              <Button buttonData="Try For Free" />
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/3 w-full">
          <div className="border rounded-lg">
            <Card
              title="$9/mo"
              titleClass="text-lg font-semibold text-center w-full"
              amount="Starter Plan"
              amountClass="text-center w-full"
              description="Ideal For Freelance Designers Starting With AI."
              descriptionClass="text-white text-sm text-center w-full"
              breakDown1=".Basic Tools :"
              breakDown1Text="Essential tools get Started"
              breakDown2=".Limited Prok=jects :"
              breakDown2Text="10 projects/Month"
              breakDown3=".Basic Tracking :"
              breakDown3Text="Simple project management"
              dropdownClass="text-[16px] font-semibold"
            />
            <div className="text-center my-4">
              <Button buttonData="Try For Free" />
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/3 w-full">
          <div className="border rounded-lg">
            <Card
              title="$9/mo"
              titleClass="text-lg font-semibold text-center w-full"
              amount="Starter Plan"
              amountClass="text-center w-full"
              description="Ideal For Freelance Designers Starting With AI."
              descriptionClass="text-white text-sm text-center w-full"
              breakDown1=".Basic Tools :"
              breakDown1Text="Essential tools get Started"
              breakDown2=".Limited Prok=jects :"
              breakDown2Text="10 projects/Month"
              breakDown3=".Basic Tracking :"
              breakDown3Text="Simple project management"
              dropdownClass="text-[16px] font-semibold"
            />
            <div className="text-center my-4">
              <Button buttonData="Try For Free" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-2xl text-center w-full font-semibold my-8">
        Annually
      </p>
      <div className="flex flex-wrap mt-8">
        <div className="p-2 lg:w-1/3 md:w-1/3 w-full">
          <div className="border rounded-lg">
            <Card
              title="$9/mo"
              titleClass="text-lg font-semibold text-center w-full"
              amount="Starter Plan"
              amountClass="text-center w-full"
              description="Ideal For Freelance Designers Starting With AI."
              descriptionClass="text-white text-sm text-center w-full"
              breakDown1=".Basic Tools :"
              breakDown1Text="Essential tools get Started"
              breakDown2=".Limited Prok=jects :"
              breakDown2Text="10 projects/Month"
              breakDown3=".Basic Tracking :"
              breakDown3Text="Simple project management"
              dropdownClass="text-[16px] font-semibold"
            />
            <div className="text-center my-4">
              <Button buttonData="Try For Free" />
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/3 w-full">
          <div className="border rounded-lg">
            <Card
              title="$9/mo"
              titleClass="text-lg font-semibold text-center w-full"
              amount="Starter Plan"
              amountClass="text-center w-full"
              description="Ideal For Freelance Designers Starting With AI."
              descriptionClass="text-white text-sm text-center w-full"
              breakDown1=".Basic Tools :"
              breakDown1Text="Essential tools get Started"
              breakDown2=".Limited Prok=jects :"
              breakDown2Text="10 projects/Month"
              breakDown3=".Basic Tracking :"
              breakDown3Text="Simple project management"
              dropdownClass="text-[16px] font-semibold"
            />
            <div className="text-center my-4">
              <Button buttonData="Try For Free" />
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/3 w-full">
          <div className="border rounded-lg">
            <Card
              title="$9/mo"
              titleClass="text-lg font-semibold text-center w-full"
              amount="Starter Plan"
              amountClass="text-center w-full"
              description="Ideal For Freelance Designers Starting With AI."
              descriptionClass="text-white text-sm text-center w-full"
              breakDown1=".Basic Tools :"
              breakDown1Text="Essential tools get Started"
              breakDown2=".Limited Prok=jects :"
              breakDown2Text="10 projects/Month"
              breakDown3=".Basic Tracking :"
              breakDown3Text="Simple project management"
              dropdownClass="text-[16px] font-semibold"
            />
            <div className="text-center my-4">
              <Button buttonData="Try For Free" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-wrap items-center">
        <div className="p-2 xl:w-1/4 w-full">
          <p className="text-center w-full font-bold text-4xl">Feature Comparison</p>
        </div>
        <div className="p-2 xl:w-1/4 lg:w-1/3 md:w-1/2 w-full">
          <div className="">
            <Card
              title="$9/mo"
              titleClass="text-lg font-semibold text-center w-full"
              amount="Starter Plan"
              amountClass="text-center text-blue-500 w-full"
              description="Ideal For Freelance Designers Starting With AI."
              descriptionClass="text-white text-sm text-center w-full"
            />
            <div className="text-center my-4">
              <button className="text-black bg-white py-2 px-8 rounded-lg">Start For Free</button>
            </div>
          </div>
        </div>
        <div className="p-2 xl:w-1/4 lg:w-1/3 md:w-1/2 w-full">
          <div className="">
            <Card
              title="$9/mo"
              titleClass="text-lg font-semibold text-center w-full"
              amount="Starter Plan"
              amountClass="text-center text-blue-500 w-full"
              description="Ideal For Freelance Designers Starting With AI."
              descriptionClass="text-white text-sm text-center w-full"
            />
            <div className="text-center my-4">
              <button className="text-black bg-white py-2 px-8 rounded-lg">Start For Free</button>
            </div>
          </div>
        </div>
        <div className="p-2 xl:w-1/4 lg:w-1/3 md:w-1/2 w-full">
          <div className="">
            <Card
              title="$9/mo"
              titleClass="text-lg font-semibold text-center w-full"
              amount="Starter Plan"
              amountClass="text-center text-blue-500 w-full"
              description="Ideal For Freelance Designers Starting With AI."
              descriptionClass="text-white text-sm text-center w-full"
            />
            <div className="text-center my-4">
              <button className="text-white bg-blue-700 py-2 px-8 rounded-lg">Start For Free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
