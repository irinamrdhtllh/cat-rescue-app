import { Component } from '@angular/core';
import { AdoptionCard } from '../adoption-card/adoption-card';
import { AdoptionCardInfo } from '../adoption-card-info';

@Component({
  selector: 'app-adoption',
  imports: [AdoptionCard],
  templateUrl: './adoption.html',
  styleUrl: './adoption.css',
})
export class Adoption {
  adoptionCard: AdoptionCardInfo = {
    id: 0,
    photo: '',
    name: 'Oreo',
    city: 'Bandung',
    state: 'West Java',
    gender: 'Female',
    breed: 'Ragdoll',
    traits: 'Calm and friendly',
  };
}
