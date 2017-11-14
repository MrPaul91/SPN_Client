export class sessionTemplate {
    message: string;
    user: {
        person: {
            personId: number,
            name: string        
        }
        username: string,
        avatar: string,
        email: string
    }
    constructor(answer: sessionTemplate) {
         this.message = answer.message;
         this.user = answer.user;
    }
 } 
 