import { Component,Input, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  @Input()
  person: Person;

  @Input()
  index: number;

  constructor(public personService: PersonService, private router: Router) { }

  ngOnInit(): void {
  }

  deletePerson(nombre: string): void {
    this.personService.deletePerson(nombre).subscribe((data: any) => {
      console.log('Pepe ', data);
      if (data.ok == 1) {
        this.router.navigateByUrl('..');
      }
      else {
        console.log(data);
      }
    });

  }

}
