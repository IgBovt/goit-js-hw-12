import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #KEY = '41531809-f9219a766117007ff116a3463';

  constructor() {
    this.searchQuery = null;
    this.page = 1;
    this.itemCount = 40;
    this.total = null;
  }
  async getPhoto() {
    const response = await axios.get(`${this.#BASE_URL}`, {
      params: {
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        page: this.page,
        per_page: this.itemCount,
        key: this.#KEY,
        safesearch: true,
      },
    });

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
