import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  counter = signal(0);
  constructor() {}

  increment() {
    this.counter.update((x) => x + 1);
  }
  decrement() {
    this.counter.update((x) => x - 1);
  }
}
