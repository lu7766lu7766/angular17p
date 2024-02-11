import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass',
})
export class AboutComponent {
  constructor(public store: StoreService) {}
}
