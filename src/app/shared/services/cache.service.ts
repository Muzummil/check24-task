import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {
  constructor() {}

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    try {
      const localStorageValue: any = localStorage.getItem(key);
      if (!localStorageValue) return null;
      return JSON.parse(localStorageValue);
    } catch (error) {
      return null;
    }
  }
}
