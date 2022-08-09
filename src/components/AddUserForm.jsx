import React from 'react'
import {useForm} from 'react-hook-form'
const AddUserForm = (props) => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        // console.log(data)
        props.addUser(data)

        e.target.reset();
    }
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label> Name</label>
            <input type="text" name='name' {...register("name", {required: {value:true, message: "Ingrese el nombre por favor"}})}/>
            <span className='text-danger text-small d-block mb-2'>{errors.name?.message}</span>
            <label> Username</label>
            <input type="text" name='username' {...register("username", { required: {value: true, message: "El campo es requerido"}})}/>
            <span className='text-danger text-small d-block mb-2'>{errors.username?.message}</span>
            <button>Add new user</button>
        </form>
        );
}
 
export default AddUserForm;




//Como realizar la validacion


// const { register, formState: { errors }, handleSubmit } = useForm();

//   const onSubmit = (data) => console.log(data);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true })} />
//       {errors.firstName?.type === 'required' && "First name is required"}
      
//       <input {...register("lastName", { required: true })} />
//       {errors.lastName && <p>Last name is required</p>}

//       <input {...register("mail", { required: "Email Address is required" })} />
//       <p>{errors.mail?.message}</p>
      
//       <input type="submit" />
//     </form>
//   );