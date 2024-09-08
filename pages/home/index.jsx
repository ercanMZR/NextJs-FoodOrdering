import React from 'react'
import Campaigns from '../components/ui/Campaigns';
import Carousel from '../components/Carousel';
import MenuWrapper from '../components/product/MenuWrapper';
import About from '../components/ui/About';


const Index = () => {
  return (
    <div className="">
      <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper/>
      <About/>
      </div>
     
    </div>
  );
}

export default Index;