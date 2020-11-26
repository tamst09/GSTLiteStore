import { Role } from './role';

export class User {
    id: number|null;
    username:string;
    password:string;
    email:string;
    phoneNumber:string;
    firstName:string;
    lastName:string;
    address:string;
    active:boolean;
    role:Role;
    constructor(){
        this.id=null;
        this.username="";
        this.password="";
        this.email="";
        this.phoneNumber="";
        this.firstName="";
        this.lastName="";
        this.address="";
        this.active=true;
        this.role=new Role(2,"USER");
    }
}
