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

  currentPage = 1;
  catsPerPage = 8;

  totalItems = 0;
  pages: number[] = [];

  isLoading = signal(false);
  adoptionCards = signal<AdoptionCardInfo[]>([]);
  isError = signal(false);

  async getAdoptionCardInfo(page: number, city?: string): Promise<AdoptionCardInfo[]> {
    try {
      this.isLoading.set(true);
      let url = `${this.catsUrl}?page=${page}`;

      if (city) {
        url += `&city=${city}`;
      }

      const response = await fetch(url);
      const json = await response.json();

      this.totalItems = json.total;

      const maxPage = Math.ceil(this.totalItems / this.catsPerPage);
      this.pages = Array.from({ length: maxPage }, (_, i) => i + 1);

      return json.data ?? [];
    } catch (error) {
      this.isError.set(true);
      return [];
    } finally {
      this.isLoading.set(false);
    }
  }

  async goToPage(page: number) {
    this.currentPage = page;
    this.adoptionCards.set(await this.getAdoptionCardInfo(this.currentPage));
  }

  async prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.adoptionCards.set(await this.getAdoptionCardInfo(this.currentPage));
    }
  }

  async nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
      this.adoptionCards.set(await this.getAdoptionCardInfo(this.currentPage));
    }
  }

  async filterSubmitted(event: Event) {
    event.preventDefault();
    let formData = new FormData(event.target as HTMLFormElement);
    let city = Object.fromEntries(formData.entries())['city'];
    this.adoptionCards.set(await this.getAdoptionCardInfo(this.currentPage, city as string));
  }

  async ngOnInit() {
    this.adoptionCards.set(await this.getAdoptionCardInfo(this.currentPage));
  }
}
