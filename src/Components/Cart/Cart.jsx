/* eslint-disable react/prop-types */
import React from 'react';



 // show data info step 4: selectedActor receives and destructuring
 // // // show data info step 13: show remainngTotalPrice receives and destructuring
 // // // show data info step 13.1: show totalCost receives and destructuring
const Cart = ({selectedActor, remainngTotalPrice, totalCost}) => {
    // show data info step 5: selectedActor receives props, destructuring
    console.log(selectedActor);
    return (
        <div>
            <h3>Total Actors: {selectedActor.length}</h3>
            {/* // //  show data info step 14: show total remaining  */}
            <h5>Remaining: {remainngTotalPrice}</h5>
            {/* // //  show data info step 14.1: show total cost  */}
            <h5>Total Cost: {totalCost}</h5>

            {/* // show data info step 6: create map loop  */}
            {selectedActor.map((actor) => (
                
            // eslint-disable-next-line react/jsx-key
            <li key={actor.id}>{actor.name}</li>  

            )) }
        </div>
    );
};

export default Cart;