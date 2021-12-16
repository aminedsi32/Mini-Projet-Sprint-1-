import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  voitures : Voiture[]; //un tableau de voiture
  voiture = new Voiture();
  constructor() {
    this.voitures = [
      { idVoiture : 1,  marqueVoiture : "BMW", prixVoiture : 150.000},
      { idVoiture : 2,  marqueVoiture : "AUDI", prixVoiture : 200.000},
      { idVoiture : 3,  marqueVoiture : "GOLF", prixVoiture : 75.000},
    ];
   }

    listevoitures():Voiture[] {
      return this.voitures;
    }

    ajouterVoiture( v: Voiture){
      this.voitures.push(v);
    }

    supprimerVoiture( v: Voiture){
     
      const index = this.voitures.indexOf(v, 0);
      if (index > -1) {
        this.voitures.splice(index, 1);
      }

 

    }

    consulterVoiture(id:number): Voiture{    
     this.voiture =  this.voitures.find(p => p.idVoiture == id);
       return this.voiture;
    }

   
    triervoitures(){
      this.voitures = this.voitures.sort((n1,n2) => {
        if (n1.idVoiture > n2.idVoiture) {
            return 1;
        }
    
        if (n1.idVoiture < n2.idVoiture) {
            return -1;
        }
    
        return 0;
    });
    }
    
    updatevoiture(p:Voiture)
    {
     // console.log(p);
      this.supprimerVoiture(p);
      this.ajouterVoiture(p);
      this.triervoitures();
    }

   

}
