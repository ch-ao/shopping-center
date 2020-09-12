var data = [
  {
    name: 'House',
    img: "https://www.ecohome.net/media/articles/images/0e/c7/0ec72488444fb536deb6fddeb6e7ee73c4323b3a/thumbs/6ummBZul-57c_1200x500_ZBprRkQU.jpg",
    price: "$ 2,000,000"
  },
  {
    name: 'Car',
    img: "https://s.aolcdn.com/commerce/autodata/images/CAC90PRC017B021001.jpg",
    price: "$ 4150,000"
  },
  {
    name: 'Boat',
    img: "https://images.boats.com/resize/1/65/60/7396560_20200328085252456_1_LARGE.jpg?t=1585410772000",
    price: "$ 80,000"
  },
  {
    name: 'Soda',
    img: "https://www.fodors.com/wp-content/uploads/2019/03/HERO_Worlds_Best_Soda_Bundaberg_shutterstock_679079920.jpg",
    price: "$ 2"
  }
];

var html = '';

data.forEach(e => {
  html += `
    <div class="col-4 p-2">
      <div class='m-5 border'>
        <h2 class="m-3"> ${e.name}</h2>
        <img src=${e.img} alt="">
        <h1 class="price m-3">${e.price}</h1>
        <button class="btn btn-outline-dark m-3">Buy Product</button>
      </div>
  </div> `
});

document.getElementById('product').innerHTML = html;


