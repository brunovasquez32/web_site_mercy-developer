import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
formularioForm;
datos_formularios:any

constructor(private formBuilder: FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      mensaje: ''
    });
  }



  ngOnInit(){
    console.log('Hola programa principal');
    console.log('A continuación se mostrará datos del formulario');
    console.log(this.datos_formularios)
  }

  enviarDatos(){
    console.log('Ingresamos a la función del botón')
    this.datos_formularios = this.formularioForm.value;
    console.log(this.datos_formularios);
  }

}