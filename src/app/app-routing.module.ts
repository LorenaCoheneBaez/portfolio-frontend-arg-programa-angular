import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './security/auth/login.component';
import { RegistroComponent } from './security/auth/registro.component';
import { IndexComponent } from './security/index/index.component';
import { PortfolioGuardService as guard } from './security/guards/portfolio-guard.service';
import { EstudiosComponent } from './estudios/estudios.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencialaboralComponent } from './experiencialaboral/experiencialaboral.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PersonaComponent } from './persona/persona.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'estudios', component: EstudiosComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'experiencia', component: ExperiencialaboralComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'user', component: PersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
