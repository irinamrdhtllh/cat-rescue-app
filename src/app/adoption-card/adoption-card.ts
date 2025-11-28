import { Component, input } from '@angular/core';
import { AdoptionCardInfo } from '../adoption-card-info';

@Component({
  selector: 'app-adoption-card',
  imports: [],
  templateUrl: './adoption-card.html',
  styleUrl: './adoption-card.css',
})
export class AdoptionCard {
  adoptionCard = input.required<AdoptionCardInfo>();
}
