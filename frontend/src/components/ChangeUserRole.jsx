import React, { useState } from 'react'
import ROLE from '../common/role'
import { IoMdClose } from "react-icons/io";
import summaryApi from '../common';
import { toast } from 'react-toastify';

const ChangeUserRole = ({
    name,
    email,
    role,
    userId,
    onClose,
    callFunc 
}) => {
    const [userRole,setUserRole] = useState(role)

    const handleOnChangeSelect = (e) => {
        setUserRole(e.target.value);
        console.log(e.target.value);
    }

    const updateUserRole = async() => {
        const fetchResponse = await fetch(summaryApi.updateUser.url,{
            method : summaryApi.updateUser.method,
            credentials : 'include',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({
                userId : userId,
                role : userRole
            })
        })

        const dataResponse = await fetchResponse.json()

        if (dataResponse.success) {
            toast.success(dataResponse.message)
            onClose() 
            callFunc()
        }

        console.log("dataResponse",dataResponse);
    }
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-center items-center bg-slate-200/50'>
      <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>

        <button onClick={onClose} className='block ml-auto cursor-pointer'>
            <IoMdClose />
        </button>

        <h1 className='pb-4 text-lg font-medium'>Change User Role</h1>   
        <p>Name : {name}</p> 
        <p>Email : {email}</p> 
        
        <div className='flex justify-between items-center my-4'>
            <p>Role :</p>
            <select className='border px-4 py-1' value={userRole} onChange={handleOnChangeSelect}>
                {
                    Object.values(ROLE).map(item => {
                        return (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        )
                    })
                }
            </select>
        </div>

        <button onClick={updateUserRole} className='w-fit mx-auto block py-2 px-3 rounded-full bg-red-600 text-white hover:bg-red-700 cursor-pointer'>
            Change Role
        </button>
        
      </div>
    </div>
  )
}

export default ChangeUserRole
