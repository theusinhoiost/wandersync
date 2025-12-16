import SimpleCrypto from "simple-crypto-js";

const SECRET_KEY = process.env.DATA_SECRET_KEY;

if (!SECRET_KEY) {
    throw new Error("Problemas com os dados.");
}

const crypto = new SimpleCrypto(SECRET_KEY);

export async function encryptData(value: string) {
    return crypto.encrypt(value);
}


export async function decryptData(encryptedValue: string) {
    return crypto.decrypt(encryptedValue);
}
