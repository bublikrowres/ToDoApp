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

  url = 'https://damp-reef-76842.herokuapp.com/email';
  
  sendEmail(email: Email) {
    return this.http.post<Email>(this.url,email);
  }
}
