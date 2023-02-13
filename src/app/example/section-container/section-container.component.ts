import { Component, Input, OnInit ,Output,EventEmitter, EnvironmentInjector} from '@angular/core';
import { CommonModule } from '@angular/common';
import { createInput,InputContainerComponent,InputType } from '../input-container/input-container.component';
import { isNgTemplate } from '@angular/compiler';
export type SectionType = InputType[];

export function createSection(): SectionType{
  return [ createInput()];
}
@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [CommonModule, InputContainerComponent],
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit{
  @Input() data!: SectionType;
  @Input() no!: number;
  @Input() removeable: boolean = true;

  @Output() remove = new EventEmitter<void>();
  @Output() dataChanged = new EventEmitter<SectionType | null>();
  ngOnInit(): void {
    if(!this.data || !this.no){
      throw new Error('value an no properties must be speficied');
     }
  }

  removeChild(index:number): void {
    this.data.splice(index,1);
  }

  onRemove(): void {
    this.remove.emit();
    this.dataChanged.emit(null);
  }

  onAdd(): void {
    this.dataChanged.emit(this.data)
    this.data.push(createInput());
  }
  onChanged(): void {
    this.dataChanged.emit(this.data);
  }

  getResult(): number{
    return this.data.map((item) => item.value).reduce((carely,value) => carely + value,0);
  }
}
