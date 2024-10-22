//classes

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

    return age
    // console.log(age);
  }

}

class Automobile extends Veicolo{

  getCarburante(){
    return this.carburante
  }

  getPorte(){
    return this.porte
  }

}


//istance
const fiat = new Veicolo('Fiat',2019, 'blu')
const opel = new Automobile('Opel', 2020, 'nera', 4, 'benzina')


//results
console.log(fiat.getInfo());
console.log(fiat.calcAge());

console.log(opel.getCarburante());
console.log(opel.getPorte());
