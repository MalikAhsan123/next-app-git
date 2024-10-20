import Image from "next/image";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";
export default function Category() {
  return (
    <div className="mx-[80px]">
      <p className="text-white text-2xl font-bold my-3">Category</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] bg-transparent shadow-sm overflow-hidden">
          <thead className="uppercase text-sm">
            <tr>
              <th className=" py-3"></th>
              <th className="py-3"></th>
              <th className="py-3"></th>
              <th className="py-3"></th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr className="">
              <td className="py-3">
                <p>Total Projects</p>
              </td>
              <td className="py-3">
                <p>10</p>
              </td>
              <td className="py-3">
                <p className="text-end px-6">50</p>
              </td>
              <td className="py-3">
                <p className="  text-end">Unlimited</p>
              </td>
            </tr>
            <tr className="">
              <td className="py-3">
                <p>Monthly Generations</p>
              </td>
              <td className="py-3">
                <p>10</p>
              </td>
              <td className="py-3">
                <p className="text-end px-6">30</p>
              </td>
              <td className="py-3">
                <p className="  text-end">Unlimited</p>
              </td>
            </tr>
            <tr className="">
              <td className="py-3">
                <div className="flex items-center gap-x-4">
                  <span>Price Generation</span>
                  <IoIosInformationCircleOutline className="text-2xl" />
                </div>
              </td>
              <td className="py-3">
                <p>Basic</p>
              </td>
              <td className="py-3">
                <p className="text-end px-6">Detailed</p>
              </td>
              <td className="py-3">
                <p className="  text-end">Unlimited</p>
              </td>
            </tr>
            <tr className="border-b border-blue-500">
              <td className="py-3">
                <div className="flex items-center gap-x-4">
                  <span>Brief Generation</span>
                  <IoIosInformationCircleOutline className="text-2xl" />
                </div>
              </td>
              <td className="py-3">
                <p>-</p>
              </td>
              <td className="py-3">
                <p className="text-end px-6">-</p>
              </td>
              <td className="py-3">
                <div className=" w-full flex justify-end">
                  <TiTick className="me-4" />
                </div>
              </td>
            </tr>
            <tr className="">
              <td className="py-3">
                <div className="flex items-center gap-x-4">
                  <span>Estimated Work Days</span>
                  <IoIosInformationCircleOutline className="text-2xl" />
                </div>
              </td>
              <td className="py-3">
                <p>-</p>
              </td>
              <td className="py-3">
                <div className=" w-full flex justify-end">
                  <TiTick className="me-4" />
                </div>
              </td>
              <td className="py-3">
                <div className=" w-full flex justify-end">
                  <TiTick className="me-4" />
                </div>
              </td>
            </tr>
            <tr className="border-b border-blue-500">
              <td className="py-3">
                <div className="flex items-center gap-x-4">
                  <span>Project Tracker</span>
                  <IoIosInformationCircleOutline className="text-2xl" />
                </div>
              </td>
              <td className="py-3">
                <p>Basic</p>
              </td>
              <td className="py-3">
                <p className="text-end px-6">Advanced</p>
              </td>
              <td className="py-3">
                <p className="text-end">Advanced</p>
              </td>
            </tr>
            <tr className="">
              <td className="py-3">
                <div className="flex items-center gap-x-4">
                  <span>Client Satisfaction Tracking</span>
                  <IoIosInformationCircleOutline className="text-2xl" />
                </div>
              </td>
              <td className="py-3">
                <p>-</p>
              </td>
              <td className="py-3">
                <p className="text-end px-6">-</p>
              </td>
              <td className="py-3">
                <div className=" w-full flex justify-end">
                  <TiTick className="me-4" />
                </div>
              </td>
            </tr>
            <tr className="border-b border-blue-500">
              <td className="py-3">
                <div className="flex items-center gap-x-4">
                  <span>Project Tracker</span>
                  <IoIosInformationCircleOutline className="text-2xl" />
                </div>
              </td>
              <td className="py-3">
                <p>-</p>
              </td>
              <td className="py-3">
                <div className=" w-full flex justify-end">
                  <TiTick className="me-4" />
                </div>
              </td>
              <td className="py-3">
                <div className=" w-full flex justify-end">
                  <TiTick className="me-4" />
                </div>
              </td>
            </tr>
            <tr className="border-b border-blue-500">
              <td className="py-3">
                <div className="flex items-center gap-x-4">
                  <span>Total Completed Projects</span>
                  <IoIosInformationCircleOutline className="text-2xl" />
                </div>
              </td>
              <td className="py-3">
                <p>-</p>
              </td>
              <td className="py-3">
                <div className=" w-full flex justify-end">
                  <TiTick className="me-4" />
                </div>
              </td>
              <td className="py-3">
                <div className=" w-full flex justify-end">
                  <TiTick className="me-4" />
                </div>
              </td>
            </tr>
            <tr className="">
              <td className="py-3">
                <div className="flex items-center gap-x-4">
                  <span>Total Completed Projects</span>
                  <IoIosInformationCircleOutline className="text-2xl" />
                </div>
              </td>
              <td className="py-3">
                <p>-</p>
              </td>
              <td className="py-3">
                <div className=" w-full flex justify-end">
                  <TiTick className="me-4" />
                </div>
              </td>
              <td className="py-3">
                <div className=" w-full flex justify-end">
                  <TiTick className="me-4" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-end gap-x-4 my-4">
        <button className="text-black bg-white py-2 px-8 rounded-lg mb-2">
          Start For Free
        </button>
        <button className="text-black bg-white py-2 px-8 rounded-lg mb-2">
          Start Now
        </button>
        <button className="text-white bg-blue-700 py-2 px-8 rounded-lg mb-2">
          Start For Free
        </button>
      </div>
      <div className="my-24">
        <p className="text-3xl font-bold text-center w-full">
          Be Firts to Unlcok Artie's Creative Power!
        </p>
        <p className="text-center w-full text-lg font-semibold lg:mx-12 mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nisi ducimus ipsum?
        </p>
      </div>
    </div>
  );
}
