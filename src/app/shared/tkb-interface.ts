
interface tietItem{
    subj: string, tiet: string
}

export interface tkbItem{
    date: string, subjs: tietItem[]
}

export class tkbClass {
    constructor(         
        readonly id: string = '',
        readonly date: string = '', 	
        readonly subjs: tietItem[]        
    ){}
}