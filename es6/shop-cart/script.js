class ShopCart {
  constructor() {
    this.products = [];
    this.productsListNode = $('<ul class="shop-cart"></ul>');
    this.render();
  }

  addItemToCart(product) {
    this.products.push(product);
    product.render(this.productsListNode);
  }

  removeItemFromCart(index) {
    const removedProducts = this.products.splice(index, 1);
    if (removedProducts[0]) {
      removedProducts[0].remove();
    }
  }

  checkProducts() {
    this.products.forEach(product => {
      product.checkMyfunctionality();
    });
  }

  render() {
    this.productsListNode.appendTo(document.body);
  }
}

class Product {
  constructor(type, name, price) {
    this.type = type;
    this.name = name;
    this.price = price;
    this.productNode = $(`
      <li class="product">
        <h4>${this.name}</h4>
        <h5>${this.type}</h5>
        <p>${this.price} PLN</p>
      </li>
    `);
  }

  render(parent) {
    if (parent) {
      this.productNode.appendTo(parent);
    }
  }

  remove() {
    this.productNode.remove();
  }
}

class Toy extends Product {
  constructor(type, name, price, sound) {
    super(type, name, price);

    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }

  checkMyfunctionality() {
    this.makeSound();
  }
}

class Phone extends Product {
  constructor(type, name, price, ringtone) {
    super(type, name, price);

    this.ringtone = ringtone;
  }

  makeCall() {
    console.log(this.ringtone);
  }

  checkMyfunctionality() {
    this.makeCall();
  }
}

const newShopCart = new ShopCart();

const one = new Toy("Toy", "LEGO", 90, "yeah");
const two = new Toy("Toy", "TALISMAN", 120, "heeh");
const three = new Phone("Phone", "IPHONE", 2000, "bleah");
const four = new Phone("Phone", "NOKIA", 300, "buuuz");

newShopCart.addItemToCart(one);
newShopCart.addItemToCart(two);
newShopCart.addItemToCart(three);
newShopCart.addItemToCart(four);