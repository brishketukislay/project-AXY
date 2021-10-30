import {Component, Inject, OnInit,  Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class DialogBoxComponent implements OnInit {
    @Input() closable = true;
    @Input()
  visible!: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(){}

  ngOnInit(): void {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}