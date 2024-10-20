import Image from "next/image";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import DeliverPrecision from "./Components/DeliverPrecision/DeliverPrecesion";
import DiveIn from "./Components/DiveIn/DiveIn";
import Pricing from "./Components/Pricing/Pricing";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
export default function Page() {
  return (
    <div className="bg-gradient-to-br from-[#0a122093] via-[#01173d] to-[#0a0b0ece] w-full min-h-[3000px] pb-[40px]">
      <Home />
      <Dashboard />
      <DeliverPrecision />
      <DiveIn />
      <Pricing />
      <Category />
      <Footer />
    </div>
  );
}
