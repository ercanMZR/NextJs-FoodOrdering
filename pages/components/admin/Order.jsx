import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'

const Order = () => {
  return (
    <div className='lg:p-8 lg:mt-0 mt-5'>
    <Title addClass="text-[40px]">Products</Title>
    <div className="overflow-x-auto w-full mt-5">
<table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
  <thead className="text-xs text-gray-400 uppercase bg-gray-700">
    <tr>
      <th scope="col" className="py-3 px-6">
        Product ID
      </th>
      <th scope="col" className="py-3 px-6">
        CUSTOMER
      </th>
      <th scope="col" className="py-3 px-6">
        TOTAL
      </th>
      <th scope="col" className="py-3 px-6">
        PAYMENT
      </th>
      <th scope="col" className="py-3 px-6">
        STATUS
      </th>
      <th scope="col" className="py-3 px-6">
        ACTION
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
        <Image src="/images/f1.png" alt='' width={50} height={50} ></Image>
      </td>
      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
        630404...
      </td>
      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
        Ercan MUZIR
      </td>
      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
        $12
      </td>
      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
       <button className='btn-primary !bg-success'>Next Stage</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
</div>

  )
}

export default Order