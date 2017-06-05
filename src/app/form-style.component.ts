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
	get diagnostic(){return JSON.stringify(this.model);}
}
