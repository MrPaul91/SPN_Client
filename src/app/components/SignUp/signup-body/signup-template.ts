import { Avatar } from './Avatar';

export class SignUp {

  personId: number;
  name: string;
  username: string;
  password: string;
  email: string;
 	avatar: Avatar;

  constructor(){
    this.avatar = new Avatar();
  }

  public initAvatar(avatar:Avatar): void{
    this.avatar.file = avatar.file;
    this.avatar.extension = avatar.extension;
  }
}
