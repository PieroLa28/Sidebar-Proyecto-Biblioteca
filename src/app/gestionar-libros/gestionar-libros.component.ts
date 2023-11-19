import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoresService } from '../services/autores/autores.service';
import { CategoriasService } from '../services/categorias/categorias.service';
import { EditorialesService } from '../services/editoriales/editoriales.service';
import { LibrosService } from '../services/libros/libros.service';
@Component({
  selector: 'app-gestionar-libros',
  templateUrl: './gestionar-libros.component.html',
  styleUrls: ['./gestionar-libros.component.scss']
})
export class GestionarLibrosComponent implements OnInit{

   //Declarando a nuestro formulario:
   librosForm: FormGroup = new FormGroup({});

   //Creando arreglos que vamos a utilizar:
  autores: any;
  categorias: any;
  editoriales:any;
  libros:any;


  constructor(
    public fb: FormBuilder,
    public autoresService: AutoresService,
    public categoriasService: CategoriasService,
    public editorialesService: EditorialesService,
    public librosService: LibrosService
    ){
  }

  ngOnInit(): void {
    //Creando campos de nuestro formulario para cuando se vaya a insertar:
    this.librosForm = this.fb.group({
      id:[''],
      titulo: ['', Validators.required],
      fechalan: ['', Validators.required],
      idioma: ['', Validators.required],
      paginas: ['', Validators.required],
      descripcion: ['', Validators.required],
      portada:['', Validators.required],
      autor: ['', Validators.required],
      categoria: ['', Validators.required],
      editorial: ['', Validators.required],
    })

    /*---UTILIZANDO LOS SERVICIOS PARA LOS SELECTS---- */
    this.autoresService.getallAutores().subscribe(resp=>{
      this.autores=resp;  
    },
    error=>{console.error(error)})

    this.categoriasService.getallCategorias().subscribe(resp=>{
      this.categorias=resp;  
    },
    error=>{console.error(error)})

    this.editorialesService.getallEditoriales().subscribe(resp=>{
      this.editoriales=resp;  
    },
    error=>{console.error(error)})

    this.librosService.getallLibros().subscribe(resp=>{
      this.libros=resp;  
    },
    error=>{console.error(error)})

  }

    

/*Registrando libros:*/
guardar(): void{
  this.librosService.guardarLibro(this.librosForm.value).subscribe(resp=>{
    this.librosForm.reset();
    this.libros=this.libros.filter((libro: any)=> resp.id != libro.id);
    this.libros.push(resp);
  },
  error=>{console.error(error)
  })
}
 /*Eliminando Libros */
 eliminar(libro:any){
  this.librosService.eliminarLibro(libro.id).subscribe(resp=>{
    if(resp===true){
      this.libros.pop(libro);
    }
  })
 }

 editar(libro:any){
  this.librosForm.setValue({
    id:libro.id,
    titulo: libro.titulo,
    fechalan: libro.fechalan,
    idioma: libro.idioma,
    paginas: libro.paginas,
    descripcion: libro.descripcion,
    portada:libro.portada,
    autor: libro.autor,
    categoria: libro.categoria,
    editorial: libro.editorial,
  })
 }
  
}
