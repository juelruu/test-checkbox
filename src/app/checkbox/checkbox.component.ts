import { ChangeDetectionStrategy, Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

  state$ = new BehaviorSubject<boolean>(false);

  @Input() set checked(value: boolean) {
    this.state$.next(value);
  }

  @Output() changeEvent = new EventEmitter<boolean>();

  constructor(private library: FaIconLibrary) {
    library.addIcons(fasCircle, farCircle);
  }

  public click(): void {
    this.state$.next(!this.state$.value);
    this.changeEvent.emit(this.state$.value);
  }
}
