import { Component, Input, OnInit } from '@angular/core';
import { customer } from '../../../customer.model';

@Component({
  selector: 'app-add-edit-display-customer',
  templateUrl: './add-edit-display-customer.component.html',
  styleUrls: ['./add-edit-display-customer.component.css']
})
export class AddEditDisplayCustomerComponent {
  @Input() customer: customer = new customer();
  @Input() disabled;
}
