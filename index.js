class PC {
  constructor(name, color, company, price) {
    this.name = name;
    this.color = color;
    this.company = company;
    this.price = price;

  }
}

const macbook = new PC("Macbook", "silver", "Apple", 220000);
const letsnote = new PC("Let's note", "white", "Panasonic", 180000);

console.log(macbook);
console.log(letsnote);