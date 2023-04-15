import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService  {

  constructor(private _HttpClient:HttpClient) { }


   getMovices(num:number):Observable<any> {
   return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=f1aca93e54807386df3f6972a5c33b50&page=${num}`)

    }

  // https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50


  //https://api.themoviedb.org/3/movie/popular?api_key=f1aca93e54807386df3f6972a5c33b50&page=1


  getMovies(mediaType:string):Observable<any> {
  return  this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
    }


    // getMovieDetails(id:string):Observable<any> {
    //   return  this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
    //     }




getMoviedetails(id:any):Observable<any>{

  return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=afed2bdc759c185496dcd94a60b71d77&language=en-US`)

 }


}
