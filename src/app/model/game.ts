import {GameState} from "./gamestate"
import {Player}    from "./player"
import { Symbols } from "./sym_const";
//Game acts as a ViewModel
//will implement Observer Pattern for better decoupling
export class Game{
    private GameState : GameState;
    private CurrentTurn : number = 0;
    private TicTacToeBoard : string[] = ["#","#","#","#","#","#","#","#","#"]
    private _players       : Player[] = []
    private _isGameWon     : boolean = false
    private _isGameTie     : boolean = false
    constructor(players:Player[]){
        this._players  = players;
        this.GameState = new GameState();
    }

    private checkTurn() : number{
        if(this.CurrentTurn === 1){
            this.CurrentTurn = 1
            return this.CurrentTurn
        }
        this.CurrentTurn = 0
        return this.CurrentTurn
    }

    public getCurrentPlayerTurn(){
        return this._players[this.checkTurn()].Name
    }

    public markBoard(index:number){
        let currentPlayer = this._players[this.checkTurn()]
        let currentSymbol = currentPlayer.Symbol
        if(this._isGameWon !== true || this._isGameTie !== true){
            if(this.TicTacToeBoard[index] !== Symbols.Circle && this.TicTacToeBoard[index] !== Symbols.Cross )
                this.TicTacToeBoard[index]  = currentSymbol
            //deep copy array
            this.GameState.updateState([...this.TicTacToeBoard],this.CurrentTurn)
            console.log(this.TicTacToeBoard)
            if(this.checkRows(currentPlayer) || this.checkColumns(currentPlayer) || this.checkDiagonals(currentPlayer)){
                alert(`${currentPlayer.Name} wins!`)
                currentPlayer.WinCount++
                this._isGameWon= true
                return
            }
            else if(this.checkPosFilled()){
                alert(`Game is Tied`)
                return
            }
            this.CurrentTurn++
        }
    }
    public checkPosFilled():boolean{
        let gameTie = false
        if(this.TicTacToeBoard.includes("#")){
            gameTie =false
        }
        else
            gameTie = true
        return gameTie
    }

    public setBoard(board:string[]){
        this.TicTacToeBoard = board;
        this.GameState.updateState([...this.TicTacToeBoard],this.CurrentTurn)
        console.log(this.TicTacToeBoard)
    }

    public getBoard(){
        return this.TicTacToeBoard;
    }
    private checkWin(){
        var win_condition = false
        if(win_condition === false){
            // this.checkRows()
        }
    }
     
    private checkRows(player: Player){
        for (let i = 0; i < 7; i=i+3) {
            if(this.TicTacToeBoard[i]===player.Symbol)
                if(this.TicTacToeBoard[i] === this.TicTacToeBoard[i+1] && this.TicTacToeBoard[i] === this.TicTacToeBoard[i+2] ){
                    return true
                }
        }
        return false
    }
    private checkColumns(player: Player){
        for (let i = 0; i < 3; i++) {
            if(this.TicTacToeBoard[i]===player.Symbol)
                if(this.TicTacToeBoard[i] === this.TicTacToeBoard[i+3] && this.TicTacToeBoard[i] === this.TicTacToeBoard[i+6] ){
                    return true
                }
        }
        return false
    }
    private checkDiagonals(player: Player){
            if(this.TicTacToeBoard[0]===player.Symbol) {
                if(this.TicTacToeBoard[0] === this.TicTacToeBoard[4] && this.TicTacToeBoard[0] === this.TicTacToeBoard[8] ){
                    return true
                }}
            else if(this.TicTacToeBoard[2] === player.Symbol){
                if(this.TicTacToeBoard[2] === this.TicTacToeBoard[4] && this.TicTacToeBoard[2] === this.TicTacToeBoard[6] ){
                    return true
                }
            }
        return false
    }


}