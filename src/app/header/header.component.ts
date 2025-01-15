import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    activeButton: string | null = null;

    constructor() {}

    ngOnInit(): void {
        this.setActive('m-1');
    }

    setActive(buttonId: string): void {
        this.activeButton = buttonId;
    }
}
