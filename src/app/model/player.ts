import { Symbols } from "./sym_const";

export interface IPlayer{
    Name          : string;
    isCurrentTurn : boolean;
    Symbol        : string;
    WinCount      : number;
}

export class Player implements IPlayer {

    Name : string = ""
    isCurrentTurn : boolean = false
    Symbol        : string = Symbols.Default
    WinCount      : number = 0

    constructor (name : string, symbol: string){
        this.Name = name;
        this.Symbol = symbol;
    }

}


