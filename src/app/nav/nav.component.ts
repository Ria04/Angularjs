import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {
  term:string;

  movies = [
    {
	moviename: 'This the Season for Love',
    },
    {
  moviename: '17',
    },
    {
  moviename: '1 Night',
    },
       {
	moviename: '100 days',
    },
    {
  moviename: '1000 Days',
    },
    {
  moviename: 'Election',
    },
     {
	moviename: 'Hum aapke hai kon',
    },
    {
  moviename: '3 idiots',
    },
    {
  moviename: 'Asur',
    },
    {
	moviename: 'Don',
    },
    {
  moviename: 'Sean BeanBean series',
    },
    {
  moviename: 'war',
    },
    {
  moviename: 'agneepat',
    },
    {
	moviename: 'jab we met',
    },
    {
  moviename: 'hello mini',
    },
    {
  moviename: 'sacred games',
    },
       {
	moviename: '17 days',
    },
    {
  moviename: 'ishqbaaz',
    },
    {
  moviename: 'yeh javani nai deevani',
    },
     {
	moviename: 'hum saath saath hai',
    },
    {
  moviename: 'fanna',
    },
    {
  moviename: 'stranger things',
    },
    {
	moviename: 'Don 2',
    },
    {
  moviename: 'mr bean',
    },
    {
  moviename: 'chota bheem',
    },
    {
  moviename: 'tom and jerry',
    }
  ];
  constructor() { 

    
  }
 
  ngOnInit(): void {
  }
  

  
  }

