export class House {

    /**
     * @param {{price: number; year: number; houseNumber: number; street: string; city: string; bedrooms: number; bathrooms: number; sqft: number; isHaunted: boolean; description: string; imgUrl: string; listedAt?: Date}} data
     */

    constructor(data) {
        this.year = data.year
        this.houseNumber = data.houseNumber
        this.street = data.street
        this.city = data.city
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.isHaunted = data.isHaunted
        this.description = data.description
        this.imgUrl = data.imgUrl
        // SECTION not listed
        // this.listedAt = data.listedAt
        // this.id = data.id || generateId()
    }

    get HouseCard() {
        return `
            <div class="col-10 mb-4 p-3">
            <div class="d-flex shadow car-border">
            <img class="car-img"
                src="${this.imgUrl}"
                alt="${this.houseNumber}">
            <div class="p-3 w-100">
                <h2>Price: $${this.price}</h2>
                <h3>${this.houseNumber} ${this.street}, ${this.city}</h3>
                <p>Year: ${this.year}</p>
                <p>${this.bedrooms} Bed, ${this.bathrooms} Bath</p>
                <p>${this.sqft} Square Feet</p>
                <p>${this.isHaunted ? 'This house has one or more 👻' : "It is not haunted!!"}</p>
                <p>${this.description}</p>
            </div>
            </div>
        </div>
        `
    }

}

