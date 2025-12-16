import * as EmailValidator from 'email-validator';

export async function EmailValidation(email: string): Promise<boolean> {
    const isEmail = EmailValidator.validate(email)
    return isEmail
}