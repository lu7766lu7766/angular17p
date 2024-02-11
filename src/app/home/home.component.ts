import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  constructor(public store: StoreService) {}
}
