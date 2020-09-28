export class Cliente {
    
    id: number;
    nome: string;
    cpf: string;
    cnpj: string;
    telefone: string;
    endereco: string;      

    constructor(nome: string, cpf: string, cnpj: string, telefone: string, endereco: string){
        this.nome = nome;
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}