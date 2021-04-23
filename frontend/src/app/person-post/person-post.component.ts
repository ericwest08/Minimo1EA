import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './../services/person.service';
import { Person } from '../model/person';
@Component({
  selector: 'app-person-post',
  templateUrl: './person-post.component.html',
  styleUrls: ['./person-post.component.css']
})
export class PersonPostComponent implements OnInit {

  @Input()
  person: Person;

  personForm: FormGroup;
  isSubmitted = false;
  perNombre;
  personNombre;
  personFecha;
  personDNI;
  personTelefono;
  personFiebre;
  personTos;
  personDifrespiratoria;
  personMalestar;

  constructor(public personService: PersonService, private router: Router,
    private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.nullValidator]],
      fecha: [''],
      dni: [''],
      telefono: [''],
      fiebre: [''],
      tos: [''],
      difrespiratoria: [''],
      malestar: ['']

    });
  }

  get formControls() {
    return this.personForm.controls;
  }

  post() {
    this.isSubmitted = true;
    if (this.personForm.invalid) {
      return;
    }

    let post = {
      '_id': "", 
      'nombre': this.personForm.value.nombre,
      'fecha': this.personForm.value.fecha,
      'dni': this.personForm.value.dni,
      'telefono': this.personForm.value.telefono,
      'fiebre': this.personForm.value.fiebre,
      'tos': this.personForm.value.tos,
      'difrespiratoria': this.personForm.value.difrespiratoria,
      'malestar': this.personForm.value.malestar,
    };
    console.log("New: ");
    console.log(post);
    this.personService.postPerson(post).subscribe((ins: Person) => {
      //Return to Main Page
      this.router.navigateByUrl('/people');
    });


  }
}
