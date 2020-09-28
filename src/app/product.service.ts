import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class ProductService {
  getAlbum(id: number) {
    return this._http.get(_albumUrl);
  }

  constructor( private _http: Http) {

  }
  private _albumUrl: ../assets/album.json;
}
