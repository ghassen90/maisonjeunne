import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../model/user.mode";
import { AdminService } from "../../../service/admin.service";
import { FormBuilder } from "@angular/forms";
import { MaisonModel } from "../../model/maison.model";
import { MaisonJeunesService } from "../../../service/maison-jeunes.service";

@Component({
  selector: 'app-list-maison-jeunes',
  templateUrl: './list-maison-jeunes.component.html',
  styleUrls: ['./list-maison-jeunes.component.scss']
})
export class ListMaisonJeunesComponent implements OnInit {

  listMaison: MaisonModel[] = [];
  listUsers: UserModel[] = [];
  formMaison: any;
  formUser: any;
  constructor(private userService: AdminService,
    private maisonService: MaisonJeunesService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formMaison = this.formBuilder.group({
      nom_maisonJeunes: "",
      tel_Fixe: "",
      adresse: "",
      gouvernorat: "",
      delegation: "",
      id_user: ""
    });

    this.formUser = this.formBuilder.group({
      id_user: ""
    });

    this.userService.getListeUsers().subscribe(users => {
      if (users) {
        this.listUsers = [...users];

      }
    });

    this.maisonService.getListMaisons().subscribe(maisons => {
      if (maisons) {
        this.listMaison = [...maisons];
      }
    });
  }

  getNomePrenom(idUser: any): any {
    let np = "";
    this.userService.getUsersById(idUser).subscribe((user: UserModel) => {
      if (user) {
        np = user.prenom + " " + user.nom;

      }
    });
    return np;
  }

  addMaisonJeune() {
    let maison: MaisonModel = this.formMaison.value;
    this.maisonService.addMaisons(maison).subscribe(value => {
      if (value) {
        location.reload();
      }
    });
  }
  selMaison: MaisonModel = {};
  selectMaison(maison: MaisonModel) {
    this.selMaison = maison;
  }
  attrbUser() {
    this.selMaison.id_user = this.formUser.value.id_user;
    this.maisonService.addMaisons(this.selMaison).subscribe(value => {
      if (value) {
        location.reload();
      }
    });
  }
}
