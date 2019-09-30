import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from "../email.model";
import { Sms } from "../sms.model";

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(
    private http: HttpClient
  ) { }

  urlEmail = 'https://damp-reef-76842.herokuapp.com/email';
  urlText = 'https://damp-reef-76842.herokuapp.com/sms';
  
  sendEmail(email: Email) {
    return this.http.post<Email>(this.urlEmail,email);
  }
  sendText(sms:Sms){
    return this.http.post<Sms>(this.urlText,sms);
  }
}
