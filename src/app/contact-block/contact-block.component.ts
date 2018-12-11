import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-block',
  templateUrl: './contact-block.component.html',
  styleUrls: ['./contact-block.component.css']
})
export class ContactBlockComponent implements OnInit {

  formContact: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formContact = formBuilder.group({
      'userName': ['', [Validators.required]],
      'userEmail': ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}')]],
      'userMessage': ['', [Validators.required]]

    });
  }
  submit(){
    console.log(this.formContact);
  }
  ngOnInit() {
  }

}
