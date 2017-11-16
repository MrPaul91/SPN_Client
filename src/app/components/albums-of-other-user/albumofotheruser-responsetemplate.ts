import { body_albumOfOtherUser } from './body_albumofotheruser-template';

export class albumOfOtherUserResponseTemplate {
    message: string;
    Albums: body_albumOfOtherUser[];

    constructor(answer: albumOfOtherUserResponseTemplate) {
         this.message = answer.message;
         this.Albums = answer.Albums;
    }
 } 
 