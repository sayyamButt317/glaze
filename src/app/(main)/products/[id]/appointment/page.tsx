// import db from "@/src/db/db";
// import { AddressForm } from "./_Components/Addressform";
// import { notFound } from "next/navigation";
// import { PaymentForm } from "./_Components/paymentform";
// import { ServiceSelection } from "./_Components/serviceselection";
// import { getNewestProducts, ProductGridSection } from "@/src/app/page";

// export default async function Appointmentddress({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   const product = await db.product.findUnique({
//     where: { id },
//   });
//   if (product == null) notFound;

//   return (
//     <>
//       <AddressForm product={product} />
//       <div className="w-1/2 flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg">
//         <PaymentForm product={product} />
//       </div>
//       <div><ServiceSelection/>
//       </div>
//     </>
//   );
// }
