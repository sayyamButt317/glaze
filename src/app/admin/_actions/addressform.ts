// import {z} from "zod";
// import db from "@/src/db/db";
// import { notFound, redirect } from "next/navigation";

// const formSchema = z.object({
//     Country:z.string().min(3),
//     StreetAddress:z.string().min(3),
//     AddressLine:z.string().min(3),
//     City:z.string().min(3),
//     ZipCode:z.number().min(5),
//     State:z.string().min(3)
    
// })

// export async function addappointmentaddress(prevState: unknown, formData: FormData){
//     const result = formSchema.safeParse(Object.fromEntries(formData.entries()));
//     if (result.success === false) {
//       return result.error.formErrors.fieldErrors;
//     }
    
//   const data = result.data;
//     await db.appointmentddress.create({
//         data:{
//             Country:data.Country,
//             StreetAddress:data.StreetAddress,
//             AddressLine:data.AddressLine,
//             City:data.City,
//             ZipCode:data.ZipCode,
//             State:data.State


//         }
//     });
//     redirect("")

// }