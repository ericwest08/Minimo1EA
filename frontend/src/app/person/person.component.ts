import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Person} from '../model/person';
import {PersonService} from '../services/person.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[] = [];

  constructor(public personService: PersonService, private router: Router) { 
  }

  ngOnInit(): void {
    this.personService.getPersons().subscribe( persons => {
      this.persons = persons;
      console.log("EO: " + persons.toString());
    });
  }

  add(){
    this.router.navigateByUrl('/people/post');
  }

}
