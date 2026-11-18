import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
