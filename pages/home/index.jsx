import React from 'react'
import Campaigns from '../components/ui/Campaigns';
import Carousel from '../components/Carousel';
import MenuWrapper from '../components/product/MenuWrapper';
import About from '../components/ui/About';
import Reservation from '../components/Reservation';
import Customers from '../components/customers/Customers';


const Index = ({categoryList}) => {
  return (
    <React.Fragment>
      <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList}/>
      <About/>
      <Reservation/>
      <Customers/>
      </div>
     
    </React.Fragment>
  );
}

export default Index;