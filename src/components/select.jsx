import { IoIosArrowDown } from "react-icons/io";
export function Select({ title, options, className, onChange, value }) {
  return (
    <div className="relative">
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        className={`w-24 appearance-none bg-white border border-gray-300 p-4 ${className}`}
      >
        <option value="" disabled hidden>
          {title}
        </option>

        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3 ">
        <IoIosArrowDown className={"dark:text-black"} />
      </div>
    </div>
  );
}
