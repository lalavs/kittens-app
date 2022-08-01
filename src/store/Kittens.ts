import { makeAutoObservable } from 'mobx';

export interface IKitten {
  id: string,
  url: string
}

class Kittens {
  kittens: IKitten[] = [];

  constructor() {
    makeAutoObservable(this);
  };

  setKittens(kittens: IKitten[]) {
    this.kittens = kittens;
  };

  get items(): IKitten[] {
    return this.kittens;
  };
}

const kittens = new Kittens();

export default kittens;
