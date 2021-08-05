import React, { Component } from 'react'
import axios from 'axios'
import './BuildView.css'
export default class BuildView extends Component {
    constructor(){
        super();
        this.state = {
            ingredients: [],
            tprice: 0
        };
    }
    componentDidMount(){
        axios.get("http://localhost:4000/build/getallingredients")
        .then(res=>{
            this.setState({
                ingredients: res.data
            });
        })
        .catch(err=>console.log("Something went wrong!"))
    }
    handleClick = (e) => {
        console.log(e.target.value);
        var checkbox = e.target;
        if(checkbox.checked == true){
            this.setState({
                tprice: this.state.tprice+parseInt(e.target.value)
            });
        }
        else{
            this.setState({
                tprice: this.state.tprice-parseInt(e.target.value)
            });
        }
    }
    render() {
        let ingredientMap = this.state.ingredients.map(i => {
            return(
                <tr>
                    <td style={{width:"40%"}}><img src={i.image} style={{maxWidth:"30%"}}/></td>
                    <td>{i.tname} ₹ {i.price}</td>
                    <td><input type="checkbox" value={i.price} onClick={this.handleClick}/> <span style={{color:"blue"}}>Add</span></td>
                </tr>
            )
        })
        return (
            <div align="center">
                <p>Pizzeria now gives you options to build your own pizza. Customize your pizza by
                    choosing ingredients from the list given below.
                </p>
                <table class="myTable table table-bordered table-striped table-hover">
                    <tbody>
                        {ingredientMap}
                    </tbody>
                    <tfoot>
                        <tr>
                        <p style={{color:'blue',float:"left",fontSize:"20px"}}>Total Cost: <span>{this.state.tprice}</span></p><br /><br />
                        <button class="btn" style={{color:'greenyellow',backgroundColor:'black',position:"relative",left:"45%"}}>Build Ur Pizza</button>
                        <br /><br />
                        </tr>
                    </tfoot>
                </table><br />
            </div>
        )
    }
}
