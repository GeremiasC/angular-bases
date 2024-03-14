import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = 'sukuna';
  public age : number = 55;


  get capitalizedName (): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name } - ${this.age} `
  }

  changeHero(): void {
    this.name = 'satoru';
  }


 changeAge(): void {
    this.age = 28;
 }

 resetForm(): void {
    this.name = 'sukuna';
    this.age = 55;
    document.querySelectorAll('h1')!.forEach ( element =>{
    element.innerHTML = '<h1> Arkeidsito </h1>'
    })
  }
}
