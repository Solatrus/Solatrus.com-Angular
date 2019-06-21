import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'trackLength'
})
export class TrackLengthPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}

  transform(value: number, args?: any): string {
    let minutes = Math.floor(value / 60);
    let seconds = value % 60;

    return `${minutes}:${this.decimalPipe.transform(seconds, '2.0-0')}`
  }

}