import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nameCtrl = new FormControl('', [])


  getName(event: Event) {
    event.preventDefault();
    console.log(this.nameCtrl.value)
    if(this.nameCtrl.value == 'juan' || this.nameCtrl.value == 'juaN'){

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Hola Juan Bienvenido',
        showConfirmButton: false,
        timer: 1500
      })
      
    }else if(this.nameCtrl.value === ''){

      Swal.fire(
        'Olvidaste escribir tu nombre?',
        '¡Escribelo asi y solo asi podras iniciar sesion!',
        'question'
      )
      
    }else{

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Usuario Incorrecto',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  animal1: string = ''
  animal2: string = ''
  animal3: string = ''

  constructor() { 
  }

  ngOnInit(): void {
  }

  gato(){

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Muy bien',
      showConfirmButton: false,
      timer: 1000
    })

    this.animal1 = 'Gato';

  }

  perro(){

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Muy bien',
      showConfirmButton: false,
      timer: 1000
    })

    this.animal2 = 'Perro';
  }

  caballo(){

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Muy bien',
      showConfirmButton: false,
      timer: 1000
    })

    this.animal3 = 'Caballo';
  }

  error(){

    Swal.fire({
      icon: 'error',
      title: 'Oops...Animal Incorrecto',
      text: 'Sigue intentando',
    })
  }

}
