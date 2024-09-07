import React from 'react'
import Campaigns from '../components/ui/Campaigns';
import Carousel from '../components/Carousel';
import MenuWrapper from '../components/product/MenuWrapper';


const Index = () => {
  return (
    <div className="">
      <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper/>
      </div>
     
    </div>
  );
}

export default Index;