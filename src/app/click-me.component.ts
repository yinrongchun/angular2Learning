import { Component } from '@angular/core';
//$event获取用户输入的信息 或者 通过模板引用变量(#号) 获取
@Component({
	selector: 'click-me',
	template:`
		<button (click)="onClickMe()">click me!</button>
		{{clickMessage}}
		<input (keyup)= "onKey($event)">
		<p>{{values}}</p>
		<input #box (keyup)="0">
		<p>{{box.value}}</p>
		<input #box2 (keyup.enter)="Updata(box2.value)" (blur)="Updata(box2.value)">
		<p>{{value}}</p>
		`
})
export class ClickMeComponent {
	clickMessage = '';
	onClickMe(){
		this.clickMessage= 'you are my hero!';
	};
	values= '';
	onKey(event:any){
		this.values +=event.target.value+' | ';
	}
	value='';
	Updata(value:string){
		this.value=value;
	}
}
