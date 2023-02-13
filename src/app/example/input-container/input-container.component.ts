import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InputType = {value:number};
export function createInput(): InputType{
  return { value: 0}
}
@Component({
  selector: 'app-input-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss']
})
export class InputContainerComponent implements OnInit{
  @Input()  no!: number;
  @Input()  data!: InputType;
  @Input() removeable: boolean = true;

  @Output() remove = new EventEmitter<void>();
  @Output() dataChanged = new EventEmitter<InputType | null>();


  protected readonly id = Math.floor(Math.random() * 6);
  ngOnInit(): void {
   if(!this.data || !this.no){
    throw new Error('value an no properties must be speficied');
   }
  }

  onChange(value:number): void {
    this.data.value = value;
    this.dataChanged.emit(this.data);
  }

  onRemove(): void {
    this.remove.emit();
    this.dataChanged.emit(null);
  }
}
