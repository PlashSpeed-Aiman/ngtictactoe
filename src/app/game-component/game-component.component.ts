import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import {Game} from '../model/game'
import {Player} from '../model/player'
import {Symbols} from '../model/sym_const'
import { PlayerStatsComponent } from '../player-stats/player-stats.component';
@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent implements OnInit {

  private _gameStarted = false
  private _board : string[] = []
  private _game  : Game     
  private _players : Player[] = []
  private _dialog : MatDialog
  constructor(dialog : MatDialog) { 
    this._game  = new Game(this._players)
    this._dialog  = dialog
  }

  ngOnInit(): void {
  }
  clicked = false;
  public CurrentTurn : string = ""
  public Board : string[] = []

  public getBoard():string[]{
    return this._board
  }
  
  public getPlayers(){
    return this._players
  }
  public setBoard(board:string[]){
    //this was supposed to be MVVM with Observer Pattern
    //But it allows for better decoupling, I suppose
    this._board = board
    this._game.setBoard(this._board)
  }
  public updateCurrentTurn(){
    this.CurrentTurn = this._game.getCurrentPlayerTurn()
  }

  public onSelect(index:number){
      //will update with Command Pattern 
      this._game.markBoard(index)
      this.updateCurrentTurn()

  }
  public startGame(){
    // let testDialog = this._dialog.open(InfoDialogComponent)
    // testDialog.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
     
    // });
    this._players.push(new Player("Player 1",Symbols.Circle))
    let player2 : Player = new Player("Player 2",Symbols.Cross)
    this._players.push(player2)
    this._game  = new Game(this._players)
    this._board = this._game.getBoard()
    this.Board  = this._board
    this.updateCurrentTurn()
  }
}
