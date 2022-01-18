import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Projet} from "../model/projet";
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  idProjet: number = 0;
  projet: Projet = {} as Projet;
  constructor(private activateRoute: ActivatedRoute,
              private projetService: ProjectService) {
    this.idProjet = this.activateRoute.snapshot.params.id;
    this.projetService.getProjet(this.idProjet).subscribe((response: Projet) => {
      this.projet = response;
    });
  }

  ngOnInit(): void {
  }

}
