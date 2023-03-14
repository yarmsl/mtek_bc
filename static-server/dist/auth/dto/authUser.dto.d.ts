export declare class RecoveryPassDto implements Pick<IUser, 'email'> {
    readonly email: string;
}
export declare class ChangePassDto implements Pick<IUser, 'password'> {
    readonly password: string;
}
export declare class AuthUserDto extends RecoveryPassDto implements Pick<IUser, 'email' | 'password'> {
    readonly password: string;
}
