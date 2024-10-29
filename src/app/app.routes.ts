import { Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { VoitureComponent } from './voiture/voiture.component';
import { CamionComponent } from './camion/camion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: "vehicule",
        component: VehiculeComponent
    },
    {
        path: "voiture",
        component: VoitureComponent
    },
    {
        path: "camion",
        component: CamionComponent
    },
    {
        path: "",
        redirectTo: 'vehicule',
        pathMatch: 'full'
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
