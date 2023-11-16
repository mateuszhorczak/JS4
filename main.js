const energyCost = 4.20;

class Produkt {
    constructor(id, name, model, productionYear, price, energyConsumption) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.productionYear = productionYear;
        this.price = price;
        this.energyConsumption = energyConsumption;
    }

    cost() {
        return this.price;
    }

    energyCost() {
        return this.energyConsumption * energyCost;
    }

    productAge() {
        const currentDate = new Date();
        return currentDate.getFullYear() - this.productionYear;
    }

    productAgeInYears() {
        const productAge = this.productAge();
        return productAge === 1 ? '1 rok' : `${productAge} lata`;
    }
}


class GoodsList {
    constructor() {
        this.products = [];
    }

    printProduct(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
            return `${product.name} ${product.model} (id: ${product.id}), Cena: ${product.price} zł, Wiek: ${product.productAgeInYears()}.`;
        }
        else {
            return 'Model o tym id nie istnieje.';
        }
    }

    printAllProducts() {
        return this.products.map((product) => `${product.name} ${product.model} (id: ${product.id}), Cena: ${product.price} zł, Wiek: ${product.productAgeInYears()}.`);
    }

    addProduct(product) {
        if (this.products.some((p) => p.id === product.id)) {
            throw new Error('Produkt o tym ID juz jest na liście');
        }
        this.products.push(product);
    }

    changeProduct(id, product) {
        const index = this.products.findIndex((p) => p.id === id);
        if (index !== -1) {
            this.products[index] = {...this.products[index], ...product};
        }

    }
}

class Warehouse extends GoodsList {
    constructor() {
        super();
        this.availability = {};
    }

    addProduct(product, quantity) {
        super.addProduct(product);
        if (!this.availability[product.id]) {
            this.availability[product.id] = 0;
        }
        this.availability[product.id] += quantity;
    }

    getProduct(productId, quantity) {
        if (this.availability[productId] >= quantity) {
            this.availability[productId] -= quantity;
            const product = { ...this.products.find(p => p.id === productId) };
            return product;
        } else {
            throw new Error('Brak wystarczającej ilości produktu w magazynie.');
        }
    }
}

class Shop extends GoodsList {
    constructor(warehouse) {
        super();
        this.warehouse = warehouse;
    }

    addProduct(name, model, price, energyConsumption) {
        const productId = this.products.length + 1;
        const productionYear = new Date().getFullYear();
        const product = new Produkt(productId, name, model, productionYear, price, energyConsumption);
        super.addProduct(product);
        this.warehouse.addProduct(product, 1);
    }

    addProductWithId(productId, name, model, price, energyConsumption) {
        const productionYear = new Date().getFullYear();
        const product = new Produkt(productId, name, model, productionYear, price, energyConsumption);
        super.addProduct(product);
        this.warehouse.addProduct(product, 1);
    }

    submitOrder(productId, quantity) {
        try {
            const product = this.warehouse.getProduct(productId, quantity);
            return product;
        } catch (error) {
            throw error;
        }
    }
}
