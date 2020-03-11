import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http' 


@Injectable({
  providedIn: 'root'
})

export class AddtocartService {
  Emp?;
  constructor(private _http:HttpClient) { }


  private subject = new Subject<any>();

  private cartSubject = new BehaviorSubject([]);

  sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
  cartCount = new BehaviorSubject(11);

  addToCart(ids)
  {
    this.cartSubject.next(ids);
    
  }
  getCartCount(): Observable<any> {
    return this.cartSubject.asObservable();
}
}
