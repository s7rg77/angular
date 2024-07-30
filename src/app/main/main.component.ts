import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DatosMusicales } from '../../assets/dataType';

import mockDatosMusicales from '../../assets/mock';

@Component({

  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})

export class MainComponent {

  miForm: FormGroup;
  enviado: boolean = false;
  datosMusicales: DatosMusicales[] = mockDatosMusicales;
  songs: any[] = [];

  constructor(private fb: FormBuilder) {

    this.miForm = this.fb.group({
      cancion: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z ]*')], updateOn: 'change' }],
      autor: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z ]*')], updateOn: 'change' }],
      formato: ['', Validators.required]
    });
    
  }

  comprobarcancion() {

    return this.miForm.get('cancion')?.invalid && this.miForm.get('cancion')?.touched;

  }

  comprobarautor() {

    return this.miForm.get('autor')?.invalid && this.miForm.get('autor')?.touched;

  }

  comprobarformato() {

    return this.miForm.get('formato')?.invalid && this.miForm.get('formato')?.touched;

  }

  enviar() {

    if (this.miForm.valid) {
      const song = {
        cancion: this.miForm.value.cancion,
        autor: this.miForm.value.autor,
        formato: this.miForm.value.formato
      };
      this.songs.push(song);
      this.enviado = true;
      this.miForm.reset();
    }

  }

}