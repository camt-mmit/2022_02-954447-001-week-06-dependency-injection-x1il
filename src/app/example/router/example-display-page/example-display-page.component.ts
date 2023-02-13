import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDataService } from '../../example-data.service';
import { SectionContainerComponent, SectionType } from '../../section-container/section-container.component';
import { retry } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-example-display-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './example-display-page.component.html',
  styleUrls: ['./example-display-page.component.scss']
})
export class ExampleDisplayPageComponent {
  data: SectionType[];
  constructor(private dataService: ExampleDataService){
    this.data = this.dataService.load();
  }

  getResult(section: SectionType):number{
    return section.map((item) => item.value).reduce((carely,value) => carely + value,0);
  }
}
