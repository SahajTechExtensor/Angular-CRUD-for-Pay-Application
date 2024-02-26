import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { TokenGenerator } from "./token.service";
import { ApplicationModal } from "../models/application.modal";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private tokenGenerator: TokenGenerator = inject(TokenGenerator);
    private http: HttpClient = inject(HttpClient);
    private prefixUrl: string = 'https://cmi-ofm.azurewebsites.net/api/'

    get(projectId: string) {
        projectId = '9229a3af-13de-4b67-9820-fb808b21efa4';
        const url: string = 'GetAllPayApplication/';
        return this.http.get(this.prefixUrl + url + projectId, { headers: { 'Authorization': this.tokenGenerator.token } });
    }

    post() {
        const body = new ApplicationModal(
            'trial123',
            '2024-2-9',
            '9229a3af-13de-4b67-9820-fb808b21efa4',
            '2024-2-2',
            '2024-2-3',
            'A/E',
            '111',
           ' true'
        );
        const url: string = 'CreatePayApplication';

        return this.http.post(
            this.prefixUrl + url,
            body,
            { headers: { "Authorization": this.tokenGenerator.token } }
        );
    }
}