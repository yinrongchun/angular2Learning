import { Component } from '@angular/core';
//import { Hero } from './hero';
@Component({
	selector: 'hero-list',
	template:`
	<input #newHero (keyup.enter)="addHero(newHero.value)"
	 (blur)="addHero(newHero.value); newHero.value=''">
	<button (click)="addHero(newHero.value)">add</button>
	<ul><li *ngFor="let hero of heroesa">{{hero}}</li></ul>
	`
//	template:`
//	<input #newHero (keyup.enter)="addHero(newHero.value)">
//	<button (click)="addHero(newHero.value)">add</button>
//	<ul><li *ngFor="let hero of heroesa">{{hero}}</li></ul>
//	`
})
export class heroListComponent{
	heroesa=["first","second","three"];
	addHero(newHeroes:string){
		if(newHeroes){
			this.heroesa.push(newHeroes);
		}
	}
}
