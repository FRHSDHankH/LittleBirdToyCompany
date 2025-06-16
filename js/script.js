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
        "rounded-4 w-100 font display-4 text-center mx-auto border-brown bg-modal d-none fadeIn p-5 popIn backgroundMain";
      modal.id = p.id;
      modal.innerHTML = `
        <div class='row'>
          <div class='col-12 darkBrown display-1 ss'>${p.name} - $${p.price} - ${p.age}</div>
        </div>
        <div class='row lightBrown'>
          <div class='col-lg-6 col-sm-12'>
            <div id="carousel-${p.id}" class="carousel slide">
              ${p.carouselInner.replaceAll('carouselExampleIndicators', `carousel-${p.id}`)}
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${p.id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel-${p.id}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class='col-lg-6 col-sm-12 fs-3 d-flex align-items-center justify-content-center text-center'>
            <div class='row'>
              <div class='col-12'>
                <div class='row'>
                  <div class='col-12'>
                    Review
                  </div>
                </div>
                <div class='row'>
                  <div class='col-12'>
                    Review
                  </div>
                </div>
                <div class='row'>
                  <div class='col-12'>
                    Review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='row lightBrown'>
          <div class='col-12 fs-3'>
            ${p.description}
          </div>
        </div>
        <button class='fs-2 text darkBrown bg-transparent border-brown-light scale rounded-4 text-center p-3 close'>Close</button>
      `;

      const button = modal.querySelector(".close");
      button.addEventListener("click", () => close(p.id));

      modals.appendChild(modal);
    });
  };

  render(products);
});
