import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product.model";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.scss"],
})
export class ProductReadComponent implements OnInit {
  products: Product[];
  displayedColumns = ["id", "name", "price", "actions"];

  constructor(private productServe: ProductService) {}

  ngOnInit(): void {
    this.productServe.read().subscribe((products) => {
      this.products = products;
    });
  }
}
