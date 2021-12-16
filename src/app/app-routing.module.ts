import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceLocationComponent } from './components/space-location/space-location.component';

const routes: Routes = [
  { path: '', component: SpaceLocationComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
