import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpaceCraft } from '../_models/spacecrafts';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(public http: HttpClient) {}

  data!: SpaceCraft[];
  rawData: any;

  getSpaceData() {
    return this.http.get<Object>('https://isro.vercel.app/api/spacecrafts');
  }
}
