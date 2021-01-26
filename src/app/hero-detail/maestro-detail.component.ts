import { Component, OnInit, Input } from '@angular/core';
import { Datos } from '../Base';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './maestro-detail.component.html',
  styleUrls: ['./maestro-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Datos | null = null;

  constructor() { }

  ngOnInit() {
  }

}
