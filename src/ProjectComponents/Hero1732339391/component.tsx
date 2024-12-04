import React from 'react';
import * as ReactHookForm from 'react-hook-form';

const Hero: React.FC = () => {
  const { register, handleSubmit } = ReactHookForm.useForm();

  const onSubmit = (data: { email: string }) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-full">
          <h1 className="text-4xl font-bold mb-4">Unleash Your Inner Paleontologist</h1>
          <p className="text-xl mb-6">Buy, sell, and trade preaaaaahistoric wonders in the world's premier dinosaur marketplace</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="flex items-center mt-6">
            <input
              {...register('email')}
              type="email"
              placeholder="Email Santa"
              className="p-3 rounded-l-lg text-black flex-1"
            />
            <button type="submit" className="bg-red-600 text-white p-3 rounded-r-lg">
              <i className='bx bx-envelope mr-2'></i>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Hero as component };