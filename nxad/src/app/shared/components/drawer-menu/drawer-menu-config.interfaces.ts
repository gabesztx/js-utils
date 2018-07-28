// External import
// Internal imports
import { UserLevel } from '../../../models/user.model';

export interface DrawerMenuItem {
    id: string;
    label: string;
    name: string;
    path: string[];
    fontIcon: string;
    requiredUserLevel?: UserLevel;
    // additionalPermissionCheck?: (...args: any[]) => Observable<boolean> | boolean; // TODO How? Needs to be serializable for Store.
}

/*export class SidebarNavConfig {

    constructor(items: SidebarNavItem[]) { }

}*/
