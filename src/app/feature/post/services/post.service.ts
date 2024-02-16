import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({providedIn: 'root'})
export class PostService {
    public read(){
        return axios.get('https://run.mocky.io/v3/ead4571b-f796-4f95-8007-1ca72c8ed1c2')
        .then(result => result.data)
        .catch(error => error)
    }
}