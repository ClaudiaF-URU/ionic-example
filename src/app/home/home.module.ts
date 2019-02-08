import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewInputComponentComponent } from '../new-input-component/new-input-component.component';

import { HomePage } from './home.page';
import { OutputComponent } from '../output/output.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, NewInputComponentComponent, OutputComponent]
})
export class HomePageModule { }
