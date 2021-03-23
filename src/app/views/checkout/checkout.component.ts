import { User } from './../user';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  user = {
    firstname: 'John',
    lastname: 'Doe',
    username: 'john.doe',
    email: 'johndoe@email.com',
    address: '123'
  }
  constructor() {}

  ngOnInit(): void {}

  onCheckout(f: NgForm):void {
    console.log(f);
  }
}
