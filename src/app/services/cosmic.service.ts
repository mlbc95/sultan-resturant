import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CosmicService {

  constructor(private http: HttpClient) { }

  getHomePageData() {
    return this.http.get('https://api.cosmicjs.com/v3/buckets/sultan-restaurant-prod/objects/64e260c56325270008dcaeca?read_key=jYSPvlMH0zBCnYstSMcnpS6wMWrMRpwvWE1uhyZoVxNHv8a6gR&depth=1&props=slug,title,metadata,');
  }
}
