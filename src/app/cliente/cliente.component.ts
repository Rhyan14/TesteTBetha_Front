import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from './cliente';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  formulario: FormGroup;
  clientes: Cliente[] = [];

  //Posição dos campos na tabela
  colunas = ['id', 'nome', 'cpf', 'cnpj', 'telefone', 'endereco'];

  constructor(
    private service: ClienteService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    
    this.montarForm();

    this.ListCli();
    }

    //Fala para as variáveis o que é requisitados na hora de preencher no "cliente.component.html"
    montarForm(){
      this.formulario = this.fb.group({
        nome: ['', Validators.required],
        cpf: ['', Validators.required,],
        cnpj: ['', Validators.required],
        telefone: ['', Validators.required],
        endereco: ['', Validators.required]
      })
    }

    //lista os contatos da classe "clientes" na Tabela
    ListCli(){
      this.service.list().subscribe(response => {
        this.clientes = response
      })
    }
    
    submit(){

      const  frmValues = this.formulario.value;
      const cliente : Cliente = new Cliente(frmValues.nome, frmValues.cpf, frmValues.cnpj, frmValues.telefone, frmValues.endereco)
      this.service.save(cliente).subscribe( resposta =>{

        //Mantém a lista de clientes atualizada, quando é adicionado +1 cliente
        let lista: Cliente[] = [... this.clientes, resposta] 
        this.clientes = lista;
        this.snackBar.open('Cliente foi adicionado!', 'Sucesso!', {
          duration: 2000
        })
        this.formulario.reset();  

        console.log(this.clientes)
      })
  }
   

}
