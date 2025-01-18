import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderJpComponent } from './header-jp/header-jp.component';
import { FooterJpComponent } from './footer-jp/footer-jp.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from './language.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,
            HeaderComponent,
            HeaderJpComponent,
            FooterComponent,
            FooterJpComponent,
            RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'DI-Colores';

  language: string = 'es'; // Idioma predeterminado

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLanguage.subscribe(lang => {
      this.language = lang;
    });
  }
}
