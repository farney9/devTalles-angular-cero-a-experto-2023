import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {

  age = 45;
  name = 'ironman';

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(){
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    this.name = 'Thor'
  }

  changeAge() {
    this.age = 40
  }

  resetValues() {
    this.name = 'ironman';
    this.age = 45;
  }

}
