class Veicolo {
  marca;
  anno;
  colore;
  porte;
  carburante;

  constructor(marca, anno, colore, porte, carburante){
    this.anno = anno
    this.carburante = carburante
    this.marca = marca
    this.porte = porte
    this.colore = colore
  }


}


//istance
const fiat = new Veicolo('Fiat',2019, 'blu', 5, benzina)

