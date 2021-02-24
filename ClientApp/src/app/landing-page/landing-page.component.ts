import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  registerform: FormGroup;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.validation();
  }

  validation(){

    this.registerform = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])]
      //name: [null, Validators.compose([Validators.required])]
    })
  }

}
