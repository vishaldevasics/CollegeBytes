
let mainContainer = document.querySelector('.menu-bar');

fetchMenu();
console.log("working");
function fetchMenu() {
  if(!mainContainer) return;
  let innerHtml = ``;
  item.forEach((item)=>{
    innerHtml += 
  `
      <div class="box">
 
      <img src="${item.image}" alt="">
      <div class="textpart">${item.item_name}</div>
      <div class="price-part">RS ${item.original_price}</div>
      </div>`
      mainContainer.innerHTML = innerHtml;
})
}