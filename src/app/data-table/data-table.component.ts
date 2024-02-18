import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.sass',
})
export class DataTableComponent {
  @ContentChild('tmpl') tmplRef: TemplateRef<any>;
  @Input() columns!: { title: string; key: string }[];
  @Input() datas: any[];
}
