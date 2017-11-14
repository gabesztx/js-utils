import { LoginExtendedShallow, LoginExtendedShallowModel } from './loginExtendedShallow.model';

export interface Login extends LoginExtendedShallow {
    isActive: boolean;
    isConfirmed: boolean;
    validationLink: string;
}

export class LoginModel extends LoginExtendedShallowModel implements Login {

    public isActive = false;
    public isConfirmed = false;
    public validationLink = '';

    constructor(data: any) {
        super(data);
    }

    serialize(): Login {
        return <Login>super.serialize();
    }

}
