export class Quote {
    showDescription:boolean;
    constructor(public id:number, public name:string, public qoutetitle:string, public quote:string, public quoteDate:Date, public upCount:number, public:downCount:number)
    {
        this.showDescription=false
    }
}
