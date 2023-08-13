import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Endereco } from 'src/app/Models/Endereco';
import { EnderecoService } from 'src/app/Services/endereco.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  modalRef?: BsModalRef;
  public image: string = 'assets/image/hero_right.png';
  public endereco!: Endereco;
  public form!: FormGroup;
  public cep: string = '';
  public title: string = 'Editar Endereço';

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private enderecoService: EnderecoService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {  }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {
    this.form = this.fb.group({
      logradouro: [''],
      complemento: [''],
      bairro: [''],
      localidade: [''],
      uf: [''],
      numero: ['']
    });
  }

  public BuscarEndereco() : void {
    this.spinner.show();

    this.enderecoService.getEndereco(this.cep).subscribe({
      next: (response: Endereco) => {
        this.endereco = response;
      },
      error: () => {
        this.toastr.error('CEP inválido.','Erro!')
      }
    }).add(() => this.spinner.hide());
  }

  public openModal(event: any, template: TemplateRef<any>) {
    event.stopPropagation();
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    this.form.reset();
    this.form.patchValue(this.endereco);
  }

  public decline() : void {
    this.modalRef?.hide();
  }

  public confirm(): void {
    this.endereco = this.form.value;
    this.modalRef?.hide();
  }

}
