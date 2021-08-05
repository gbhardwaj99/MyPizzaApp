import React, { Component } from 'react'
import './HomeView.css'
import HappyChef from './happy_chef.jpg'
import Ingredient from './ingredients.jpg'
import Clock from './clock.jpg'

export default class HomeView extends Component {
    render() {
        return (
            <div align="center">
                <h2>Our Story</h2><br />
                <p className="myPara">We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our 
                    Facebook fan page. Fans were given situations where they had to come up<br /> with
                    wacky and fun excuses. The person with the best excuse won the Best Excuse
                    Badge and won Pizzeria's vouchers. Their enthusiastic response proved<br /> that 
                    Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza Ever!
                </p>
                <p className="myPara">Ever since we launched the Tastiest Pan Pizza ever, people have not been able to
                resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan<br /> Pizza. They have
                been leaving the stage in the middle of a performance and even finding excuses to be disqualified
                in a football match.</p>
                <p className="myPara">We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page.
                Fans were given situations where they had to come up with wacky and fun<br />excuses. The person
                with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response
                proved that Pizzeria's Fresh<br />Pan Pizza is the tastiest Pan Pizza Ever!
                </p><br />
                <div className="row">
                    <div className="col-sm">
                        <img src={Ingredient} />
                    </div>
                    <div className="col-sm" style={{marginTop:"70px",textAlign:"left",position:'relative',right:"5%"}}>
                        <h3>Ingredients</h3><br />
                        <p>We're ruthless about goodness. We have no qualms about tearing up a day-old<br />
                        lettuce leaf(straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop.<br />
                        Chop. Steam. Steam. Stir Stir. While they're still young and fresh - that's our motto.<br /> It 
                        makes the kitchen a better place.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm" align="center" style={{marginTop:"90px",textAlign:"left",position:'relative',left:"10%"}}>
                        <h3>Our Chefs</h3><br />
                        <p>They make sauces sing and salads dance. They create magic with skill,<br />
                        knowledge, passion and stirring spoons (among other things). They<br /> make 
                        goodness so good, it doesn't know what to do with itself. We do<br /> though.
                        We send it to you.
                        </p>
                    </div>
                    <div className="col-sm">
                        <img src={HappyChef} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={Clock} />
                    </div>
                    <div className="col-sm" style={{textAlign:"left",marginTop:"120px"}}>
                        <h3>45 min delivery</h3>
                    </div>
                </div><br /><br />
            </div>
        )
    }
}
