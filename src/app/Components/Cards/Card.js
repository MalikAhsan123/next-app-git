import Image from "next/image";

export default function Card({
  Icon,
  IconTick,
  amount,
  title,
  description,
  cardClassName,
  PriceBreakDown,
  breakDown1,
  breakDown1Text,
  breakDown2,
  breakDown2Text,
  breakDown3,
  breakDown3Text,
  amountClass,
  titleClass,
  descriptionClass,
  dropdownClass,
}) {
  return (
    <div className={`shadow-sm rounded-lg p-4 ${cardClassName}`}>
      <div className="flex items-center mb-4">
        {Icon && <Icon className="text-white mr-2 text-4xl" />}
      </div>
      <div className={`mt-2 text-lg font-semibold ${amountClass}`}>
        {amount}
      </div>
      <h2 className={`text-xl font-bold ${titleClass}`}>{title}</h2>
      <p className={`text-gray ${descriptionClass}`}>{description}</p>
      <p className="text-white font-semibold my-2">{PriceBreakDown}</p>
      <div className="flex gap-x-1">
        {IconTick && <IconTick className="text-white mr-2" />}
        <p className="text-white flex items-center">
          <span className={`text-[12px] ${dropdownClass}`}>{breakDown1}</span>
          <span className="text-[14px]">{breakDown1Text}</span>
        </p>
      </div>
      <div className="flex">
        {IconTick && <IconTick className="text-white mr-2" />}
        <p className="text-white flex items-center">
          <span className={`text-[12px] ${dropdownClass}`}>{breakDown2}</span>
          <span className="text-[14px]">{breakDown2Text}</span>
        </p>
      </div>
      <div className="flex">
        {IconTick && <IconTick className="text-white mr-2" />}
        <p className="text-white flex items-center">
          <span className={`text-[12px] ${dropdownClass}`}>{breakDown3}</span>
          <span className="text-[14px]">{breakDown3Text}</span>
        </p>
      </div>
    </div>
  );
}
