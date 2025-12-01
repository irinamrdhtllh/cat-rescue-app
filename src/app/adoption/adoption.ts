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
  catsUrl = 'http://localhost:8000/cats';

  isLoading = signal(false);
  adoptionCards = signal<AdoptionCardInfo[]>([]);
  isError = signal(false);

  async getAdoptionCardInfo(city?: string): Promise<AdoptionCardInfo[]> {
    try {
      this.isLoading.set(true);
      let url;
      if (city) {
        url = this.catsUrl + '?city=' + city;
      } else {
        url = this.catsUrl;
      }
      const cats = await fetch(url);
      const json = await cats.json();
      return json ?? [];
    } catch (error) {
      this.isError.set(true);
      return [];
    } finally {
      this.isLoading.set(false);
    }
  }

  async filterSubmitted(event: Event) {
    event.preventDefault();
    let formData = new FormData(event.target as HTMLFormElement);
    let city = Object.fromEntries(formData.entries())['city'];
    this.adoptionCards.set(await this.getAdoptionCardInfo(city as string));
  }

  async ngOnInit() {
    this.adoptionCards.set(await this.getAdoptionCardInfo());
  }
}
