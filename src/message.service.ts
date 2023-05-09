import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  add(message: string) { // agregar caché
    this.messages.push(message);
  }

  clear() { // borrar cache
    this.messages = [];
  }
}
