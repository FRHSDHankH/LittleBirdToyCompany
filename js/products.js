const products = [
  {
    name: 'Wooden Airplane',
    age: 'Toddlers',
    description: 'Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W.',
    price: 24.99,
    id: 'airplane',
    carouselInner: `
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="LBTCImgs/plane1.jpg" class="d-block w-75 mx-auto img-fluid" alt="plane1">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/plane2.jpg" class="d-block w-75 mx-auto img-fluid" alt="plane2">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/plane3.jpg" class="d-block w-75 mx-auto img-fluid" alt="plane3">
        </div>
      </div>`
  },
  {
    name: 'Wooden Train Set',
    age: '3+',
    description: 'Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.',
    price: 59.99,
    id: 'train',
    carouselInner: `
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="LBTCImgs/train1.jpg" class="d-block w-75 mx-auto img-fluid" alt="train1">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/train2.jpg" class="d-block w-75 mx-auto img-fluid" alt="train2">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/train3.jpg" class="d-block w-75 mx-auto img-fluid" alt="train3">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/train4.jpg" class="d-block w-75 mx-auto img-fluid" alt="train4">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/train5.jpg" class="d-block w-75 mx-auto img-fluid" alt="train5">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/train6.jpg" class="d-block w-75 mx-auto img-fluid" alt="train6">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/train7.jpg" class="d-block w-75 mx-auto img-fluid" alt="train7">
        </div>
      </div>`
  },
  {
    name: 'Wooden Boat',
    age: 'All ages',
    description: 'Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.',
    price: 19.99,
    id: 'boat',
    carouselInner: `
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="LBTCImgs/boat1.jpg" class="d-block w-75 mx-auto img-fluid" alt="boat1">
        </div>
      </div>`
  },
  {
    name: 'Wooden Block Set',
    age: '3+',
    description: 'Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).',
    price: 39.99,
    id: 'block',
    carouselInner: `
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="LBTCImgs/block1.jpg" class="d-block w-75 mx-auto img-fluid" alt="block1">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/block2.jpg" class="d-block w-75 mx-auto img-fluid" alt="block2">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/block3.jpg" class="d-block w-75 mx-auto img-fluid" alt="block3">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/block4.jpg" class="d-block w-75 mx-auto img-fluid" alt="block4">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/block5.jpg" class="d-block w-75 mx-auto img-fluid" alt="block5">
        </div>
      </div>`
  },
  {
    name: 'Wooden Car',
    age: 'All ages',
    description: 'This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.',
    price: 29.99,
    id: 'car',
    carouselInner: `
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="LBTCImgs/car1.jpg" class="d-block w-75 mx-auto img-fluid" alt="car1">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/car2.jpg" class="d-block w-75 mx-auto img-fluid" alt="car2">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/car3.jpg" class="d-block w-75 mx-auto img-fluid" alt="car3">
        </div>
        <div class="carousel-item">
          <img src="LBTCImgs/car4.jpg" class="d-block w-75 mx-auto img-fluid" alt="car4">
        </div>
      </div>`
  }
];
