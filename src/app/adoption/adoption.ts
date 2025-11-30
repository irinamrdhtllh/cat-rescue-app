import { Component, signal } from '@angular/core';
import { AdoptionCard } from '../adoption-card/adoption-card';
import { AdoptionCardInfo } from '../adoption-card-info';

@Component({
  selector: 'app-adoption',
  imports: [AdoptionCard],
  templateUrl: './adoption.html',
  styleUrl: './adoption.css',
})
export class Adoption {
  catsUrl = 'http://localhost:3000/cats';

  adoptionCards = signal<AdoptionCardInfo[]>([]);

  async getAdoptionCardInfo(): Promise<AdoptionCardInfo[]> {
    const cats = await fetch(this.catsUrl);
    return (await cats.json()) ?? [];
  }

  async ngOnInit() {
    this.adoptionCards.set(await this.getAdoptionCardInfo());
  }
}
