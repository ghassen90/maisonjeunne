import { Component, OnInit } from '@angular/core';
import {GroupeService} from "../../../service/groupe.service";
import {FormBuilder} from "@angular/forms";
import { GroupeModel } from '../../model/groupe.model';
import {GroupUserModel} from "../../model/group.user.model";
import {MaisonModel} from "../../model/maison.model";
import {MaisonJeunesService} from "../../../service/maison-jeunes.service";

@Component({
  selector: 'app-list-groupe',
  templateUrl: './list-groupe.component.html',
  styleUrls: ['./list-groupe.component.scss']
})
export class ListGroupeComponent implements OnInit {



  constructor( private groupeService: GroupeService,
               private maisonJeunesService: MaisonJeunesService,
               private formBuilder: FormBuilder) { }
  listGroupes: GroupeModel[] = [];
  formGroupe: any; 
  updateGroup :any; 
  role = "";
  maison: MaisonModel = {};
  listGroupUser: GroupUserModel[] = [];

  ngOnInit(): void {
    this.groupeService.getListeGroupe().subscribe((group: GroupeModel[])=>{
      if(group?.length){
        this.listGroupes = [...group];
      }
    });

    if(localStorage.getItem('idUser')){
      this.groupeService.listGroupeUser().subscribe(list=>{
        this.listGroupUser = [...list];
        if(this.listGroupUser?.length){
          this.listGroupUser.forEach(groupUser => {
            this.listGroupes.forEach(group =>{
              if(groupUser.id_groupe === group.id_groupe){
                group.userId = groupUser.id_groupe;
                group.status = groupUser.status;
              }
            });
          });
        }
      });
    }

    this.role = localStorage.getItem('roles') +"";
    this.formGroupe = this.formBuilder.group({
      nom_groupe: '',
      description: '',
      category: ''
    });
  }

  addGroupe(){
    if(localStorage.getItem('roles') && localStorage.getItem('idUser')){
      this.maisonJeunesService.getMaisonJeunesByIdUser(localStorage.getItem('idUser') +"")
        .subscribe((maisonJeune: MaisonModel) =>{
          if(maisonJeune){
            let group: GroupeModel = {...this.formGroupe.value, id_maisonjeunes: maisonJeune.id_maisonjeunes};
            this.groupeService.saveGroupe(group).subscribe((value: any)=>{
              if(value){
                this.groupeService.getListeGroupe().subscribe((value: GroupeModel[])=>{
                  this.listGroupes = [...value];
                });
              }
            });
          }
        });
    }
  }

  deleteGroupe(id: number) {
    this.groupeService.delete(id+"").subscribe(value=>{
      if(value){
        this.groupeService.getListeGroupe().subscribe((value: GroupeModel[])=>{
          this.listGroupes = [...this.listGroupes, ...value];
        });
      }
    });
  }

  regoindreGroup(groupe: GroupeModel) {
    if(localStorage.getItem('idUser')){
      let groupUser: GroupUserModel = {};
      groupUser.id_user = localStorage.getItem('idUser') + "";
      groupUser.id_groupe = groupe.id_groupe;
      groupUser.status = "encours";
      this.groupeService.rejoindreGroupe(groupUser).subscribe((groupUser: GroupUserModel)=>{
        if(groupUser){
          location.reload();
        }
      });
    }
  }

  updateGroupe(group: any){
    this.updateGroup = group;
  }

  upgroup(){
    let group ={
    id_groupe: this.updateGroup.id_groupe,
    nom_groupe: this.formGroupe.value.nom_groupe,
    description:  this.formGroupe.value.description,
    category:  this.formGroupe.value.category
    }
    this.groupeService.update(group as GroupeModel).subscribe((value: any)=>{
      if(value){
        this.groupeService.getListeGroupe().subscribe((value: GroupeModel[])=>{
          this.listGroupes = [...value];
        });
      }
    });
  }

}
