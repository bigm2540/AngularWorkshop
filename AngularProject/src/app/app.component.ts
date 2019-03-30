import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bigbunny';
  name: string = "BigBunny";
  score: number = 100;
  student :any={
    studentId:"5821600120",
    name:"Anusorn Natip",
    weight:57,
    height:175
  }
  studentList = [
    {
      studentId: "5821600120",
      name: "Anusorn Natip",
      weight: 57,
      height: 175
    },
    {
      studentId: "545786945",
      name: "Bam Dokthong",
      weight: 787,
      height: 175
    },
    {
      studentId: "588764787",
      name: "Anusorn Narak",
      weight: 57,
      height: 4547
    },
    {
      studentId: "587545680",
      name: "gfds",
      weight: 5,
      height: 14
    }
  ]
  constructor() {
    // let studentList;
    // let student ;
    this.student.bmi = (this.student.weight/((this.student.weight/100)*(this.student.height/100))).toFixed(2);
console.log(this.student);

this.studentList.map((Object , index)=>{
  let obj :any=Object;
  obj.bmi = (Object.weight/((Object.height/100)*(Object.weight/100))).toFixed(2);
  return obj;
})
console.log(this.studentList);

  


  }
}
