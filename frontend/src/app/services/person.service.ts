import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Person} from '../model/person';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }


getPersons() {
  return this.http.get<Person[]>(environment.apiURL + '/people/all');
}

getPerson(nombre: String){
  return this.http.get<Person>(environment.apiURL + '/people/' + nombre);
}

postPerson(person: Person)
{
  return this.http.post<Person>(environment.apiURL + '/people/post' , person);
}

deletePerson(nombre: String){
  return this.http.delete(environment.apiURL + '/people/delete/' + nombre);
}

}


