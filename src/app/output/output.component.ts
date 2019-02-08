import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() fromChild = new EventEmitter<number>();
  num: number;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.fromChild.emit(this.num);
    this.num = null
  }

}
