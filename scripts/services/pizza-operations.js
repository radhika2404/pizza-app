import makeNetworkCall from './api-client.js';
import {URL} from '../config.js';
import Pizza from '../models/pizza-models.js'



const pizzaOperations={
    pizzas:[],

    searchPizza(pizzaid){
        const pizzaObject=this.pizzas.find((pizza)=>pizza.id=pizzaid);
        pizzaObject;
    },
    async getPizzas(){
        //call api client
        const data=await makeNetworkCall(URL);
        //data map to model
        const pizzaJSON=data['Vegetarian'];
        const pizzas=pizzaJSON.map(singlePizza =>{
        const pizzaObject=new Pizza(singlePizza.id, singlePizza.name, singlePizza.price, singlePizza.assets.product_details_page[0].url,singlePizza.menu_description);
            return pizzaObject;
        })
        this.pizzas=pizzas;
    return pizzas;
    
    }
}


export async function getPizzas(){
    //call api client
    const data=await makeNetworkCall(URL);
    //data map to model
    const pizzaJSON=data['Vegetarian'];
    const pizzas=pizzaJSON.map(singlePizza =>{
    const pizzaObject=new Pizza(singlePizza.id, singlePizza.name, singlePizza.price, singlePizza.assets.product_details_page[0].url,singlePizza.menu_description);
        return pizzaObject;
    })
return pizzas;
    

}
export default pizzaOperations;
