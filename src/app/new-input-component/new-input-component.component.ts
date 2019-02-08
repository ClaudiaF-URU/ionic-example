import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-input-component',
  templateUrl: './new-input-component.component.html',
  styleUrls: ['./new-input-component.component.scss']
})
export class NewInputComponentComponent implements OnInit {

  @Input() fromParent: string;

  constructor() { }

  ngOnInit() {
  }

}
