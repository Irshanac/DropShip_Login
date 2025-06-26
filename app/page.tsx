'use client';
import { useForm } from 'react-hook-form';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

type FormData = {
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white p-4">
      <div className="flex justify-center mb-4">
    <img src="/logo.svg" alt="Dropship Logo" className="h-12 w-auto" />
  </div>
      <div className="flex justify-center items-center flex-grow">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" shadow-2xl rounded-2xl p-8 w-full bg-gray-50"
          >
            <p className="text-lg text-black font-semibold text-center mb-2">Sign in to Dropship</p>
            <p className="text-center text-sm mb-6 text-gray-600">
              Welcome back! Sign in to your account below
            </p>

            <div className="flex justify-between mb-5 space-x-2">
              <button
                type="button"
                className="flex items-center  text-black justify-center gap-2 border-1 border-gray-200 hover:bg-gray-50 w-full py-2 rounded-xl"
              >
                <FcGoogle size={20} />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center text-black gap-2 border-1 border-gray-200 hover:bg-gray-50 w-full py-2 rounded-xl"
              >
                <FaApple size={20} className='text-black' />
                Apple
              </button>
            </div>

            <div className="flex items-center gap-2 my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="text-xs text-gray-400 whitespace-nowrap">or sign in with email</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className="mb-4">
              <input
                {...register('email', { required: 'Email is required' })}
                type="email"
                placeholder="Enter email"
                className="w-full p-2 border border-gray-200 rounded-xl placeholder:text-sm placeholder:text-gray-400 focus:outline-blue-700 hover:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                {...register('password', { required: 'Password is required' })}
                type="password"
                placeholder="Enter password"
                className="w-full p-2 border border-gray-200 rounded-xl placeholder:text-sm placeholder:text-gray-400 focus:outline-blue-700 hover:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Sign in
            </button>
          </form>
          <div className="text-center mt-4">
            <a href="/" className="text-sm text-blue-500 hover:text-blue-700">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 mb-4">
        <div className="w-full max-w-md border-t border-gray-300 pt-4 text-center">
          <p className="text-sm">
            New to Dropship?{' '}
            <a href="/" className="text-blue-500 hover:text-blue-700">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
