import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  public movies: Movie[] = [
    {
      title: "Avangers",
      description: "",
      img: "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_63830_1920x1080.jpg"
    },
    {
      title: "Spiderman",
      description: "",
      img: "https://www.wallpapermaiden.com/wallpaper/19961/download/1920x1080/avengers-infinity-war-spider-man.jpg"
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
}


class Movie {
  public title: string;
  public description: string;
  public img : string;
}



