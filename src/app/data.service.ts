import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';

declare function require(name: string);
const mockData = require('./mockData.json');

@Injectable()
export class DataService {

  constructor() { }

  fetch() {
      return of(mockData).pipe(delay(3000));
  }
}
