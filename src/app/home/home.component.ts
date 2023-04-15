import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  movies:any[]=[];
tv:any[]=[];
people:any[]=[];
imagePrifex:string="https://image.tmdb.org/t/p/w500/";

constructor(private _MovieService:MovieService){}




ngOnInit(): void {

 this.getTrendingMovies()
 this.  getTrendingpeople();
 this.getTrendingTv()

}

getTrendingMovies(){
this._MovieService.getMovies('movie').subscribe((res)=>{
  this.movies= res.results
  })
}



getTrendingTv(){
  this._MovieService.getMovies('tv').subscribe((res)=>{
    this.tv= res.results.slice(0,10)

    })
  }



  getTrendingpeople(){
    this._MovieService.getMovies('person').subscribe((res)=>{
      this.people= res.results.slice(5,15)
      console.log(res)
      })
    }
}
