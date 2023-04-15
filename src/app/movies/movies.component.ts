import { Component,OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent  implements OnInit{
movies:any[]=[];
error:string=""
num:number=1;
imagePrifex:string="https://image.tmdb.org/t/p/w500/";
constructor(private _MovieService:MovieService){

  this.displayMovies(1)

}


ngOnInit(): void {


}

displayMovies(num:number){
  this._MovieService.getMovices(num).subscribe((response)=>{
    this.movies=response.results;
    console.log(this.movies)
      },
      (error)=>{ this.error=error.message; console.log(error)},

    ()=>{console.log("complete")}

      )
}



getTrendingMovies(){
  return this._MovieService.getMovies("movie").subscribe((res)=>{

  })
}









}
