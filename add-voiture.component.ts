import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {

  newVoiture = new Voiture();
  msg : string;
  constructor(private voitureService: VoitureService) { }

  addVoiture(){
    // console.log(this.newVoiture);
    this.voitureService.ajouterVoiture(this.newVoiture);
    this.msg = "Voiture "+ this.newVoiture.marqueVoiture+" ajouté avec succès"
   }

  ngOnInit() {
  }


  
}
