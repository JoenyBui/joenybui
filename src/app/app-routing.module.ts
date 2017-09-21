import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent } from './dashboard.component';
import { HomeComponent} from "./home.component"
import { BlogComponent} from './blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'blog', component: BlogComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
