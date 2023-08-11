import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myForm: FormGroup
  formValid: boolean = false
  ErrorStyle = {
    color: '#ffffff'
  }

  constructor() {
    this.myForm = new FormGroup({
      username: new FormControl('', [
        Validators.required, Validators.minLength(4), Validators.maxLength(20)
      ]),
      email: new FormControl('', [Validators.email, Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }
  
  ngOnInit() {
    this.myForm.statusChanges.subscribe((res) => {
      this.formValid = res === 'INVALID' ? false : true
    })
    
  }
  handleSubmit() {
    console.log(this.myForm);
  }

}
