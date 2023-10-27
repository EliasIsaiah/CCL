document.addEventListener("DOMContentLoaded", function () {
    const customerNameInput = document.getElementById("customer-name");
    const orderDetailsInput = document.getElementById("order-details");
    const allergiesInput = document.getElementById("allergies");
    const dietaryRestrictionsInput = document.getElementById("dietary-restrictions");
    const orderList = document.getElementById("order-list");
    const addOrderButton = document.getElementById("add-order");
    const ordersTable = document.getElementById("orders-table")

    addOrderButton.addEventListener("click", function () {
        const customerName = customerNameInput.value.trim();
        const orderDetails = orderDetailsInput.value.trim();
        const allergies = allergiesInput.value.trim();
        const dietaryRestrictions = dietaryRestrictionsInput.value.trim();

        if (customerName && orderDetails) {
            const orderText = `${customerName}: ${orderDetails} (Allergies: ${allergies}, Dietary Restrictions: ${dietaryRestrictions})`;

            const listItem = document.createElement("li");

            const orderRow = document.createElement("tr");
            const nameTD = document.createElement("td");
            const detailsTD = document.createElement("td");
            const allergiesTD = document.createElement("td");
            const dietaryRestrictionsTD = document.createElement("td");

            nameTD.innerText = customerName;
            detailsTD.innerText = orderDetails;
            allergiesTD.innerText = allergies;
            dietaryRestrictionsTD.innerText = dietaryRestrictions;

            orderRow.appendChild(nameTD);
            orderRow.appendChild(detailsTD);
            orderRow.appendChild(allergiesTD);
            orderRow.appendChild(dietaryRestrictionsTD);

            ordersTable.appendChild(orderRow);

            listItem.textContent = orderText;
            orderList.appendChild(listItem);
            customerNameInput.value = "";
            orderDetailsInput.value = "";
            allergiesInput.value = "";
            dietaryRestrictionsInput.value = "";
        }
    });
});
