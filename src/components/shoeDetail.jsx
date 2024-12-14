import { useState } from "react";
import nike1 from "../assets/n1-min.png";
import { QTY, SIZES } from "../constant";
import { Select } from "./select";

export function ShoeDetail({ shoe, onClickAdd }) {
  const [form, setForm] = useState({ qty: null, size: null });

  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 dark:text-white">
      {/* Shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="h-full flex-center bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]  ">
          <img className="animate-float" src={shoe.src}></img>
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* Shoe Details */}

        <div className="text-5xl font-black md:text-9xl ">{shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description}</div>
        <div className="flex space-x-6">
          <div className="font-extrabold text-3xl md:text-6xl ">
            {" "}
            {shoe.price}$
          </div>
          <Select
            title={"QTY"}
            value={form.qty}
            options={QTY}
            onChange={(qty) => {
              setForm({ ...form, qty });
            }}
            className={"dark:text-black"}
          />
          <Select
            title={"SIZE"}
            options={SIZES}
            value={form.size}
            className={"dark:text-black"}
            onChange={(size) => {
              setForm({ ...form, size });
            }}
          />
        </div>
        {/* Shoe buttons and links */}
        <div className="space-x-10">
          <button
            onClick={() => onClickAdd(shoe, form.qty, form.size)}
            className="btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:text-black dark:bg-white"
          >
            Add to Cart{" "}
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4 dark:text-white"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
