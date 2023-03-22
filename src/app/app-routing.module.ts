import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilComponent } from './profil/profil.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'profil',
children:[{path:'view',component:ViewComponent},{path:'details',component:DetailsComponent}]
},
{path:'contact',redirectTo:'about',pathMatch:'full'},
{path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
