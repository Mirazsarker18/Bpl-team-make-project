import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {
    // Step 1: Create hooks state 
    const [allActors, setAllActors] = useState([]);

     // function step 6: set use state 
      // show data info step 2: selectedActor pass props Cart component
     const [selectedActor, setSelectedActor] = useState([]);

     // // show data info step 10: set total price calculation value, set new state remaingTotalPrice
     const [remainngTotalPrice, setRemainngTotalPrice] = useState(0);

     // // show data info step 11: set total price calculation value, set new state count total cost value
     const [totalCost, setTotalCost] = useState(0);


    // step 2 : fetch data from fetch
    useEffect(() => {
        fetch('./data.json')
        .then((response) => response.json())
        // step 3: pass state data
        .then((data) => setAllActors(data));
    }, [])

    // step 3.1: check console log data confirm
    // console.log(allActors);

    // step 5: and function step 1: create function
    // function step 5: set function actor parameters
    const handleSelectActor = (actor) => {

        // // show data info step 7: actor right data find item and arrow functions
        const isExist = selectedActor.find(item => item.id === actor.id);

        // // show data info step 9.1: set price calculation value nested new condition for default price set in let, and set initial actor salary value
        let count = actor.salary;
        // // show data info step 8: actor right data find item and use condition
        if(isExist) {
          return alert('all ready selected actor');
        }
        else{
            // // show data info step 9: set price calculation value new foreach condition selectedActor value
            selectedActor.forEach((item) => {
                count = count + item.salary;
            });

            // // show data info step 10: set total price calculation value
            const totalRemainngPrice = 20000 - count;

            // //  show data info step 15: show total cost validation condition step
            if(count > 20000){
              return alert('Your total amount is over');
            }else{
                // // show data info step 11.1: set total price calculation value, set new state count total cost count value
             setTotalCost(count);

             // // show data info step 10.1: set total price calculation value, set new state count total cost value
             setRemainngTotalPrice(totalRemainngPrice);

             // function step 7: spread operator use and copy step 6 all data array
            setSelectedActor([...selectedActor, actor]);
            }
             
        }
        
    };
    // console.log(selectedActor);



    return (
        // Step 1 : image and others content add
        <div className='main-container text-white text-center'>
            <div className="home-container flex">
            <div className="card-container w-9/12 flex flex-wrap gap-4 px-4 py-10">
                {/* step 4 : create map loop */}
           {
            // function step 3: actor call button function parameter

            allActors.map((actor) => (
                 // eslint-disable-next-line react/jsx-key
                 <div key={actor.id} className="card w-64 h-[400px] border border-gray-600 border-solid px-4 py-10">
           <div className="card-img">
            <img className=' w-20 rounded-full inline' src={actor.image} alt="" />
           </div>
           <h2 className='text-white'>{actor.name}</h2>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, recusandae?</p>
           <div className="info-content flex justify-evenly mt-6">
            <p>{actor.salary}</p>
            <p>{actor.role}</p>
           </div>
           {/* function step 2: call function and set button onclick  */}
           {/* function step 4: actor map value set function parameter  */}
           <button onClick={() => handleSelectActor(actor)} className='btn mt-6'>Select</button>
            </div>
            ))
           }
            </div>
            <div className="cart">
                {/* // show data info step 1: set cart component here */}
                <Cart
                // // show data info step 3: selectedActor receives props Cart component
                selectedActor={selectedActor}
                // // show data info step 12: show remainngTotalPrice cart component
                remainngTotalPrice={remainngTotalPrice}
                // // show data info step 12.1: show totalCost cart component
                totalCost={totalCost}
                
                ></Cart>
            </div>
            </div>
        </div>
    );
};

export default Home;