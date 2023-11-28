import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  // public value ='name';
  userData : any  = {
    username:'',
    pwd:'',
    phone:'',
    dob:'',
    emailid:'',
    address:''
   
    
  };
  submitted =false;
  
  onSubmit(form: any){
  
    console.log('formdata',this.userData);
  
    alert('formdata submitted');
    form.reset();
    
    
  }
}
