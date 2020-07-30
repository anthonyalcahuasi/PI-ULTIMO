import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { PostI } from '../../../shared/models/post.interface';
import { PostService } from './../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  private image: any;
  private imageOriginal: any;

  @Input() post:PostI;

  constructor(private postSvc: PostService) { }

  public editPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    codigoU: new FormControl('', Validators.required),
    facultad: new FormControl('', Validators.required),
    escuelaP: new FormControl('', Validators.required),
    filial: new FormControl('', Validators.required),
    ciclo: new FormControl('', Validators.required),
    eNombre: new FormControl('', Validators.required),
    eTipo: new FormControl('', Validators.required),
    eDireccion: new FormControl('', Validators.required),
    eTelefono: new FormControl('', Validators.required),
    eGerente: new FormControl('', Validators.required),
    eEmail: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.image = this.post.imagePost;
    this.imageOriginal = this.post.imagePost;
    this.initValuesForm();
  }

  editPost(post:PostI){
    console.log('Img', this.image);
    console.log('original', this.imageOriginal);
    if(this.image == this.imageOriginal){
      this.post.imagePost=this.imageOriginal;
      this.postSvc.editPostById(post);
      //call method(post)
    }else{
      this.postSvc.editPostById(post, this.image);
      //call method(post,this.image)
    }
    
  }

  handleImage(event: any):void{
    this.image = event.target.files[0];
  }

  private initValuesForm():void{
    this.editPostForm.patchValue({
      id: this.post.id,
      nombre: this.post.nombre,
      codigoU: this.post.codigoU,
      facultad: this.post.facultad,
      escuelaP: this.post.escuelaP,
      filial: this.post.filial,
      ciclo: this.post.ciclo,
      eNombre:this.post.eNombre,
      etipo: this.post.eTipo,
      edireccion: this.post.eDireccion,
      etelefono: this.post.eTelefono,
      egerente: this.post.eGerente,
      eEmail: this.post.eEmail, 
    })
  }

}
