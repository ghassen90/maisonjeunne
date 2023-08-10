import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../service/admin.service";
import {EventService} from "../../../service/event.service";
import {MaisonJeunesService} from "../../../service/maison-jeunes.service";
import {GroupeService} from "../../../service/groupe.service";

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})

export class StatistiqueComponent implements OnInit {

  statGroup: string = "0";
  statUser: string = "0";
  statEvent: string = "0";
  statMaison: string = "0";

  constructor(private serviceUser: AdminService,
              private serviceMaison: MaisonJeunesService,
              private serviceGroupe: GroupeService,
              private serviceEvent: EventService) {
  }



  ngOnInit(): void {
    this.serviceUser.statUser().subscribe(sum =>{
      if (sum){
        this.statUser = sum;
      }
    });
    this.serviceMaison.statMaison().subscribe(sum =>{
      if (sum){
        this.statMaison = sum;
      }
    });
    this.serviceGroupe.statGroup().subscribe(sum =>{
      if (sum){
        this.statGroup = sum;
      }
    });
    this.serviceEvent.statEvent().subscribe(sum =>{
      if (sum){
        this.statEvent = sum;
      }
    });
  }


}
