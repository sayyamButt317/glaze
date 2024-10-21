import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import db from "../db/db";
import { Product } from "@prisma/client";
import "./globals.css";

type ProductGridSectionProps = {
  productsFetcher: () => Promise<Product[]>;
};

export async function ProductGridSection({ productsFetcher }) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(await productsFetcher()).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export function getNewestProducts() {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { Order: { _count: "asc" } },
    take: 12,
  });
}

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="relative bg-slate-200 w-full h-[400px] lg:h-auto aspect-[16/9] overflow-hidden">
        <h1 className="text-black text-center mt-10 bg-clip-text text-4xl font-thin">Design For Dreamers</h1>
        <h2 className="text-black text-center p-y bg-clip-text text-4xl font-thin">Where Imagination Meets Inovations</h2>
        <Image
          src="/sunglasses-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[75%_center] lg:object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50 sm:bg-transparent"></div>
      </div>
      <div className="w-full h-[120px] bg-[#FAFAFA] sm:h-[150px] lg:h-[260px] xl:h-[180px]">
        <div className="grid grid-cols-3 gap-5 w-full h-[120px] bg-[#FAFAFA] px-[20px] py-[20px] sm:h-[150px] lg:max-w-[1200px] lg:px-[40px] lg:py-[60px] lg:h-[260px] lg:gap-10 xl:h-[180px] xl:grid-cols-6 xl:px-[10px] xl:m-auto">
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_370d4971fc8e47dd9b13cb385bf3fa1d.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_5801e1e44d94427d942badb46ffe9e4a.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_fff87e9ef4494665990194ff6a23a42a.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_10072b43c8de418ba98619c5272a4a07.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_f8ac939bd4134736aa886e231e83fa38.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_bc51997622674349a4599e21ccb19161.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
        </div>
      </div>
      <span className="h-[30px] w-full lg:h-[60px]"></span>
      <div className="flex flex-col items-center p-[30px]">
        <h1 className="text-[20px] font-medium tracking-widest sm:text-[24px]">
          VITAMIN IV THERAPY
        </h1>
        <p className="text-[12px] text-center text-gray-500 font-light sm:text-[14px]">
          Experience all the benefits of IV therapy in the comfort of your own
          home.
        </p>
      </div>
      <ProductGridSection productsFetcher={getNewestProducts} />
      <span className="h-0 w-full sm:h-[60px]"></span>
      <div className="flex flex-col items-center w-full h-fit bg-[#FAFAFA] py-[40px]">
        <h2 className="text-[18px] font-medium tracking-widest sm:text-[26px]">
          COMMUNITY
        </h2>
        <div className="flex flex-wrap justify-center m-auto h-fit w-full max-w-[1200px]">
          <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
            <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
              <Image
                src="/basic-icons/events.png"
                fill
                style={{ objectFit: "contain" }}
                alt="Events"
              />
            </div>
            <Link
              className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]"
              href="/pages/register-account"
            >
              EVENTS
            </Link>
            <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
            <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">
              On-site wellness services to elevate your event and make it one to
              remember.
            </p>
            <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">
              Book Now
            </button>
          </div>
          <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
            <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
              <Image
                src="/basic-icons/corporate-wellness.png"
                fill
                style={{ objectFit: "contain" }}
                alt="Corporate Wellness"
              />
            </div>
            <Link
              className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]"
              href="/pages/register-account"
            >
              CORPORATE WELLNESS
            </Link>
            <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
            <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">
              Bring comprehensive wellness offerings into the workplace to
              combat burnout, prevent sickness, and boost productivity.
            </p>
            <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">
              Book Now
            </button>
          </div>
          <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
            <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
              <Image
                src="/basic-icons/licensing-consulting.png"
                fill
                style={{ objectFit: "contain" }}
                alt="Licensing-Consulting"
              />
            </div>
            <Link
              className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]"
              href="/pages/register-account"
            >
              LICENSING/CONSULTING
            </Link>
            <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
            <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">
              Explore our wide variety of partnership and licensing
              opportunities
            </p>
            <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
