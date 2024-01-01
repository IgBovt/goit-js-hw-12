import { getAlert, getErrorAlert } from './alert';

export class NewApiService {
  constructor() {
    this.KEY = '41531809-f9219a766117007ff116a3463';
    this.searchQuery = '';
    this.page = 1;
  }

  async getPhoto() {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${this.KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&per_page=21`
      );

      if (!response.ok) {
        throw new Error(response.status);
      }

      const images = await response.json();

      if (images.hits.length <= 0) {
        getAlert();
      }

      return images;
    } catch (error) {
      console.error(error);
      getErrorAlert();
      removeLoader();
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
}
