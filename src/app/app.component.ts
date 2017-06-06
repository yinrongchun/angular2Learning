import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Hello {{title}}</h1>
  	<h2>my favorite hero :{{myhero.name}}<h2>
  	<p>heros:</p>
  	<ul>
  		<li *ngFor="let hero of heroes">{{hero.name}}</li>
  	</ul>
  	<p *ngIf="heroes.length > 3">three heros length</p>
  `,
})
export class AppComponent  { 
	title = 'tour of heroes'; 
//	heroes=[
//		{name:'first'},
//		{name:'second'},
//		{name:'three'},
//		{name:'four'}
//	];
	heroes=[
		new Hero(1,'jack','多余的字符串参数但是必须','多余的字符串参数但是必须'),
		new Hero(2,'rouce','多余的字符串参数但是必须','多余的字符串参数但是必须'),
		new Hero(3,'alice','多余的字符串参数但是必须','多余的字符串参数但是必须'),
		new Hero(4,'amy','多余的字符串参数但是必须','多余的字符串参数但是必须')
		
	];
	myhero=this.heroes[0];
}
