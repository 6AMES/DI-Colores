import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderJpComponent } from './header-jp/header-jp.component';
import { MainJpComponent } from './main-jp/main-jp.component';
import { FooterJpComponent } from './footer-jp/footer-jp.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule,
            AppComponent, 
            HeaderComponent,
            HeaderJpComponent, 
            MainComponent, 
            MainJpComponent,
            FooterComponent,
            FooterJpComponent],
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
