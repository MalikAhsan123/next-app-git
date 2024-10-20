import Image from "next/image";
import ServiceDetail from "../ServicesDetail/ServicesDetail";
import Card from "../Cards/Card";
import { FaDollarSign } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiCommentAdd } from "react-icons/bi";
import { FaFilter } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdPersonAddAlt } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import Button from "../Button/Button";
export default function DeliverPrecision() {
  return (
    <div className="mx-[80px] mt-[120px] mb-[50px]">
      <div className="my-6">
        <p className="lg:text-4xl sm:text-3xl w-full text-center"> 
          Create with Confidence, Deliver with Precision
        </p>
      </div>
      <div className="">
      <div className="w-full flex flex-wrap">
        <div className="p-2 lg:w-[60%] w-[100%]">
          <div className="rounded-lg border border-white px-5 py-8">
            <p className="text-white lg:text-3xl sm:text-xl my-2 w-full text-center">
              See All Your Progress in One Place!
            </p>
            <p className="text-center w-full my-3 sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              sequi repellendus laudantium
            </p>
            <p className="text-white lg:text-xl sm:text-lg text-center  font-semibold">
              OverAll Precision
            </p>
            <p className="text-sm mt-2 text-center">Sales Overview</p>
            <div className="flex flex-wrap mt-3 w-full">
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <Card
                  icon={BiCommentAdd}
                  amount="10"
                  title="Total Projects Completed"
                  description="+100% Journey"
                  cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-t-2 border-l border-r border-[#0053cc] text-white"
                />
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <Card
                  icon={FaDollarSign}
                  amount="10"
                  title="Total Income Generated"
                  description="+8 Since January"
                  cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-t-2 border-l border-r border-[#0053cc] text-white"
                />
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <Card
                  icon={MdPersonAddAlt}
                  amount="9"
                  title="Total Income Generated"
                  description="+2% Since January"
                  cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-t-2 border-l border-r border-[#0053cc] text-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-[40%] w-[100%]">
          <div className=" rounded-lg border border-white p-5">
            <p className="text-2xl w-full text-center my-3">
              Show What You're Good At
            </p>
            <p className="text-sm w-full text-center my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              assumenda.
            </p>
            <div className="w-full">
              <ServiceDetail className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap">
        <div className="p-2 lg:w-[40%] w-[100%]">
          <div className=" rounded-lg border border-white p-5 bg-[#000000]">
            <p className="text-2xl w-full text-center my-3">
              Show What You're Good At
            </p>
            <p className="text-sm w-full text-center my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              assumenda.
            </p>
            <div className="w-full flex justify-center">
              <Image
                className=""
                src="/images/graph-2.png"
                width={350}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-[60%] w-[100%]">
          <div className=" rounded-lg border border-white p-6 bg-[#000000]">
            <p className="text-2xl w-full text-center my-3">
              Show What You're Good At
            </p>
            <p className="text-sm w-full text-center my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              assumenda.
            </p>
            <div className="w-full">
              <Image
                src="/images/work-graph-2.png"
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
     
      <div className="px-[8px]">
        <div className="border flex flex-wrap w-full boredr-white rounded-lg py-3 px-5">
          <div className="lg:w-1/2 w-full mt-12">
            <p className="text-2xl text-white font-bold w-full text-center">
              Stop Guessing and Start Knowing!
            </p>
            <p className="w-full text-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique nemo repellat sunt quia a ut modi provident inventore
              rem voluptatum tempore, est quasi eligendi molestiae.
            </p>
            <p className="text-blue-700 w-full mt-2 text-center text-lg font-semibold">
              Project Summary
            </p>
            <div className="flex justify-center">
              <button className="my-3 rounded-full text-sm px-2 py-1 bg-black shadow-b-md border">
                Sale Your Design Business with the Right Pricing
              </button>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="lg:w-1/3 md:w-1/2 w-full p-2">
                <Card
                  Icon={AiFillDollarCircle}
                  amount="Estimated Price"
                  amountClass="text-[16px]"
                  title="Saudia Arabia Market"
                  titleClass="text-[12px]"
                  description="3,100-3,400$"
                  descriptionClass="text-xl text-[#ffff] font-bold"
                  spanClass="w-[200px] border"
                  PriceBreakDown="Price Breakdown"
                  cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-0  px-1 text-white"
                  IconTick={TiTick}
                  breakDown1="Design Complicity : "
                  breakDown1Text=" High"
                  breakDown2="Level of Customization : "
                  breakDown2Text=" Full"
                  breakDown3="Urgency : "
                  breakDown3Text=" Normal DeadLines"
                />
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full p-2">
                <Card
                  Icon={AiFillDollarCircle}
                  amount="Estimated Price"
                  amountClass="text-[16px]"
                  title="Saudia Arabia Market"
                  titleClass="text-[12px]"
                  description="3,100-3,400$"
                  descriptionClass="text-xl text-[#ffff] font-bold"
                  spanClass="w-[200px] border"
                  PriceBreakDown="Price Breakdown"
                  cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-0  px-1 text-white"
                  IconTick={TiTick}
                  breakDown1="Design Complicity : "
                  breakDown1Text=" High"
                  breakDown2="Level of Customization : "
                  breakDown2Text=" Full"
                  breakDown3="Urgency : "
                  breakDown3Text=" Normal DeadLines"
                />
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full p-2">
                <Card
                  Icon={AiFillDollarCircle}
                  amount="Estimated Price"
                  amountClass="text-[16px]"
                  title="Saudia Arabia Market"
                  titleClass="text-[12px]"
                  description="3,100-3,400$"
                  descriptionClass="text-xl text-[#ffff] font-bold"
                  spanClass="w-[200px] border"
                  PriceBreakDown="Price Breakdown"
                  cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-0  px-1 text-white"
                  IconTick={TiTick}
                  breakDown1="Design Complicity : "
                  breakDown1Text=" High"
                  breakDown2="Level of Customization : "
                  breakDown2Text=" Full"
                  breakDown3="Urgency : "
                  breakDown3Text=" Normal DeadLines"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 lg:w-1/2 w-full">
            <p className="text-blue-700 w-full mt-2 text-center text-lg font-semibold">
              Project Brief
            </p>
            <div className="flex justify-center">
              <button className="my-3 rounded-full text-sm px-2 py-1 bg-black shadow-b-md border">
                Sale Your Design Business with the Right Pricing
              </button>
            </div>
            <div className="flex flex-wrap w-full bg-gradient-to-b from-   [#000000] to-[#00204f]">
              <div className="xl:w-[60%] lg:w-[50%] w-full p-4 border-r border-blue-500">
                <div className="my-2 border-b border-blue-500 py-3">
                  <p className="text-lg font-semibold">Elite Events</p>
                  <p className="text-[#ffffff5e] text-sm">Brand identity</p>
                  <p className="text-[#ffffff5e] text-sm">Brand guidlines</p>
                </div>
                <div className="py-4 border-b border-blue-500">
                  <p className="text-lg">Introduction</p>
                  <p className="text-[#ffffff82] text-[12px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod nemo dicta nisi qui animi, necessitatibus commodi.
                    Earum tenetur rerum blanditiis odio eaque animi laborum
                    accusamus necessitatibus adipisci temporibus qui, atque
                    quaerat beatae.
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-lg">Brand Identify Brief</p>
                  <p className="text-[#ffffff82] text-[12px] my-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod nemo dicta nisi qui animi, necessitatibus commodi.
                    Earum tenetur rerum blanditiis odio eaque animi laborum
                    accusamus necessitatibus adipisci temporibus qui, atque
                    quaerat beatae.
                  </p>
                  <div className="flex justify-between">
                    <div>
                      <div className="flex">
                        <TiTick className="text-white mr-2" />
                        <p className="text-white flex items-center">
                          <span className="text-[12px]">Logo Design : </span>
                          <span className="text-[14px]">Premium</span>
                        </p>
                      </div>
                      <div className="flex">
                        <TiTick className="text-white mr-2" />
                        <p className="text-white flex items-center">
                          <span className="text-[12px]">Logo Design : </span>
                          <span className="text-[14px]">Premium</span>
                        </p>
                      </div>
                      <div className="flex">
                        <TiTick className="text-white mr-2" />
                        <p className="text-white flex items-center">
                          <span className="text-[12px]">Logo Design : </span>
                          <span className="text-[14px]">Premium</span>
                        </p>
                      </div>
                      <div className="flex">
                        <TiTick className="text-white mr-2" />
                        <p className="text-white flex items-center">
                          <span className="text-[12px]">Logo Design : </span>
                          <span className="text-[14px]">Premium</span>
                        </p>
                      </div>
                      <div className="flex">
                        <TiTick className="text-white mr-2" />
                        <p className="text-white flex items-center">
                          <span className="text-[12px]">Logo Design : </span>
                          <span className="text-[14px]">Premium</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <Button
                        buttonData="Read Full Brief"
                        btnClass="border-t mt-10 border-[#ffffff82]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-[40%] lg:w-[50%] w-full p-2">
                <div className="border border-blue-500 rounded-lg p-2">
                  <div className="flex justify-between py-3 border-b border-[#ffffff8a]">
                    <div className="flex gap-x-1">
                      <FaFilter className="text-[#ffffff7a]" />
                      <p className="text-blue-500 text-[13px]">Client Name</p>
                    </div>
                    <p className="text-white ps-3 border-l border-blue-500 text-[13px]">
                      Stephen Powell
                    </p>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#ffffff8a]">
                    <div className="flex gap-x-1">
                      <FaFilter className="text-[#ffffff7a]" />
                      <p className="text-blue-500 text-[13px]">Client Name</p>
                    </div>
                    <p className="text-white ps-3 border-l border-blue-500 text-[13px]">
                      Stephen Powell
                    </p>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#ffffff8a]">
                    <div className="flex gap-x-1">
                      <FaFilter className="text-[#ffffff7a]" />
                      <p className="text-blue-500 text-[13px]">Client Name</p>
                    </div>
                    <p className="text-white ps-3 border-l border-blue-500 text-[13px]">
                      Stephen Powell
                    </p>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#ffffff8a]">
                    <div className="flex gap-x-1">
                      <FaFilter className="text-[#ffffff7a]" />
                      <p className="text-blue-500 text-[13px]">Client Name</p>
                    </div>
                    <p className="text-white ps-3 border-l border-blue-500 text-[13px]">
                      Stephen Powell
                    </p>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#ffffff8a]">
                    <div className="flex gap-x-1">
                      <FaFilter className="text-[#ffffff7a]" />
                      <p className="text-blue-500 text-[13px]">Client Name</p>
                    </div>
                    <p className="text-white ps-3 border-l border-blue-500 text-[13px]">
                      Stephen Powell
                    </p>
                  </div>
                  <div className="flex justify-between pt-3 pb-1">
                    <div className="flex gap-x-1">
                      <FaFilter className="text-[#ffffff7a]" />
                      <p className="text-blue-500 text-[13px]">Client Name</p>
                    </div>
                    <p className="text-white ps-3 border-l border-blue-500 text-[13px]">
                      Stephen Powell
                    </p>
                  </div>
                </div>
                <div className="border border-blue-500 rounded-lg p-2 mt-3">
                  <div className="flex justify-between py-3">
                    <div className="flex gap-x-1">
                      <FaClock className="text-[#ffffff7a]" />
                      <p className="text-blue-500 text-[13px]">Created At</p>
                    </div>
                    <p className="text-white ps-3 border-l border-blue-500 text-[13px]">
                      Mar, 23 2024
                    </p>
                  </div>
                </div>
                <div className="border border-blue-500 rounded-lg p-2 mt-3">
                  <div className="flex justify-between py-3">
                    <div className="flex gap-x-1">
                      <FaFilter className="text-[#ffffff7a]" />
                      <p className="text-blue-500 text-[13px]">Service Type</p>
                    </div>
                    <div className="text-white ps-3 flex flex-col gap-y-2 border-l border-blue-500 text-[13px]">
                      <button className="text-red-400 bg-red-300 rounded-full text-[10px] px-2">
                        Brand identity
                      </button>
                      <button className="text-black bg-red-50 rounded-full text-[10px] px-2">
                        Brand Guidelines
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border border-blue-500 rounded-lg p-2 mt-3">
                  <div className="flex justify-between py-3">
                    <div className="flex gap-x-1">
                      <IoPersonSharp className="text-[#ffffff7a]" />
                      <p className="text-blue-500 text-[13px]">Plan</p>
                    </div>
                    <div className="text-white ps-3 flex flex-col gap-y-2 border-l border-blue-500 text-[13px]">
                      <button className="text-green-600 bg-green-300 rounded-full text-[10px] px-2">
                        Premium
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}












