import React from 'react' 
import {Container,Tital} from './groupElement'
import CARD_1 from './each card/card-One'
import CARD_2 from './each card/card-Two'
import CARD_3 from './each card/card-three'
import '../choose-us/flex.css';



const FContainer = () => {
return ( 
<>  
<Tital>Book Now</Tital>
<Container> 
<CARD_1/>
<CARD_2 />
<CARD_3/>
</Container>

</>
)


}

export default FContainer;