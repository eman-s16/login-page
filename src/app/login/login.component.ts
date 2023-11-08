import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, Message } from 'primeng/api';

interface UserData {
  id?: string;
  password: string;
  username: string;
  email: string;
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class LoginComponent {
  username: any = "";
  password: any = "";



  // Mock user data for authentication
  userData: UserData[] = [
    {
      id: '1',
      username: 'salim',
      email: 'salim@example.com',
      name: 'salim',
      password: 'password1' 
    },
    {
      id: '2',
      username: 'eman',
      email: 'eman@example.com',
      name: 'Eman',
      password: 'pass'
    }
  ];

  constructor(private router: Router, private messageService: MessageService) { }
  submitted: boolean = false;
  msgs: Message[] = [];
  ;
  onSubmit() {
    this.submitted = true;

    if (this.username.trim() === '' || this.password.trim() === '') {
      // Show validation error messages
      this.msgs = [];

      this.msgs.push({ severity: 'warn', summary: 'Validation Error', detail: 'Username and password are required.' });
      return;
    }

    const user = this.userData.find((u) => u.username === this.username && u.password === this.password);

    if (user) {
      // Successful login, navigate to the next page
      this.router.navigate(['/home']);
    } else {
      // Failed login, show the error message
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Login Error', detail: 'Invalid username or password.' });
    }
  }


}
