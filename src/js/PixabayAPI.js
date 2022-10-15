import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export class PaxabayAPI {
  #page = 1;
  #query = '';
  #totalPages = 0;
  #perPage = 40;
  #params = {
    params: {
      key: '30603772-7c6418a9f7df4ea7cbbf50eda',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: this.#perPage,
    },
  };

  async getPhotos() {
    const urlAXIOS = `?page=${this.#page}&q=${this.#query}`;
    const { data } = await axios.get(urlAXIOS, this.#params);
    return data;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  get query() {
    return this.#query;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }
  calculateTotalPages(total) {
    this.#totalPages = Math.ceil(total / this.#perPage);
  }

  get isShowLoadMore() {
    return this.#page < this.#totalPages;
  }
}
