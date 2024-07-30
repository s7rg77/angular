import { Component } from '@angular/core';

@Component({

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
  
})

export class HeaderComponent {

  goHome() {

    window.location.href = '/';

  }

  goGit() {

    window.location.href = 'https://github.com/s7rg77/angular';

  }

  goDoc() {

    window.location.href = '/doc';

  }

}