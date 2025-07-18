function show(productId) {
  const product = document.getElementById(productId);
  product.classList.add("d-block");
  product.classList.remove("d-none");
  document.getElementById("unHideFr").classList.remove("d-none");
}

function close(productId) {
  const product = document.getElementById(productId);
  product.classList.remove("d-block");
  product.classList.add("d-none");
  document.getElementById("unHideFr").classList.add("d-none");
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
                    <div class="reviews mt-3">
                      <h5>Reviews</h5>
                      ${getTopReviews(3).map(review => `
                        <div class="review border rounded p-2 mb-2">
                          <div class="d-flex justify-content-between">
                            <p class='fw-bold fs-4'>${review.reviewer}</p>
                            <p class="fw-bold fs-4">${review.date}</p>
                          </div>
                          <div class="text-warning mb-1 fs-5">
                            ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}
                          </div>
                          <p class="mb-0 fs-6">${review.comment}</p>
                        </div>
                      `).join("")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='row lightBrown'>
          <div class='col-12 fs-4'>
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

function getTopReviews(r) {
  return reviews.sort(() => 0.5 - Math.random()).slice(0, r);
}

window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 992) { // Bootstrap lg breakpoint is 992px
      const audio = document.getElementById('homeAudio');
      audio.play().catch(function (error) {
        console.log("Audio play was prevented by the browser:", error);
      });
    }
  });