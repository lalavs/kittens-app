import { makeAutoObservable } from 'mobx';

export interface IKitten {
  id: string,
  url: string
}

class Kittens {
  kittens: IKitten[] = [];
  favoriteKittens: IKitten[] = [];

  constructor() {
    makeAutoObservable(this);
  };

  setKittens(kittens: IKitten[]) {
    this.kittens = kittens;
  };

  get items(): IKitten[] {
    return this.kittens;
  };

  setFavoriteKittens(favoriteKittens: IKitten[]) {
    this.favoriteKittens = favoriteKittens;
  };

  get favoriteItems() {
    return this.favoriteKittens;
  };

  addToFavoriteKittens(item: IKitten) {
    this.favoriteKittens.push(item);
    this.updateLocalStorage();
  };

  removeFromFavoriteKittens(id: string) {
    this.favoriteKittens = this.favoriteKittens.filter((item: IKitten) => item.id !== id);
    this.updateLocalStorage();
  };

  updateLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.favoriteKittens));
  };
}

const store = new Kittens();

export default store;
