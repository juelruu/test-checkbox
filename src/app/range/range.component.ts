import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RangeComponent implements OnInit {

  /**
   * Checkbox array
   * 4 - count of checkboxes
   */
  public healthRange$ = new BehaviorSubject<Array<boolean>>(new Array(4).fill(false));

  /**
   * Damaged value
   */
  @Input() set value(count: number) {
    this.healthRange$.next(RangeComponent.createTrueRange(count));
  }

  /**
   * Return count of true elements in array
   */
  @Output() changeEvent = new EventEmitter<number>();

  /**
   * Create boolean range with 'true' value from 0 to end
   * @param end - end index
   * @private
   */
  private static createTrueRange(end: number): Array<boolean> {
    const dmg = new Array(4).fill(false);
    for (let i = 0; i < end; i++) {
      dmg[i] = true;
    }
    return dmg;
  }

  constructor() { }

  ngOnInit(): void {
    this.healthRange$.subscribe(console.log);
  }

  public test(index: number, x: any): void {
    let newRange = [];
    if (x) {
      newRange = RangeComponent.createTrueRange(index + 1);
    } else {
      newRange = RangeComponent.createTrueRange(index);
    }
    this.healthRange$.next(newRange);
  }

  public log(index: number, value: any): any {
    return value;
  }

}
