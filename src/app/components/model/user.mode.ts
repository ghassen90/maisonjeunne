import { PointcadeauxModel } from "./pointcadeaux.model";
import { RoleModel } from "./role.model";

export interface UserModel{
    id_pointCadeaux?: any;
    id_user?: any;
    id_pointcadeaux?: number,
    pointcadeaux?: PointcadeauxModel,
    nom?: any;
    password?: any;
    prenom?: any;
    roles?: any;
    tel?: any;
}
