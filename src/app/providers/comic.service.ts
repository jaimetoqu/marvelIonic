import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ComicService {

    constructor(private http:Http) {
        this.http = http;
        //http://developer.marvel.com
        //+ '/v1/public/comics?title=' + title + '&apikey=5550f8ab35427d6ae85c1a6d28fab74d'
    }
    
    baseUrl = 'http://gateway.marvel.com';

    getComics() {
        return this.http.get(this.baseUrl + '/v1/public/comics', {params: {apikey: '5550f8ab35427d6ae85c1a6d28fab74d'}}).map(res => res.json());
    }
}