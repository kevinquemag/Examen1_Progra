import { Component, OnInit } from '@angular/core';
import { Datos } from '../Base';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero: Datos | null = null;
  heroes = HEROES;

  constructor () { }

  ngOnInit() {
  }

  onSelect(hero: Datos): void {
    this.selectedHero = hero;
  }


}
