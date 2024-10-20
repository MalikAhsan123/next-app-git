import Image from "next/image";

export default function HomeNav() {
  return (
    <div className="flex lg:gap-x-[300px] md:gap-x-[200px] py-8 lg:ms-[160px] md:ms-[120px] gap-x-3 ms-3">
      <div className="flex gap-x-3">
        <Image src="/logo.png" width={30} height={30} />
        <Image src="/text-logo.png" width={100} height={30} />
      </div>
      <div>
        <nav>
          <ul className="flex lg:gap-x-10 md:gap-x-10 gap-x-2">
            <li className="text-white text-lg">Home</li>
            <li className="text-white text-lg">Features</li>
            <li className="text-white text-lg">About</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
