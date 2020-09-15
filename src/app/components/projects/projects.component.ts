import { Component, OnInit } from '@angular/core';
//Servicios
import {ProjectService} from '../../services/project.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectComponent implements OnInit {
  
  public projects = []; 

  constructor(
    private _projectService:ProjectService
  ) { }

  ngOnInit(): void {
    //Obtiene los projectos del servicio
    this._projectService.getProjects()
    .subscribe( (data:any) => {
      this.projects = data;
    });
    
  }

}
