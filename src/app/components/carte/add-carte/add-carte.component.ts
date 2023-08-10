import { Component, OnInit } from '@angular/core';
import {CarteModel} from "../../model/carte.model.";
import {CarteService} from "../../../service/carte.service";

@Component({
  selector: 'app-add-carte',
  templateUrl: './add-carte.component.html',
  styleUrls: ['./add-carte.component.scss']
})
export class AddCarteComponent implements OnInit {
  listCartes: CarteModel[] = [];
  constructor(private carteService: CarteService) { }

  ngOnInit(): void {
    this.carteService.getListCartes().subscribe((list: CarteModel[]) => {
      if (list) {
        this.listCartes = [...list];
      }
    });
  }

}
