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
    };
    sessionId: string;
    constructor(answer: sessionTemplate) {
         this.message = answer.message;
         this.user = answer.user;
         this.sessionId = answer.sessionId;
    }
 } 
 