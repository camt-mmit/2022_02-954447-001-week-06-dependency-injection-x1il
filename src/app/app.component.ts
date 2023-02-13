import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { createSection, SectionContainerComponent ,SectionType} from './example/section-container/section-container.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,SectionContainerComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-my3'
}
