import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from "../email.model";

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
  sendText(data){
    return this.http.post(this.urlText,data);
  }
}
