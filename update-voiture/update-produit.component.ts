import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { VoitureService } from '../services/voiture.service';
import { Voiture } from '../model/voiture.model';

@Component({
  selector: 'app-update-Voiture',
  templateUrl: './update-Voiture.component.html',
  styles: []
})
export class UpdateVoitureComponent implements OnInit {
  currentVoiture  = new Voiture();
 
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private VoitureService: VoitureService) { 
               
              }

  ngOnInit() {
 
  // console.log(this.route.snapshot.params.id);
   this.currentVoiture = this.VoitureService.consulterVoiture(this.activatedRoute.snapshot.params.id);
   console.log(this.currentVoiture);     
  }

  updateVoiture()
  { //console.log(this.currentVoiture);
    this.VoitureService.updatevoiture(this.currentVoiture);
    this.router.navigate(['Voitures']);
   }

}
