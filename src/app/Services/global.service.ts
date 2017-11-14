import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  initialNavBar:Boolean = false;
  IP: String ="localhost";
  PORT: String = "1337";

  constructor() {
  }
}
