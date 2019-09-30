import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   user ={}
   userData={}
   userArray=[];
   emailValue:any;
   passValue:any;
  constructor() { }

  ngOnInit() {
  }

  loginForm(data, form){
    if(data){
     this.userData={
       email: data.email, 
       password: data.password
     }
     this.userArray.push(this.userData)
     console.log(this.userArray)
     form.reset()
    }

  }

  editForm(id){
    this.emailValue = this.userArray[id].email
    this.passValue = this.userArray[id].password
  }

  userDelete(id){
     this.userArray.splice(id,1)
    
  }


  updateForm(data, form){
    console.log(form.form.value)
    this.userArray[data].email=form.form.value.email
    this.userArray[data].password=form.form.value.password
  }

  onSubmit(){
    // if (this.form.valid) {
    //   console.log("Form Submitted!");
    //   this.form.reset();
    // }
  }

}
