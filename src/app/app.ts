import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject as injectAnalytics } from '@vercel/analytics';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('infinite-x-v261');

  constructor() {
    // Initialize Vercel Analytics
    // Browser-only check to prevent SSR errors
    if (typeof window !== 'undefined') {
      injectAnalytics();
    }
  }
}
