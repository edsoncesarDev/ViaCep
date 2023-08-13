import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Endereco } from '../Models/Endereco';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  public baseURL: string = environment.apiURL + 'api/Endereco';

  constructor(private http: HttpClient) { }

  public getEndereco(cep: string): Observable<Endereco>{
    return this.http
      .get<Endereco>(`${this.baseURL}/${cep}`)
      .pipe(take(1));
  }
}
