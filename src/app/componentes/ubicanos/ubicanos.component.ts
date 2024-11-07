import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ubicanos',
  templateUrl: './ubicanos.component.html',
  styleUrl: './ubicanos.component.css'
})
export class UbicanosComponent {
formularioForm;
datos_formularios:any

constructor(private formBuilder: FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      mensaje: '',
      correo:'',
      telefono:'',
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
    this.formularioForm.reset()
  }

}