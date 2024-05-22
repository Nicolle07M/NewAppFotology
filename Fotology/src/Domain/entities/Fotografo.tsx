export interface Fotografo {
    id?: string;
    email: string;
    username: string;
    adress: string;  
    password: string;
    confirmPassword: string; 
    session_token?: string;
}