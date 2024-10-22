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

  // to get the object
  getInfo(){
    return this;
  }

  //to separate logs
  logInfo(){
    for(const k in this){
      console.log(`${k}: ${this[k]}`);
    }
  }

  calcAge(){
    const now = new Date().getFullYear()
    const age = now - Number(this.anno)
    // console.log(age);
  }

}


//istance
const fiat = new Veicolo('Fiat',2019, 'blu', 5, 'benzina')

console.log(fiat.getInfo());
console.log(fiat.calcAge());
