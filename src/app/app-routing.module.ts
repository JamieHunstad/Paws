import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { TreatItemComponent } from './pages/treats/treat-item/treat-item.component';
import { TreatsAllComponent } from './pages/treats/treats-all/treats-all.component';
import { TreatsComponent } from './pages/treats/treats.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'treats', component: TreatsComponent, children: [
    {path: '', component: TreatsAllComponent},
    {path: ':id', component: TreatItemComponent}
  ]
},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
