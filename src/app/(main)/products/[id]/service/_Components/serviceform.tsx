import { z } from "zod";
import db from "@/src/app/db/db";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
type servicetype = {
    product: {
        id: string;
        imagePath: string;
        name: string;
        description: string;
        priceInCents: number;
        category: string;
        ingredients: string;
      };
};
export default function ServiceSelection() {
  return (
    <div className="flex flex-col items-center w-full max-w-[1200px] m-auto sm:px-[20px] lg:px-[60px]">
      <div className="flex flex-rox justify-center w-full mb-[30px]">
        <h2 className="text-[24px] font-bold">Service Selection</h2>
      </div>
      <form className="flex flex-col items-start w-full max-w-[500px] px-[25px] py-[40px]">
        <div className="flex flex-rox justify-center w-full mb-[30px]">
          <h2 className="text-[24px] font-bold">Personal Information</h2>
        </div>
        <div className="mb-[15px] w-full">
          <label className="text-black text-opacity-60">First Name</label>
          <br />
          <input
            className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
            type="text"
            id="firstname"
            placeholder="Enter Your FirstName here!"
          />
        </div>
        <div className="mb-[15px] w-full">
          <label className="text-black text-opacity-60">Last Name</label>
          <br />
          <input
            className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
            type="text"
            id="lastname"
            placeholder="Enter Your Last Name here!"
          />
        </div>
        <div className="mb-[15px] w-full">
          <label className="text-black text-opacity-60">Email</label>
          <br />
          <input
            className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
            type="text"
            id="email"
            placeholder="Enter Your Email here!"
          />
        </div>
        <div className="mb-[15px] w-full relative">
          <label className="text-black text-opacity-60">Phone Number</label>
          <br />
          <div className="flex items-center border-l-4 border-l-[#ffa9f9] bg-[rgba(0,0,0,0.05)] p-[15px] w-full">
            <div className="flex items-center space-x-2">
              <div className="relative w-[30px] h-[30px]">
                <Image
                  src="/united-states.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt=""
                />
              </div>
              <span className="text-[14px]">+1</span>
            </div>
            <input
              className="flex-1 pl-2 text-[14px] bg-transparent focus:outline-none"
              type="tel"
              placeholder="1234567890"
            />
          </div>
          <div className="">{}</div>
          
          <Button>Back</Button>
            <Button>Next</Button>

        </div>
      </form>
    </div>
  );
}
