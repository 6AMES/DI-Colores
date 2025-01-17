import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer-jp',
  imports: [],
  templateUrl: './footer-jp.component.html',
  styleUrl: './footer-jp.component.css'
})
export class FooterJpComponent {
    
    constructor(private languageService: LanguageService) {}
  
    changeLanguage(lang: string) {
        this.languageService.changeLanguage(lang);
    }
}
