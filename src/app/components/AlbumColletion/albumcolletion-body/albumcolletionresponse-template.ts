import { body_albumTemplate } from './body_album-template';


export class albumcollectionResponseTemplate {
    message: string;
    Albums: body_albumTemplate[];

    constructor(answer: albumcollectionResponseTemplate) {
         this.message = answer.message;
         this.Albums = answer.Albums;
    }
 } 
 