import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente/cliente'

import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
    ) { }

    save(cliente: Cliente) : Observable<Cliente>{
      return this.http.post<Cliente>(this.url, cliente)
    }

    list(): Observable<Cliente[]>{
      return this.http.get<any>(this.url)
    }
}
