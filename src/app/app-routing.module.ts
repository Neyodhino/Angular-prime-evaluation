import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagingSampleComponent } from './grid/grid-paging-template/grid-paging-sample.component';
import { GridSortingIndicatorsComponent } from './grid-two/grid-sorting-indicators/grid-sorting-indicators';
import { GridCustomFilteringComponent } from './grid-three/grid-custom-filtering/grid-custom-filtering.component';
import { GridEditingSampleComponent } from './grid-four/grid-editing-sample/grid-editing-sample.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/grid-one'},
  { path: 'grid-one', component: GridEditingSampleComponent },
  { path: 'grid-two', component: GridSortingIndicatorsComponent },
  { path: 'grid-three', component: GridCustomFilteringComponent },
  { path: 'grid-four', component: PagingSampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
