import { Time } from "@angular/common";

export interface EventModel{
    id_event?: number;
	titre?: string;
	description?: string;
    time?:Date;
	image?: string;
    id_maisonjeunes?:any;
    id_user?:any;
}