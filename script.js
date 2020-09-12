let total = 0;
let mymoney = 5000000;

$('.btn').click(e => {
  let name = e.target.parentElement.children[0].innerText;
  let price = e.target.parentElement.children[2].innerText;
  console.log(name, price)
})