import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  message: string = '';
  constructor(private produiService: ProduitService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addProduit() {
    this.produiService.ajouterProduit(this.newProduit);
    this.message = `produit ${this.newProduit.nomProduit} ajouter avec succes`;
  }
}
