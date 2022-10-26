const producerInput = document.getElementById("producer-input");
const priceInput = document.getElementById("price-input");
const horsepoweInput = document.getElementById("horsepower-input");
const itemsContainer = document.getElementById("items-container");
const totalPrice = document.getElementById("total-price");

const getItemId = (id) => `item-${id}`;

const totalPriceTemplate = (totalPrice) => `
Total price: ${totalPrice} $
`;

const itemTemplate = ({id, producer, price, horsepower}) => `
<li id="${getItemId(id)}" class="item">
    <img src="assets/bugatti.jpg" />
    <div class="item-body">
        <h1 class="item-producer">"${producer}"</h4>
            <div class="item-info">
                <h3 class="item-price">${price} $</h3>
                <h3 class="item-horsepower">${horsepower} hp</h3>
            </div>
    </div>
</li>
`;

export const clearInputs = () => {
    producerInput.value = "";
    priceInput.value = "";
    horsepoweInput.value = "";
};

export const addItemToPage = ({id, producer, price, horsepower}) => {
    itemsContainer.insertAdjacentHTML(
        "beforeend",
        itemTemplate({id, producer, price, horsepower})
    )
}

export const getInputValues = () => {
    return{
        producer: producerInput.value,
        price: priceInput.value,
        horsepower: horsepoweInput.value,
    }
};

export const renderItems = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    } 
}

export const renderTotalPrice = (price) => {
    totalPrice.innerHTML = "";
    totalPrice.insertAdjacentHTML(
        "afterbegin",
        totalPriceTemplate(price),
    )
}

