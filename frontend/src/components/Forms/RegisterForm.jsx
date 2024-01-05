import React, {useContext} from 'react';
import AuthContext from '../../context/AuthContext'
import ReusableForm from './ReusableForm';
import useInputChange from '../../hooks/useInputChange';
import { Link } from 'react-router-dom';



const RegisterForm = () => {

  let {loginUser} = useContext(AuthContext)
  

  const { inputValues, handleInputChange} = useInputChange({
    username: '',
    password: '',
  });

  const formFields = [
    { name: 'username', label: 'Username', type: 'text', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
  ];

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <ReusableForm
              formState={inputValues}
              handleChange={handleInputChange}
              handleSubmit={loginUser}
              formFields={formFields}
              buttonText={'Sign In'}
            />
          </div>
    
      </div>
    </div>
    </>
  )
};

export default RegisterForm;
