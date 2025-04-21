import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({

  selector: 'app-student-registration',

  templateUrl: './student-registration.component.html',

  styleUrls: ['./student-registration.component.css']

})

export class StudentRegistrationComponent implements OnInit {

  student = {

	firstName: '',

	lastName: '',

	age: null

  };

  showGreeting = false;

  greetingMessage = '';

  students: any[] = [];


  constructor(private http: HttpClient) {}


  ngOnInit(): void {

	this.getGreetingMessage();

	this.fetchStudents();

  }


  onSubmit() {

	alert(`Student Registered: ${this.student.firstName} ${this.student.lastName}`);

  }


  // Function to display greeting message based on time

  getGreetingMessage() {

	const hour = new Date().getHours();

	if (hour < 12) {

  	this.greetingMessage = 'Good Morning!';

	} else if (hour < 18) {

  	this.greetingMessage = 'Good Afternoon!';

	} else {

  	this.greetingMessage = 'Good Evening!';

	}

	this.showGreeting = true;

  }


  // Simulating an AJAX request (fetching data)

  fetchStudents() {

	this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {

  	this.students = data.slice(0, 5); // Fetching first 5 users

	});

  }

}