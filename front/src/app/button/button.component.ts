import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() idElement: string | undefined;
  @Input() typeElement: string | undefined;

  constructor(private http: HttpClient) { }

  delete() {
    this.http.delete(`http://localhost:3000/${this.typeElement}/${this.idElement}`).subscribe(() => console.log(`Delete successful`));
  }
}
