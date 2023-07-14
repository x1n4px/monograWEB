import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductosVisualComponent } from './component/productos-visual/productos-visual.component';

const routes: Routes = [
 {path:'', component: HomeComponent}  ,
 {path:'producto/:idProducto', component: ProductosVisualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
