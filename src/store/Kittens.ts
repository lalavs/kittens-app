import { makeAutoObservable } from 'mobx';

export interface IKitten {
  id: string,
  url: string
}

class Kittens {
  constructor() {
    makeAutoObservable(this);
  };

  kittens: IKitten[] = [];
  favoriteKittens: IKitten[] = [];

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
  };

  removeFromFavoriteKittens(id: string) {
    this.favoriteKittens = this.favoriteKittens.filter((item: IKitten) => item.id !== id);
  };
}

const store = new Kittens();

export default store;
