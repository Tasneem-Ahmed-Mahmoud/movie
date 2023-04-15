import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path:'movieDetails/:id',component : MovieDetailsComponent},
{path:'movies',component:MoviesComponent},
{path:'logout',component:LogoutComponent},
{path:'contacts' , component: ContactsComponent},
{path:'about' , component:AboutComponent},
{path:'login' , component: LoginComponent},
{path:'register' , component: RegisterComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component: HomeComponent},
{path:'**' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
