import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ShavingComponent } from './shaving/shaving.component';
import { HaircutComponent } from './haircut/haircut.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'бритьё', component: ShavingComponent },
  { path: 'стрижка', component: HaircutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
