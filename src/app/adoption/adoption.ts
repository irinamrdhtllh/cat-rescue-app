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

  isLoading = signal(false);
  adoptionCards = signal<AdoptionCardInfo[]>([]);
  isError = signal(false);

  async getAdoptionCardInfo(): Promise<AdoptionCardInfo[]> {
    try {
      this.isLoading.set(true);
      const cats = await fetch(this.catsUrl);
      const json = await cats.json();
      return json ?? [];
    } catch (error) {
      this.isError.set(true);
      return [];
    } finally {
      this.isLoading.set(false);
    }
  }

  async ngOnInit() {
    this.adoptionCards.set(await this.getAdoptionCardInfo());
  }
}
