import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { DataTableComponent } from './data-table/data-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    FormsModule,
    DataTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  constructor(public router: Router, public route: ActivatedRoute) {}
  goBack() {
    this.router.navigate(['..']);
  }
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  @ViewChild('ctrl') ctrl: ElementRef;
  title = 'a1';
  setValue() {
    console.log(this.ctrl.nativeElement);
    this.title = 'a2';
  }

  @ViewChild('inputRef') inputElement: ElementRef;
  clearInput() {
    this.inputElement.nativeElement.value = '';
  }
}
