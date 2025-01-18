import { Component } from '@angular/core';
import { LanguageService } from '../language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    
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
