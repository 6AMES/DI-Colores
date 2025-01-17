import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-header-jp',
    imports: [CommonModule, RouterModule],
    templateUrl: './header-jp.component.html',
    styleUrls: ['./header-jp.component.css']
})
export class HeaderJpComponent implements OnInit {
    activeButton: string | null = null;

    constructor(private languageService: LanguageService) {}

    changeLanguage(lang: string) {
        this.languageService.changeLanguage(lang);
    }

    ngOnInit(): void {
        this.setActive('m-1');
    }

    setActive(buttonId: string): void {
        this.activeButton = buttonId;
    }
}
