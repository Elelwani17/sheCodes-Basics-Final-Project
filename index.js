function getOrderDetails() {
    var name = prompt("Please enter your name✍️:");
    var contactNumber = prompt("Please enter your contact number📲:");
    var address = prompt("Please enter your shipping address🛳️:");
    var emoji = prompt("Please enter your favorite emoji😊:");

    if (name && contactNumber && address && emoji) {
        alert("We will be in touch by email.\nPlease note that we courier door to door in areas such as Johannesburg, Pretoria, Durban, Nelspruit, and Polokwane. Shipping takes 3-5 working days at an R80 fee.🛍️🥂💰💳");
    } else {
        alert("Please make sure to fill in all the details✅.");
    }
}
