import{Injectable} from '@angular/core';
@Injectable({
    providedIn:'root',
}
)
export class Service{
    constructor(){

    }
    name:string;
    id:number;
    display:boolean;
    a?:Service[]=[{name:"Sreshta",id:1, display:true},
                    {name:"Anvi",id:2, display:true},
                    {name:"Niharika",id:3, display:false}];
    
    combineValue?(){
     let b:string = this.a.map(ele =>
        {return ele.name;}).join(";");
    }

}