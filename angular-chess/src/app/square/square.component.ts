import { Component, OnInit, Input } from '@angular/core';
import { Square } from '../model/square';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Piece } from '../model/pieces/piece';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() public square: Square;
  private temp: Piece;

  constructor() {}

  ngOnInit() {}

  onDrop(event: CdkDragDrop<Square>) {
    if (event.isPointerOverContainer) {
      const from: Square = event.previousContainer.data;
      const to: Square = event.container.data;
      if (event.previousContainer !== event.container) {
        to.piece = from.piece;
        from.piece = undefined;
      } else {
        to.piece = from.piece;
      }
    }
  }

  enteredDrop(event: CdkDragDrop<Square>) {
  }

  exitedDrop(event: CdkDragDrop<Square>) {
  }

  sortedDrop(event: CdkDragDrop<Square>) {
  }

}
