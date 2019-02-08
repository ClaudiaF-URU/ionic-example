import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  name: string = '';
  numbers: Array<number> = [];

  addNum(num) {
    if (num)
      this.numbers.push(num)
  }

  goTo(num) {
    this.router.navigate(['/info', num])
  }
}
