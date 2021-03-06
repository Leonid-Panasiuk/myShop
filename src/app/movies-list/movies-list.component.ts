import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  modeView = 'grid';
  public movies: Movie[] = [
    
    {
      title: "Avangers",
      description: "",
      img: "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_63830_1920x1080.jpg"
    },
    {
      title: "Spiderman",
      description: "",
      img: "https://i.pinimg.com/originals/2b/79/dc/2b79dca67e85e555f6a544242eeb0aa0.jpg"
    },
    {
      title: "Deadpool",
      description: "",
      img: "https://wallpaperplay.com/walls/full/e/0/2/145131.jpg"
    }
  ];
  public cart : Movie[] = [];
  constructor() { }
  
  ngOnInit() {
  }
  addToCart(movie:Movie) {
    this.cart.push(movie);
  }
  removeFromCart(i:number) {
    this.cart.splice(i, 1);
  }
  onChangeView(mode) {
    this.modeView = mode;
  }
}


class Movie {
  public title: string;
  public description: string;
  public img : string;
}



