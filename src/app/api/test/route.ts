import { decryptData, encryptData } from "@/lib/crypt/data/dataHasher";

const original = "valor sensível";

export async function GET() {
    const encrypted = await encryptData(original);
    const decrypted = await decryptData(encrypted);

    return Response.json({
        encrypted,
        decrypted,
    });
}
