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
  adoptionCardList: AdoptionCardInfo[] = [
    {
      id: 0,
      photo: '/assets/oreo.jpg',
      name: 'Oreo',
      city: 'Bandung',
      state: 'West Java',
      gender: 'Male',
      age: '2 month',
      breed: 'British short hair',
      traits: 'Playful',
    },
    {
      id: 1,
      photo: '/assets/aurora.jpg',
      name: 'Aurora',
      city: 'Jakarta',
      state: 'DKI Jakarta',
      gender: 'Female',
      age: '1 month',
      breed: 'Ragdoll',
      traits: 'Calm and friendly',
    },
    {
      id: 2,
      photo: '/assets/molly.jpg',
      name: 'Molly',
      city: 'Tangerang',
      state: 'Banten',
      gender: 'Female',
      age: '3 month',
      breed: 'Persian',
      traits: 'Always hungry',
    },
  ];
}
