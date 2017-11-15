import { body_imageTemplate } from './body_image-template';


export class albumResponseTemplate {
    message: string;
    Images: body_imageTemplate[];

    constructor(answer: albumResponseTemplate ) {
         this.message = answer.message;
         this.Images = answer.Images;
    }
 } 
 