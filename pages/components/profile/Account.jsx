import React from 'react'
import {  useFormik } from 'formik'
import { profileSchema } from '@/pages/schema/Profile'
import Title from '../ui/Title'
import Input from '../form/Input'

const Account = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
    const {handleBlur,values,handleChange,errors,touched,handleSubmit}=
    useFormik({
      initialValues:{
        fullName:"",
        phoneNumber:"",
        email:"",
        address:"",
        job:"",
        bio:"",

      },
      onSubmit,
      validationSchema:profileSchema,
    });
const inputs=[{
  id:1,
  name:"fullName",
  type:"text",
  placeholder:"Your Full Name",
  value:values.fullName,
  ErrorMessage:errors.fullName,
  touched:touched.fullName,
},
{
  id:2,
  name:"phoneNumber",
  type:"number",
  placeholder:"Your Phone Number",
  value:values.phoneNumber,
  ErrorMessage:errors.phoneNumber,
  touched:touched.phoneNumber,
},
{
  id:3,
  name:"email",
  type:"email",
  placeholder:"Your Email Address",
  value:values.email,
  ErrorMessage:errors.email,
  touched:touched.email,
},
{
  id:4,
  name:"address",
  type:"text",
  placeholder:"Your Address",
  value:values.address,
  ErrorMessage:errors.address,
  touched:touched.address,
},
{
  id:5,
  name:"job",
  type:"text",
  placeholder:"Your Job",
  value:values.job,
  ErrorMessage:errors.job,
  touched:touched.job,
},
{
  id:6,
  name:"bio",
  type:"text",
  placeholder:"Your Bio",
  value:values.bio,
  ErrorMessage:errors.bio,
  touched:touched.bio,
},

]



  return (
    <form className='lg:p-8 flex-1 lg:mt-0 mt-5'>
      <Title addClass="text-[40px]"> Account Settings</Title>
        <div>
        {inputs.map((input) => (
          <Input
            key="input.id"
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />))}
        </div>
      
    </form>
  )
}

export default Account