import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {
  student = { firstName: '', lastName: '', age: null };
  greetingMessage = '';
  showGreeting = false;

  constructor() {
    this.setGreeting();
  }

  setGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) this.greetingMessage = 'Good Morning!';
    else if (hour < 18) this.greetingMessage = 'Good Afternoon!';
    else this.greetingMessage = 'Good Evening!';
    this.showGreeting = true;
  }

  onSubmit() {
    alert(`Registered: ${this.student.firstName} ${this.student.lastName}`);
  }
}
