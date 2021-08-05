import React, { Component } from 'react'
import axios from 'axios'
import './OrderView.css'

export default class OrderView extends Component {
    constructor(){
        super();
        this.state = {
            pizzas: []
        };
    }
    handleClick = (e) => {
        e.target.style = "background-color:blue;font-size:10px;color:white";
        e.target.innerHTML = "✔ Added";
    }
    componentDidMount(){
        axios.get('http://localhost:4000/order/getallpizzas')
        .then(res=>{
            this.setState({
                pizzas: res.data
            })
        })
        .catch(err=>console.log("Something went wrong!"))
    }
    render() {
        let pizzaMap = this.state.pizzas.map(p => {
            let color = "";
            if(p.type === "veg") color = "green";
            else color = "red";
            return(
                <div className="pizzaDiv row">
                    <div className="col-sm-3">
                        <p style={{marginTop:"30px"}}>{p.name}</p><br />
                        <span style={{backgroundColor:color,width:"5px",height:"0.5px",position:"relative",bottom:"30px",border:"1px solid black"}}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <p>₹ {p.price}</p>
                    </div>
                    <div className="col-sm-6">
                        <p style={{marginTop:"20px"}}>{p.description}</p><br />
                        <p><b>Ingredients: </b>{p.ingredients.map(a=>`${a}, `)}</p>
                        <p><b>Toppings: </b>{p.topping.map(a=>`${a}, `)}</p>
                    </div>
                    <div className="col-sm-3">
                        <img src={p.image} style={{width:"100%",height:"60%",marginTop:"20px"}}/><br /><br />
                        <button class="btn btn-warning" style={{fontSize:"10px"}} onClick={this.handleClick}>Add to Cart</button><br /><br />
                    </div>
                </div>
            )
        })
        return (
            <div align="center">
                <br />
                {pizzaMap}
            </div>
        )
    }
}
