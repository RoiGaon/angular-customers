import { Component} from '@angular/core';
import { customer } from '../../customer.model';
import { DisplayModesEnum } from '../customer-page/display-modes.enum';
import { CustomersService } from '../customer-page/customers.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent {
  constructor(private service: CustomersService) {
    service.getCustomers(data => {
      this.customers = data;
    });
  }

  displayMode: DisplayModesEnum = DisplayModesEnum.table;
  DisplayModes = DisplayModesEnum;
  customers: customer[];
  currentCustomer: customer;
  searchFirst: string;

  filterCustomer(customer) {
    return (
      NotMatch(this.searchFirst, customer.first)
    );

    function NotMatch(
      textFromFilerTextBox: string,
      dataFromCustomerObject: string
    ) {
      return (
        textFromFilerTextBox &&
        dataFromCustomerObject.indexOf(textFromFilerTextBox) == -1
      );
    }
  }
}
