let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");

if (cart.length === 0) {

    cartItems.innerHTML = `
        <p style="text-align:center; padding:50px; color:#85877c;">
            Your shopping cart is empty.
        </p>
    `;

} else {

    cartItems.innerHTML = cart.map((product) => {

        return `
            <div style="display:flex; align-items:center; padding:25px 15px; border-bottom:1px solid #e8e2d2; gap:20px;">

                <img src="${product.image}"
                style="width:120px; height:130px; object-fit:cover; border-radius:8px;">

                <div style="flex:1;">

                    <h3 style="font-size:17px; color:#0c3823; margin:0 0 8px;">
                        ${product.name}
                    </h3>

                    <p style="font-size:13px; color:#888b7f; margin:0 0 12px;">
                        ${product.description}
                    </p>

                    <span style="font-size:13px; color:#85877c;">
                        Quantity: ${product.quantity}
                    </span>

                </div>

                <span style="font-size:16px; font-weight:bold; color:#0c3823; white-space:nowrap;">
                    ${product.price.toFixed(2)} JOD
                </span>

            </div>
        `;

    }).join("");

}