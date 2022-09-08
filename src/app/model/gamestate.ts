


export class GameState{
    private CurrentState : string[] = ["","","","","","","","",""]
    private Turn         : any;
    private isGameWon    : boolean = false;

    constructor(){

    }
    public updateState(state: string[],turn:number ){
        this.Turn = turn
        this.CurrentState = state;
        console.log(this.CurrentState)
    }
    public saveState(){
        //save into a JSON file
    }
    public setGameWon(condition:boolean){
        this.isGameWon  = true
    }
    public resetGameState(){
        this.CurrentState = ["","","","","","","","",""]
    }
}