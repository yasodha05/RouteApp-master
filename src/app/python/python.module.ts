import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import { PythonComponent } from './python/python.component';

export const routes:Routes = [
  {
    path:'python', component:PythonComponent,
    children:
      [
        {path:'register', component:RegisterComponent},
        {path:'search', component:SearchComponent}
      ]
  }
];

@NgModule({
  imports: [
    CommonModule , RouterModule.forChild(routes)
  ],
  exports:[
    SearchComponent, RegisterComponent, PythonComponent
  ],
  declarations: [SearchComponent, RegisterComponent, PythonComponent]
})
export class PythonModule { }
