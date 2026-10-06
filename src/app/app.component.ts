import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  isDark: boolean = false;
  constructor() {
    this.isDark = document.body.classList.contains('dark');
  }
  toggleTheme(event: any) {
    const isChecked = event.detail.checked;
    document.body.classList.toggle('dark', isChecked);
    this.isDark = isChecked;
  }
}
