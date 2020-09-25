import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {
  getAlbum() {
    id: Number;
  }

  constructor() { }
  private _http: Http;
  _albumUrl: '../assets/album.json';
}
