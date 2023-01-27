import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Email } from './email';
import { EMAILS } from './mock-emails';


@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor() { }

  getEmails(): Observable<Email[]> {
    const emails = of(EMAILS);
    return emails;
  }

  getEmail(id: number): Observable<Email> {
    const email = EMAILS.find(e => e.id === id)!;
    return of(email);
  }
}
