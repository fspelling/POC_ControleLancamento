import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { LancamentoModel } from "../models/lancamento.model";
import { ListarLancamentosResponse } from "./contracts/lancamento/listar-lancamentos.response";
import { BuscarLancamentoPorIdResponse } from "./contracts/lancamento/buscar-lancamento-porId.response";
import { RemoverLancamentoResponse } from "./contracts/lancamento/remover-lancamento.response";
import { AdicionarLancamentoResponse } from "./contracts/lancamento/adicionar-lancamento.response";
import { AlterarLancamentoResponse } from "./contracts/lancamento/alterar-lancamento.response";

const API = `${environment.API_URL}/api/Lancamento`;

@Injectable({ providedIn: 'root' })
export class LancamentoService {
    private _listners = new Subject();

    constructor(private http: HttpClient) { }

    listarLancamento(): Observable<ListarLancamentosResponse> {
        return this.http.get<ListarLancamentosResponse>(API);
    }

    buscarLancamentosPorId(id: string): Observable<BuscarLancamentoPorIdResponse> {
        return this.http.get<BuscarLancamentoPorIdResponse>(`${API}/${id}`);
    }

    removerLancamento(id: string): Observable<RemoverLancamentoResponse> {
        return this.http.delete<RemoverLancamentoResponse>(`${API}/${id}`);
    }

    adicionarLancamento(lancamento: LancamentoModel): Observable<AdicionarLancamentoResponse> {
        return this.http.post<AdicionarLancamentoResponse>(API, lancamento);
    }

    alterarLancamento(lancamento: LancamentoModel): Observable<AlterarLancamentoResponse> {
        return this.http.put<AlterarLancamentoResponse>(API, lancamento);
    }

    listenGrid(): Observable<any> {
        return this._listners.asObservable();
    }

    atualizarGrid() {
        this._listners.next('atualizar listagem');
    }
}