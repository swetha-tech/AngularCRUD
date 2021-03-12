import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../student';
import { Message } from '../message';
@Component({
 selector: 'app-student-create',
 templateUrl: './student-create.component.html',
 styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
 student : Student = new Student();
 message : Message = new Message();
 constructor(private service:StudentService,private router:Router) {
}
 ngOnInit(): void {
 }
 createStudent(){
 this.service.createStudent(this.student).subscribe(data=>{
 this.message=data;
 console.log(data);
 });
 this.student=new Student();
 }
}
