import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ClickMeComponent }  from './click-me.component';
import { heroListComponent }  from './hero-list.component';
import { FormComponent }  from './form-style.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,ClickMeComponent,heroListComponent,FormComponent ],
  bootstrap:    [ AppComponent,ClickMeComponent,heroListComponent,FormComponent ]
})
export class AppModule { }
