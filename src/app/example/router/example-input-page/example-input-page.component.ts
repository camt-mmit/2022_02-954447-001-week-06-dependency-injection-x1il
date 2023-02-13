import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionType ,createSection, SectionContainerComponent} from '../../section-container/section-container.component';
import { ExampleDataService } from '../../example-data.service';
@Component({
  selector: 'app-example-input-page',
  standalone: true,
  imports: [CommonModule,SectionContainerComponent],
  templateUrl: './example-input-page.component.html',
  styleUrls: ['./example-input-page.component.scss']
})
export class ExampleInputPageComponent {
  title = 'my-ng3';
  data!: SectionType[]

  constructor(private dataService: ExampleDataService){
    this.data = this.dataService.load();
  }
  private storeData(): void{
    this.dataService.save(this.data);
  }
  onAdd(): void{
    this.data.push(createSection());
    this.storeData();
  }

  onChanged(): void{
    this.storeData();
  }

  removeChild(index:number):void {
    this.data.splice(index,1);
    this.data.splice(index,1);
  }
}
