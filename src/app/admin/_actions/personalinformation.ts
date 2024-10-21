import db from "@/src/app/db/db";
import {z} from  "zod"


const personinfo= z.object({
        firstname:z.string().min(1),
        lastname:z.string().min(1),
        email:z.string().min(3),
        phone:z.number().min(11),
        DOB:z.date(),
    })

    export async function addpersonalinformation(prevState: unknown, formData: FormData){
        const result = personinfo.safeParse(Object.fromEntries(formData.entries()));
        if (result.success === false) {
          return result.error.formErrors.fieldErrors;
        }

        const data = result.data;
        await db.user.create({
            data:{
                firstname:data.firstname,
                lastname:data.lastname,
                email:data.email,
                phone:data.phone,
                DOB:data.DOB,
            }
        })
    }