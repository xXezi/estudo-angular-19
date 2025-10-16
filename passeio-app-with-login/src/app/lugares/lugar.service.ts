import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lugar } from './lugar';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http: HttpClient) { }

  salvar(lugar: Lugar) : Observable<Lugar>{
    return this.http.post<Lugar>('http://localhost:3000/lugares', lugar);
  }

  obterTodos() : Observable<Lugar[]>{
    return this.http.get<Lugar[]>('http://localhost:3000/lugares');
  }

  filtrar(nome: string, categoria: string) : Observable<Lugar[]>{
    let parametros = new HttpParams();

    if(nome){
      parametros = parametros.set('nome_like',nome);
    }

    if(categoria && categoria !== '-1'){
      parametros = parametros.set('categoria',categoria);
    }

    return this.http.get<Lugar[]>('http://localhost:3000/lugares',{
      params: parametros
    });
  }
}
