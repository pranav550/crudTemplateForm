import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { FormsModule } from '@angular/forms';
const routes:Routes=[
  {path:"", component:ContactComponent}
]
@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
