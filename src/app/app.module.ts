import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentAllComponent } from './student-all/student-all.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

@NgModule({
 declarations: [
 AppComponent,
 StudentAllComponent,
 StudentCreateComponent,
 StudentEditComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
FormsModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }