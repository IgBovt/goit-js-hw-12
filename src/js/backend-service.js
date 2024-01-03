import { getErrorAlert } from './alert';

export class NewApiService {
  constructor() {
    this.KEY = '41531809-f9219a766117007ff116a3463';
    this.searchQuery = '';
    this.page = 1;
    this.itemCount = 40;
    this.orientation = 'horizontal';
    this.imageType = 'photo';
    this.total = null;
  }

  async getPhoto() {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${this.KEY}&q=${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&per_page=${this.itemCount}&page=${this.page}`
      );

      if (!response.ok) {
        throw new Error(response.status);
      }
      const images = await response.json();
      this.incrementPage();
      this.total = images.totalHits;
      return images;
    } catch (error) {
      getErrorAlert();
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  resetTotal() {
    this.total = null;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
