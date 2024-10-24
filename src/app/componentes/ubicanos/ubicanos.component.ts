import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ubicanos',
  templateUrl: './ubicanos.component.html',
  styleUrl: './ubicanos.component.css'
})
export class UbicanosComponent {
  formularioForm;

  constructor(private formBuilder: FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      mensaje: ''
    });
  }


  ngOnInit() {
    console.log("Hola")
  }

  enviarDatos(){
    let datos_formularios = this.formularioForm.value;
    console.log(this.formularioForm.value) 
  }
}
