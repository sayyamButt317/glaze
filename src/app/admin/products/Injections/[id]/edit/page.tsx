import db from "../../../../../db/db";
import { InjectionForm } from "../../../_components/InjectionForm";
import { ObjectId } from "mongodb"; // Import ObjectId for validation

export default async function EditInjectionPage({
    params: { id },
}: {
    params: { id: string };
}) {

    const product_injection = await db.injection.findUnique({
        where: {
            id        },
    });
    return (
        <>
            <InjectionForm injection={product_injection} />
        </>
    );
}
