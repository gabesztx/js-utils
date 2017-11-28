import { UUID } from 'angular2-uuid';

export interface Base {
    id: string;
    createdAt?: string;
}

export abstract class BaseModel implements Base {

    public id: string;
    public createdAt = '';

    constructor(data: any) {
        Object.assign(this, data);

        if (!this.id) {
            this.id = UUID.UUID();
        }
    }

    serialize(): Base {
        return <Base>JSON.parse(JSON.stringify(this));
    }

}
