import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { map, catchError } from 'rxjs/operators';
import * as socketIo from 'socket.io-client';
import { Socket } from 'ngx-socket-io';

var io: {
  connect(url: string): Socket;
};

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  socket: Socket;
  observer: Observer<any>;
  constructor() { }


  getVideoChunks(): Observable<number> {
    this.socket = socketIo('http://localhost:3333');

    this.socket.on('broadcast', (res) => {
      this.observer.next(res.data);
    });

    return this.createObservable();
  }

  createObservable(): Observable<number> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }

  private handleError(error) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      let errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Socket.io server error');
  }

}