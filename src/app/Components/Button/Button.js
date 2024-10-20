import Image from "next/image";
export default function Button({
  buttonData = "",
  btnClass = ""
}) {
  return (
    <div>
      <button className={` text-white bg-gradient-to-bl from-[#02193f] to-[#0046ae] border-2 border-white rounded-lg px-3 py-3 ${btnClass}`}>
        {buttonData}
      </button>
    </div>
  );
}
