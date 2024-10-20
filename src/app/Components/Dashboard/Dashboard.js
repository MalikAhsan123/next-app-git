// import Image from "next/image";
// import { FaDollarSign } from "react-icons/fa";
// import { BiCommentAdd } from "react-icons/bi";
// import { MdPersonAddAlt } from "react-icons/md";
// import SideNav from "./SideNav";
// import Card from "../Cards/Card";
// import { FaChevronRight } from "react-icons/fa";
// import ServiceDetail from "../ServicesDetail/ServicesDetail";
// import Button from "../Button/Button";

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen">
//       <div className="xl:mx-[120px] lg:mx-2 mx-2 relative">
//         <SideNav className="relative" />
//         <div className="lg:ms-[250px] ms-0 absolute lg:top-[75px] top-[90px] px-3">
//           <div className="flex gap-x-2 items-center text-[#ffffffa1]">
//             <span>Dashboard</span>
//             <FaChevronRight />
//             <span>Home</span>
//           </div>
//           <div className="lg:ms-[80px] ms-0 w-full mt-6">
//             <p className="text-white text-xl">Overall Performance</p>
//             <p className="text-sm text-[#ffffffa9]">Sales Overview</p>
//             <div className="flex flex-wrap mt-6 w-full">
//               <div className="p-2 xl:w-1/3 lg:w-1/2 md:w-1/2 w-full">
//                 <Card
//                   Icon={BiCommentAdd}
//                   amount="10"
//                   title="Total Projects Completed"
//                   description="+100% Journey"
//                   cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-t-2 border-l border-r border-[#0053cc] text-white"
//                 />
//               </div>
//               <div className="p-2 xl:w-1/3 lg:w-1/2 md:w-1/2 w-full">
//                 <Card
//                   Icon={FaDollarSign}
//                   amount="10"
//                   title="Total Income Generated"
//                   description="+8 Since January"
//                   cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-t-2 border-l border-r border-[#0053cc] text-white"
//                 />
//               </div>
//               <div className="p-2 xl:w-1/3 lg:w-1/2 md:w-1/2 w-full">
//                 <Card
//                   Icon={MdPersonAddAlt}
//                   amount="9"
//                   title="Total Income Generated"
//                   description="+2% Since January"
//                   cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-t-2 border-l border-r border-[#0053cc] text-white"
//                 />
//               </div>
//             </div>
//             <Image
//               className=""
//               src="/images/work-graph.png"
//               width={500}
//               height={400}
//               layout="responsive"
//             />
//             <div className="flex flex-wrap w-full">
//               <div className="lg:w-[70%] w-full p-2">
//                 <ServiceDetail />
//               </div>
//               <div className="lg:w-[30%] w-full p-2">
//                 <Image
//                   className="border border-[#0057d3] rounded-lg w-full h-full bg-gradient-to-t from-[#000000] to-[#021b3f] "
//                   src="/images/graph.png"
//                   width={500}
//                   height={500}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <Button
//                 buttonData="Start Your Project"
//                 btnClass="border-t mt-5 border-[#0057d3] px-5"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { FaDollarSign } from "react-icons/fa";
import { BiCommentAdd } from "react-icons/bi";
import { MdPersonAddAlt } from "react-icons/md";
import SideNav from "./SideNav";
import Card from "../Cards/Card";
import { FaChevronRight } from "react-icons/fa";
import ServiceDetail from "../ServicesDetail/ServicesDetail";
import Button from "../Button/Button";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <div className="xl:mx-[120px] lg:mx-4 mx-2 ">
        
        <SideNav className="relative" />
        <div className="lg:ms-[250px] ms-0 lg:mt-[-1084px] sm:mt-0 sm px-3">
          <div className="flex gap-x-2 items-center text-[#ffffffa1]">
            <span>Dashboard</span>
            <FaChevronRight />
            <span>Home</span>
          </div>
          <div className="lg:ms-[80px] ms-0 w-full mt-6">
            <p className="text-white text-xl">Overall Performance</p>
            <p className="text-sm text-[#ffffffa9]">Sales Overview</p>
            
            {/* Flex container to adjust card layout on small screens */}
            <div className="flex flex-wrap mt-6 w-full">
              <div className="p-2 xl:w-1/3 lg:w-1/2 md:w-1/2 w-full">
                <Card
                  Icon={BiCommentAdd}
                  amount="10"
                  title="Total Projects Completed"
                  description="+100% Journey"
                  cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-t-2 border-l border-r border-[#0053cc] text-white"
                />
              </div>
              <div className="p-2 xl:w-1/3 lg:w-1/2 md:w-1/2 w-full">
                <Card
                  Icon={FaDollarSign}
                  amount="10"
                  title="Total Income Generated"
                  description="+8 Since January"
                  cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-t-2 border-l border-r border-[#0053cc] text-white"
                />
              </div>
              <div className="p-2 xl:w-1/3 lg:w-1/2 md:w-1/2 w-full">
                <Card
                  Icon={MdPersonAddAlt}
                  amount="9"
                  title="Total Income Generated"
                  description="+2% Since January"
                  cardClassName="bg-gradient-to-b from-[#020c1f] to-[#0053cc] border-t-2 border-l border-r border-[#0053cc] text-white"
                />
              </div>
            </div>

            {/* Image: Ensure it scales responsively */}
            <Image
              className="w-full"
              src="/images/work-graph.png"
              width={500}
              height={400}
              layout="responsive"
            />

            {/* Flex container for content responsiveness */}
            <div className="flex flex-wrap">
              <div className="lg:w-[70%] w-full  p-2">
                <ServiceDetail />
              </div>
              <div className="lg:w-[30%] w-full p-2">
                <Image
                  className="border border-[#0057d3] rounded-lg w-full h-auto bg-gradient-to-t from-[#000000] to-[#021b3f]"
                  src="/images/graph.png"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Button: Adjust for small screens */}
            <div className="flex justify-end">
              <Button
                buttonData="Start Your Project"
                btnClass="border-t mt-5 border-[#0057d3] px-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

