import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    activeButton: string | null = null;

    constructor(private router: Router, private languageService: LanguageService) {}

    changeLanguage(lang: string) {
        this.languageService.changeLanguage(lang);
    }

    ngOnInit(): void {
        this.setActive('m-1');
    }

    setActive(buttonId: string): void {
        this.activeButton = buttonId;
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

    goToHome() {
        this.languageService.currentLanguage.subscribe(lang => {
            if (lang === 'jp') {
                this.router.navigate(['/home-jp']);
            } else {
                this.router.navigate(['/home']);
            }
        });
    }
}
