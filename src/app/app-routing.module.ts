import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProduitsComponent } from './produits/produits.component';

import { AddProduitComponent } from './add-produit/add-produit.component';

const routes: Routes = [
{path: "produits", component : ProduitsComponent},
{path: "add-produit", component : AddProduitComponent},
{ path: "", redirectTo: "produits", pathMatch: "full" }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
