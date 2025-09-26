export type UserModel = {
    name: string,
    surname:string,
    age:number,
    cellphone:number,
    email:string,
    secondEmail?:string,
    password:string,
    address : {
        road:string,
        homeNumber:number,
        postalCode:number,
        additional?: string,
    }
}