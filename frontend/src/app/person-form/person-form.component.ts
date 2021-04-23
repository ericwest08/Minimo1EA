import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './../services/person.service';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

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
    this.perNombre = this.route.snapshot.paramMap.get('nombre');
    this.personService.getPerson(this.perNombre).subscribe(ins => {
      this.personNombre = ins.nombre;
      this.personFecha = ins.fecha;
      this.personDNI = ins.dni;
      this.personTelefono = ins.telefono;
      this.personFiebre = ins.fiebre;
      this.personTos = ins.tos;
      this.personDifrespiratoria = ins.difrespiratoria;
      this.personMalestar = ins.malestar;
    })
    this.personForm = this.formBuilder.group({
      nombre: [this.personNombre, [Validators.required, Validators.nullValidator]],
      fecha: [this.personFecha],
      dni: [this.personDNI],
      telefono: [this.personTelefono],
      fiebre: [this.personFiebre],
      tos: [this.personTos],
      difrespiratoria: [this.personDifrespiratoria],
      malestar: [this.personMalestar]      

    });
  }

  get formControls() {
    return this.personForm.controls;
  }



}
