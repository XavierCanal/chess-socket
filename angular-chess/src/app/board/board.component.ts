import { Component, OnInit } from '@angular/core';
import { Board } from '../model/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private _board: Board;

  constructor() {
    this._board = new Board();
   }

  ngOnInit() {

  }

  get board(): Board {
    return this._board;
  }

}
