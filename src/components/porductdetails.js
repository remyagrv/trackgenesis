import React from 'react';
import Card from "react-bootstrap/Card";
import Product2 from './product2.png';
import Product3 from './product3.jpg';
import Product4 from './product4.jpg';
import Product5 from './product5.jpg';
import Product6 from './product6.jpg';
import Product7 from './product7.jpg';
const Productdetails = () => {
return (
	<div>
	<Card className='card' >
  <Card.Img variant="top" src={Product2} />
  <Card.Body>
    <Card.Title>Murmichan</Card.Title>
    <Card.Text>
    Murmichan is produced in a traditional manner using natural botanicals for both flavouring and colouring.We use a mixture of traditional and Scottish botanicals including grande wormwood, fennel seed, hyssop and much more.


    </Card.Text>
   
  </Card.Body>
</Card>
<Card className='card' >
  <Card.Img variant="top" src={Product3} />
  <Card.Body>
    <Card.Title>Lost Loch Spirits Haroosh</Card.Title>
    <Card.Text>
    An Age Old Family Recipe That Embodies The Spirit Of Scottish Flavours, Haroosh originates from the North East of Scotland and has been made by the family for over 100 years.
    </Card.Text>
   
  </Card.Body>
</Card>
<Card className='card' >
  <Card.Img variant="top" src={Product4} />
  <Card.Body>
    <Card.Title>Auld Alliance Absinthe</Card.Title>
    <Card.Text>
    Murmichan is Scotland’s first absinthe so it is fitting that the first absinthe to be aged in whisky casks is Murmichan. Aged for 20 months in Tomintoul first fill American oak casks the absinthe takes its colour.
    </Card.Text>
   
  </Card.Body>
</Card>
<Card className='card'>
  <Card.Img variant="top" src={Product5} />
  <Card.Body>
    <Card.Title>Rucolino</Card.Title>
    <Card.Text>
    It may have similar properties to rocket fuel but its rocket the salad leaf which forms the base for this lovely old Italian liqueur. We love history at Lost Loch so when we came across an old recipe book with this gem in it – we couldn’t resist! 
    </Card.Text>
   
  </Card.Body>
</Card>
<Card className='card'>
  <Card.Img variant="top" src={Product6} />
  <Card.Body>
    <Card.Title>Blended Caribbean Rum</Card.Title>
    <Card.Text>
    Tales of little pods giving bursts of woody and peppery flavours and notes of tobacco, gingerbread and roasted nut, led us to Papua New Guinea where we discovered delicious ethically sourced vanilla beans. 
    </Card.Text>
   
  </Card.Body>
</Card>
<Card className='card'>
  <Card.Img variant="top" src={Product7} />
  <Card.Body>
    <Card.Title>Raspberry & Stem Ginger</Card.Title>
    <Card.Text>
   Lost Loch Spirits original gin has been infused with Aberdeenshire raspberries, spicy stem ginger pieces and syrup to create this one-off gin. Its red, sweet, spicy and simply delicious!
    </Card.Text>
   
  </Card.Body>
</Card>
	</div>
);
};

export default Productdetails;
