import {Task} from './task';

export interface Projet {
    id?: number;
    libelle?: string;
    etat?: string;
    dateDebut?: string;
    dateFin?: string;
    description?: string;
    taches?: Task[];
}
