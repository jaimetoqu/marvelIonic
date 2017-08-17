import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ComicService {

    constructor(private http:Http) {
        this.http = http;
    }
    //marvel 'apikey=5550f8ab35427d6ae85c1a6d28fab74d'
    //https://gateway.marvel.com/v1/public/comics
    //http://api.giphy.com/v1/gifs/search?q=funny+cat&
    baseUrl = 'https://api.giphy.com/v1/gifs/search?q=funny+cat&';

    getComics() {
        return this.http.get(this.baseUrl , {params: {apikey: '4d303e78dc49464283f7c2ebde0061d7'}}).map(res => res.json());
    }
}