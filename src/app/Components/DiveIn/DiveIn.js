import Image from "next/image";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill  } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import Button from "../Button/Button";
export default function DiveIn() {
  return (
    <div className="mx-[80px]">
      <div className="border border-white rounded-lg p-5">
        <p className="text-xl font-semibold text-center w-full my-3">
          Ready to Dive In?
        </p>
        <p className="text-white text-center  w-full my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, enim
          laboriosam. Doloremque, fuga molestiae corrupti nobis dolor
          distinctio, aut numquam iusto illo adipisci pariatur, ipsam quod
          consectetur quaerat architecto voluptatum!
        </p>

        <p className="text-blue-700 text-lg font-semibold w-full text-center">
          Essential Questions
        </p>
        <div className="text-center mt-3">
          <button className="text-sm  px-2  py-1 border rounded-full bg-black">
            Sale Your Design Business with the Right Pricing
          </button>
        </div>

        {/* ................ */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-between w-full mt-16">
            <div className="lg:w-[40%] w-full">
              <p className="text-center text-xl font-semibold my-3 text-blue-700">
                Templates Type
              </p>
              <div className="border border-blue-500 rounded-lg bg-[#427fe21d]">
                <p className="text-sm text-white ps-2 ms-5 my-5 border-l border-white">
                  Choose Template Type
                </p>
                <div className="service-btns flex flex-wrap gap-3 mx-5 my-4">
                  <button className="text-white flex bg-blue-700 items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline />
                    <span>Agenda</span>
                  </button>
                  <button className="text-blue-700 border border-blue-500 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline className="text-blue-500" />
                    <span>Briefs</span>
                  </button>
                  <button className="text-white bg-blue-700 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline />
                    <span>Contacts</span>
                  </button>
                  <button className="text-white bg-blue-700 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline />
                    <span>Catalogs</span>
                  </button>
                  <button className="text-blue-700 border border-blue-500 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline className="text-blue-500" />
                    <span>Contracts</span>
                  </button>
                  <button className="text-white bg-blue-700 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline />
                    <span>Case Studies</span>
                  </button>
                  <button className="text-white bg-blue-700 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline />
                    <span>Emails</span>
                  </button>
                  <button className="text-blue-700 border border-blue-500 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline className="text-blue-500" />
                    <span>Invoice</span>
                  </button>
                  <button className="text-blue-700 border border-blue-500 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline className="text-blue-500" />
                    <span>Presentation</span>
                  </button>
                  <button className="text-white bg-blue-700 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline />
                    <span>Newsletters</span>
                  </button>
                  <button className="text-white bg-blue-700 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline />
                    <span>Agenda</span>
                  </button>
                  <button className="text-white bg-blue-700 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline />
                    <span>Agenda</span>
                  </button>
                  <button className="text-blue-700 border border-blue-500 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline className="text-blue-500" />
                    <span>Briefs</span>
                  </button>
                  <button className="text-white bg-blue-700 flex items-center gap-x-2 px-3 py-2 rounded-full">
                    <IoIosAddCircleOutline />
                    <span>Agenda</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-[45%] w-full">
              <p className="text-blue-700 w-full text-center text-xl">
                Brand Application
              </p>
              <div className="rounded-lg border px-2 py-4 mt-2 border-blue-500 flex flex-wrap justify-between bg-[#427fe21d]">
                <div className="lg:w-[32%] flex items-center justify-between">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  <p className="text-[12px] ps-2 border-l">Business Cards</p>
                </div>
                <div className="lg:w-[63%]">
                  <div className="flex flex-wrap gap-x-4">
                    <div className="flex gap-x-3">
                      <div className="flex items-center border-l border-blue-700 ps-2 gap-x-1">
                        <TiTick />
                        <span className="text-[10px]">Standard</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Professional</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Premium</span>
                      </div>
                    </div>
                    <div className="flex gap-x-1">
                      <button className="bg-blue-700 px-2 border border-blue-500 flex items-center py-2 rounded">
                        <IoIosAddCircleOutline className="" />
                        <span className="text-[10px]">Customize More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border px-2 py-4 mt-2 border-blue-500 flex flex-wrap justify-between bg-[#427fe21d]">
                <div className="lg:w-[32%] flex items-center justify-between">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  <p className="text-[12px] ps-2 border-l">Business Cards</p>
                </div>
                <div className="lg:w-[63%]">
                  <div className="flex flex-wrap gap-x-4">
                    <div className="flex  gap-x-3">
                      <div className="flex items-center border-l border-blue-700 ps-3 gap-x-1">
                        <TiTick />
                        <span className="text-[10px]">Standard</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Professional</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Premium</span>
                      </div>
                    </div>
                    <div className="flex gap-x-1">
                      <button className="bg-blue-700 px-2 border border-blue-500 flex items-center py-2 rounded">
                        <IoIosAddCircleOutline className="" />
                        <span className="text-[10px]">Customize More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border px-2 py-4 mt-2 border-blue-500 flex flex-wrap justify-between bg-[#427fe21d]">
                <div className="lg:w-[32%] flex items-center justify-between">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  <p className="text-[12px] ps-2 border-l">Business Cards</p>
                </div>
                <div className="lg:w-[63%]">
                  <div className="flex flex-wrap gap-x-4">
                    <div className="flex gap-x-3">
                      <div className="flex items-center border-l border-blue-700 ps-3 gap-x-1">
                        <TiTick />
                        <span className="text-[10px]">Standard</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Professional</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Premium</span>
                      </div>
                    </div>
                    <div className="flex gap-x-1">
                      <button className="bg-blue-700 px-2 border border-blue-500 flex items-center py-2 rounded">
                        <IoIosAddCircleOutline className="" />
                        <span className="text-[10px]">Customize More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border px-2 py-4 mt-2 border-blue-500 flex flex-wrap justify-between bg-[#427fe21d]">
                <div className="lg:w-[32%] flex items-center justify-between">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  <p className="text-[12px] ps-2 border-l">Business Cards</p>
                </div>
                <div className="lg:w-[63%]">
                  <div className="flex flex-wrap gap-x-4">
                    <div className="flex gap-x-3">
                      <div className="flex items-center border-l border-blue-700 ps-3 gap-x-1">
                        <TiTick />
                        <span className="text-[10px]">Standard</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Professional</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Premium</span>
                      </div>
                    </div>
                    <div className="flex gap-x-1">
                      <button className="bg-blue-700 px-2 border border-blue-500 flex items-center py-2 rounded">
                        <IoIosAddCircleOutline className="" />
                        <span className="text-[10px]">Customize More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center lg:mt-[-360px]">
            <div className="flex flex-col gap-y-2 lg:w-[60%] w-full">
              <div className="rounded-lg border px-2 py-4 mt-2 border-blue-500 flex flex-wrap justify-between bg-[#427fe21d]">
                <div className="lg:w-[40%] flex items-center justify-between">
                  <IoIosSend className="text-3xl text-blue-700" />
                  <p className="text-[12px] ps-2 border-l">Country</p>
                </div>
                <div className="lg:w-[50%]">
                  <div className="flex gap-x-4">
                    <div className="flex gap-x-3">
                      <div className="flex items-center border-l border-blue-700 w-full ps-[120px]">
                        <select
                          name=""
                          id=""
                          className="bg-black py-3 w-full px-5 border border-blue-500"
                        >
                          <option value="">Select Country</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border px-2 py-4 mt-2 border-blue-500 flex flex-wrap justify-between bg-[#427fe21d]">
                <div className="lg:w-[40%] flex items-center justify-between">
                  <IoIosSend className="text-3xl text-blue-700" />
                  <p className="text-[12px] ps-2 border-l">Experience</p>
                </div>
                <div className="lg:w-[50%]">
                  <div className="flex gap-x-4">
                    <div className="flex w-full flex-col text-neutral-600 dark:text-neutral-300">
                      <div className="flex items-center justify-between px-2 text-center text-neutral-600 dark:text-neutral-300">
                        <span className="text-xs">Beginner</span>
                        <span className="text-xs">Intermediate</span>
                        <span className="text-xs">Expert</span>
                      </div>
                      <input
                        id="rangeSlider"
                        type="range"
                        className="mt-4 h-2 w-full appearance-none rounded-lg cursor-pointer bg-transparent"
                        style={{
                          background: `linear-gradient(to right, #3b82f6 ${50}%, #ffffff ${50}%)`,
                        }}
                        defaultValue="50"
                        min="0"
                        max="100"
                        step="5"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border px-2 py-4 mt-2 border-blue-500 flex flex-wrap justify-between bg-[#427fe21d]">
                <div className="lg:w-[40%] flex items-center justify-between">
                  <IoIosSend className="text-3xl text-blue-700" />
                  <p className="text-[12px] ps-2 border-l">Experience</p>
                </div>
                <div className="lg:w-[50%]">
                  <div className="flex gap-x-4">
                    <div className="flex w-full flex-col text-neutral-600 dark:text-neutral-300">
                      <div className="flex items-center justify-between px-2 text-center text-neutral-600 dark:text-neutral-300">
                        <span className="text-xs">Beginner</span>
                        <span className="text-xs">Intermediate</span>
                        <span className="text-xs">Expert</span>
                      </div>
                      <input
                        id="rangeSlider"
                        type="range"
                        className="mt-4 h-2 w-full appearance-none rounded-lg cursor-pointer bg-transparent"
                        style={{
                          background: `linear-gradient(to right, #3b82f6 ${50}%, #ffffff ${50}%)`,
                        }}
                        defaultValue="50"
                        min="0"
                        max="100"
                        step="5"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border px-2 py-4 mt-2 border-blue-500 flex flex-wrap justify-between bg-[#427fe21d]">
                <div className="lg:w-[32%] flex items-center justify-between">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  <p className="text-[12px] ps-2 border-l">Business Cards</p>
                </div>
                <div className="lg:w-[63%]">
                  <div className="flex flex-wrap gap-x-4">
                    <div className="flex gap-x-3">
                      <div className="flex items-center border-l border-blue-700 ps-3 gap-x-1">
                        <TiTick />
                        <span className="text-[10px]">Standard</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Professional</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Premium</span>
                      </div>
                    </div>
                    <div className="flex gap-x-1"></div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border px-2 py-4 mt-2 border-blue-500 flex flex-wrap justify-between bg-[#427fe21d]">
                <div className="lg:w-[32%] flex items-center justify-between">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  <p className="text-[12px] ps-2 border-l">Business Cards</p>
                </div>
                <div className="lg:w-[63%]">
                  <div className="flex flex-wrap gap-x-4">
                    <div className="flex gap-x-3">
                      <div className="flex items-center border-l border-blue-700 ps-3 gap-x-1">
                        <TiTick />
                        <span className="text-[10px]">Standard</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Professional</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <div className="flex items-center">
                        <TiTick />
                        <span className="text-[10px]">Premium</span>
                      </div>
                    </div>
                    <div className="flex gap-x-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .................. */}
        <div className="flex items-center justify-around mt-16">
            <div className="flex items-center gap-x-3">
            <BsArrowLeftSquareFill className="text-blue-500" />
            <BsFillArrowRightSquareFill className="text-blue-500" />
            </div>
            <div className="btn">
                <Button buttonData="Start Customizing" btnClass="border-t px-12 border-blue-700 rounded-lg" />
            </div>
        </div>
      </div>
    </div>
  );
}
