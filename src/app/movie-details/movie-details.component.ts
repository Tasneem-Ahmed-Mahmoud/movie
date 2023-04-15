import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  implements OnInit{
    imagePrifex:string="https://image.tmdb.org/t/p/w500/";
    movie:any={}
constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService){}

ngOnInit(): void {
  this.getMovie()
}




// getMovie(){
// let id=this.activatedRoute.snapshot.params['id']
// let movies;
// this.movieService.getMovies('movie').subscribe((res)=>{
//   movies= res.results
// this.movie = movies.find((mo:any) => mo.id == Number(id))
// console.log(this.movie)
//   })

// }


getMovie(){
  let id=this.activatedRoute.snapshot.params['id']

this.movieService.getMoviedetails(id).subscribe((res)=>{
  this.movie=res;
})

  }







  }










