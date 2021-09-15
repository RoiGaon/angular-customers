import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'table-icons',
  template: `
    <span
      class="glyphicon glyphicon glyphicon-user
    "
      (click)="display.next()"
    >
    </span>
    <span class="glyphicon glyphicon-pencil" (click)="edit.next()"></span>
    <span class="glyphicon glyphicon-remove" (click)="remove.next()"> </span>
  `,
  styles: [
    `
      span {
        cursor: pointer;
      }
    `
  ]
})
export class CustomersTableIcons {
  @Output() edit: EventEmitter<void> = new EventEmitter();
  @Output() display: EventEmitter<void> = new EventEmitter();
  @Output() remove: EventEmitter<void> = new EventEmitter();
}
