import { randomBytes } from "crypto";

export function generateKey(char: number) {
    const keyLength = char / 2;
    return randomBytes(keyLength).toString("hex");
}


const x = generateKey(32)
console.log(x)