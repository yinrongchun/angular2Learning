import { Component } from '@angular/core';
import { Hero } from './Hero';
@Component({
	selector:"form-style",
	template:`
		<input>
		`
//	templateUrl:'./form-style.component.html'
})
export class FormComponent {
	powers=["Really Smart",'Super Flexible','Super Hot','Weather Changer'];
	model=new Hero(18,'Dr IQ',this.powers[0],'Chuck Overstreet');
	submitted=false;
	onSubmit(){
		this.submitted=true;
	}
	//TODO: Remove this when we are done
	//diagnostic属性用于返回这个模型的JSON形式,用于调试,最后会清楚
	get diagnostic(){return JSON.stringify(this.model);}
}
