import { pizzaOperations  } from "../services/pizza-operations";
async function printPizzas(){
  const allPizza=await getPizzas();
  const div=document.getElementById('pizza-output');
  console.log('All pizza',allPizza);

  for(var pizza of allPizza){
    const card=createCard(pizza);
    div.appendChild(card);
  }
}
printPizzas();

const printTotal=(pizzas)=>
     pizzas.reduce((sum,pizza)=>sum+parseFloat(pizza.price),0);

function printBasket(){
  const basketDiv = document.getElementById('basket');
  basketDiv.innerHTML = '';
  const pizzasInCart = pizzaOperations.pizzas.filter(pizza=>pizza.isAddedInCart);
  pizzasInCart.forEach(pizza=>{
      const pTag = printItem(pizza);
      basketDiv.appendChild(pTag);
  });
  const total = printTotal(pizzasInCart);
  console.log('Total is ', total);
  const totalPTag = document.createElement("p");
  totalPTag.innerText = `Total is ${total}`;
  basketDiv.appendChild(totalPTag);
}
function printItem(pizza){
  const pTag = document.createElement('p');
  pTag.innerText = `Pizza Name : ${pizza.name} Price : ${pizza.price}`;
  return pTag;
}
function addToCart(){
  console.log('add to cart call',this);
  const currentButton=this;
  const pizzaid=currentButton.getAttribute('pizzaid');
  console.log('pizzaid is:',pizzaid);
  printBasket();
}
function createCard(pizza){
  /*

  */
 const colDiv= document.createElement('div');
 colDiv.className='col-4';


  const cardDiv=document.createElement('div');
  cardDiv.className='card';
  cardDiv.style={width:'18rem'};
  const img=document.createElement('img');
  img.src=pizza.url;
  img.className='class-img-top';
  cardDiv.appendChild(img);
  const cardBody=document.createElement('div');
  cardBody.className='car-body';
  cardDiv.appendChild(cardBody);
  const h5=document.createElement('h5');
  h5.className='card-title';
  h5.innerText=pizza.name;
  cardBody.appendChild(h5);
  const pTag=document.createElement('p');
  pTag.className='card-text';
  pTag.innerText=pizza.desc;
  cardBody.appendChild(pTag);
  const button=document.createElement('button');
  button.className='btn btn-primary';
  button.innerText='Go to cart';
  button.addEventListener('click',addToCart);
  cardBody.appendChild(button);
  colDiv.appendChild(cardDiv);
  return colDiv;


  /*
  <div class="card" style="width: 18rem;"> 
   <img src="..." class="card-img-top" alt="...">
   <div class="card-body"> 
     <h5 class="card-title">Card title</h5> 
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" class="btn btn-primary">Go somewhere</a> 
    </div> 
  </div>

  */

}
