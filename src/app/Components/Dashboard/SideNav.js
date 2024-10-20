import Image from "next/image";
import { FaTachometerAlt, FaFileInvoice, FaUser } from "react-icons/fa"; // Import icons

export default function SideNav() {
  return (
    <div className="mt-12">
     
        <div className="bg-[#08142b] py-3 border-b flex pe-12 justify-end border-[#ffffff4c]">
        <nav>
          <ul className="flex lg:gap-x-10 md:gap-x-10 gap-x-2">
            <li className="text-white text-lg">Home</li>
            <li className="text-white text-lg">Features</li>
            <li className="text-white text-lg">About</li>
          </ul>
        </nav>
        </div>
        <div className="bg-[#08142b] sm:block lg:hidden py-3 border shadow-lg flex pe-12 justify-end border-[#ffffff4c]">
        <nav className=" mt-6">
          <ul className="flex lg:gap-x-10 md:gap-x-10 gap-x-2">
            <li className="text-white text-lg">Dashboard</li>
            <li className="text-white text-lg">Projects</li>
            <li className="text-white text-lg">Profile</li>
          </ul>
        </nav>
        </div>
    
      <nav className="relative top-[-55px] bg-gradient-to-br from-[#1c1b5a] to-[#030816] w-[240px] border border-[#375cc4] text-white shadow-sm p-4 min-h-[1100px] xl:block lg:block sm:hidden hidden">
        <div className="my-4">
          <div className="flex gap-x-3">
            <Image src="/logo.png" width={30} height={30} alt="Logo" />
            <Image
              src="/text-logo.png"
              width={100}
              height={30}
              alt="Text Logo"
            />
          </div>
        </div>
        <ul className="mt-12 space-y-8">
          <div className="flex">
            <li className="p-2 rounded">
              <a href="#dashboard" className="flex items-center">
                <FaTachometerAlt className="mr-2 text-2xl" />
                Dashboard
              </a>
            </li>
            <span className="h-[35px] w-[3px] bg-[#375cc4] ms-[93px] border-2 border-[#3b6cf1]"></span>
          </div>
          <li className="p-2 text-[#ffffff93] rounded">
            <a href="#receipts" className="flex items-center">
              <FaFileInvoice className="mr-2 text-2xl" />
              Receipts
            </a>
          </li>
          <li className="p-2 text-[#ffffff93] rounded">
            <a href="#profile" className="flex items-center">
              <FaUser className="mr-2 text-2xl" />
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
