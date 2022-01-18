import { Component, OnInit } from '@angular/core';
import {Projet} from '../model/projet';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projets: Projet[] = [];
  constructor(private projetService: ProjectService) {
    this.projetService.getProjets().subscribe((response: Projet[]) => {
      this.projets = response;
    });
  }

  ngOnInit(): void {
  }

}
