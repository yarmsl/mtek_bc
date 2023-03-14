export declare class CreateUserDto implements IUser {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly role: string;
    readonly photo?: string;
}
