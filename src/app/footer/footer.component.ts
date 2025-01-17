import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    
    constructor(private languageService: LanguageService) {}
  
    changeLanguage(lang: string) {
        this.languageService.changeLanguage(lang);
    }
}
