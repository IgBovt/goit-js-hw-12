import axios from 'axios';

export class NewApiService {
  constructor() {
    this.BASE_URL = 'https://pixabay.com/api/';
    this.KEY = '41531809-f9219a766117007ff116a3463';
    this.searchQuery = '';
    this.page = 1;
    this.itemCount = 40;
    this.orientation = 'horizontal';
    this.imageType = 'photo';
    this.total = null;
  }
  async getPhoto() {
    const response = await axios.get(
      `${this.BASE_URL}?key=${this.KEY}&q=${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&per_page=${this.itemCount}&page=${this.page}`
    );
    const images = response.data;
    this.incrementPage();
    this.total = images.totalHits;
    return images;
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