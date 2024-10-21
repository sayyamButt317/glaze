import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/src/app/admin/lib/formatters";
import Image from "next/image";
import Link from "next/link";
import { PaymentForm } from "./paymentform";


export function AddressForm({product}:CheckProductType) {
  return (
    <div className="flex w-full max-w-[1200px] mx-auto sm:px-[20px] lg:px-[60px] h-screen">
      {/* Left Half for Address Form */}
      <div className="w-1/2 flex flex-col justify-center">
        <form className="w-full max-w-[500px] px-[25px] py-[40px]">
          <div className="mb-[30px] text-center w-full">
            <h2 className="text-[24px] font-bold">YOUR APPOINTMENT ADDRESS</h2>
          </div>

          {/* First Name and Last Name Row */}
          <div className="flex gap-[15px] mb-[15px] w-full">
            <div className="w-1/2">
              <label className="text-black text-opacity-60">First Name</label>
              <input
                className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                type="text"
                id="firstname"
                placeholder="Enter Your First Name here!"
              />
            </div>
            <div className="w-1/2">
              <label className="text-black text-opacity-60">Last Name</label>
              <input
                className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                type="text"
                id="lastname"
                placeholder="Enter Your Last Name here!"
              />
            </div>
          </div>

          {/* Email and State Row */}
          <div className="flex gap-[15px] mb-[15px] w-full">
            <div className="w-1/2">
              <label className="text-black text-opacity-60">Email</label>
              <input
                className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                type="text"
                id="email"
                placeholder="Enter Your Email here!"
              />
            </div>
            <div className="w-1/2">
              <label className="text-black text-opacity-60">State</label>
              <select
                className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                id="state"
              >
                <option value="" disabled selected>
                  Select your State
                </option>
                {/* Add options here */}
              </select>
            </div>
          </div>

          {/* City and Street Address Row */}
          <div className="flex gap-[15px] mb-[15px] w-full">
            <div className="w-1/2">
              <label className="text-black text-opacity-60">City</label>
              <input
                className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                type="text"
                id="city"
                placeholder="Enter Your City here"
              />
            </div>
            <div className="w-1/2">
              <label className="text-black text-opacity-60">Street Address</label>
              <input
                className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                type="text"
                id="address"
                placeholder="Enter Your Street Address here"
              />
            </div>
          </div>

          {/* Address Line 2 and Zip Code Row */}
          <div className="flex gap-[15px] mb-[15px] w-full">
            <div className="w-1/2">
              <label className="text-black text-opacity-60">Address Line 2</label>
              <input
                className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                type="text"
                id="addressLine2"
                placeholder="Enter Your Address Line 2"
              />
            </div>
            <div className="w-1/2">
              <label className="text-black text-opacity-60">Zip Code</label>
              <input
                className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                type="text"
                id="zipCode"
                placeholder="Enter Your Zip Code"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-[15px] w-full">
            <label className="text-black text-opacity-60">Phone Number</label>
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
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-[20px]">
            <Button>Back</Button>
            <Button>
              <Link href={`/products/${product.id}/service`}>Next</Link>
            </Button>
          </div>
        </form>
      </div>

    </div>
  );
}
