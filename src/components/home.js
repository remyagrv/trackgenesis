import React from 'react';
import './home.css';
import product from './product1.jpg';
import badge from './eenoobadge.png';

const Home = () => {
return (
    <div className='App-body'>
    <div className='box'>
    <h1 style={{marginLeft:"50px", fontSize:"35px", fontFamily: "Times New Roman",marginTop:"20px",color:"orange"}}>eeNoo - Scottish Gin</h1>
    <img style={{width:"300px"}} src={product}></img>
    <p>When we crafted our gin, eeNoo, we wanted to create a flavour profile that encompassed the essence of a traditional gin whilst embracing flavours of the Scottish Highlands.<br></br>

eeNoo is distilled with Royal Deeside honey. The flavour profile of our honey is unique to the local area and is made up of heather, willow herb and clover pollen. To complement the honey we add heather flowers and other local botanicals. We forage a percentage of our brambleberries, raspberries and rosehip from the Deeside area and source the remainder from berry farms in Aberdeenshire and Angus. As Scottish juniper is in a critical state of decline, we source the finest juniper from the Italian highlands. We then add coriander seeds, angelica root, liquorice root, orange and lemon peel to give our gin a traditional yet smooth fruity profile.<br></br>

Water from an ancient spring in the Cairngorms National Park is added to the mix. The water is some of the purest in the world and spends 50 years being gently filtered through layers of underground rocks and crevices before becoming part of our gin.</p>
    <img style={{width:"250px"}} src={badge}></img>
    </div>
  </div>
);
};

export default Home;