import { Component } from '@angular/core';
import { LanguageService } from '../language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-jp',
  imports: [],
  templateUrl: './footer-jp.component.html',
  styleUrl: './footer-jp.component.css'
})
export class FooterJpComponent {
    
    constructor(private router: Router, private languageService: LanguageService) {}
  
    changeLanguage(lang: string) {
        this.languageService.changeLanguage(lang);
    }

    goToLogin() {
        this.languageService.currentLanguage.subscribe(lang => {
            if (lang === 'jp') {
                this.router.navigate(['/login-jp']);
            } else {
                this.router.navigate(['/login']);
            }
        });
    }
}
