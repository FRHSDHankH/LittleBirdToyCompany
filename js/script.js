function show(productId) {
  const product = document.getElementById(productId);
  product.classList.add("d-block");
  product.classList.remove("d-none");
  document.getElementById("unHideFr").classList.remove("d-none");
  document.getElementById("hideFr").classList.add("d-none");
}

function close(productId) {
  const product = document.getElementById(productId);
  product.classList.remove("d-block");
  product.classList.add("d-none");
  document.getElementById("unHideFr").classList.add("d-none");
  document.getElementById("hideFr").classList.remove("d-none");
}

document.addEventListener("DOMContentLoaded", () => {
  const modals = document.getElementById("modals");

  const render = (products) => {
    modals.innerHTML = "";

    products.forEach((p) => {
      const modal = document.createElement("div");
      modal.className =
        "rounded w-75 font display-4 text text-center mx-auto border border-1 border-white bg-modal d-none fadeIn p-5";
      modal.id = p.id;
      modal.innerHTML = `
        <strong>${p.name}</strong><br>
        <span class="fs-4">${p.description}</span><br><br>
        <span class="fs-5"><strong>Age:</strong> ${p.age}</span><br>
        <span class="fs-5"><strong>Price:</strong> $${p.price}</span><br><br>
        <button class='fs-2 text bg-transparent border border-1 border-white scale rounded text-center p-3'>Close</button>
      `;

      const button = modal.querySelector("button");
      button.addEventListener("click", () => close(p.id));

      modals.appendChild(modal);
    });
  };

  render(products);
});
