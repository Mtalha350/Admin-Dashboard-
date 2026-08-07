import { Link } from 'react-router-dom';

import NotFoundIcon from '../assets/icons/NotFoundIcon';

export default function NotFoundPage() {
  return (
    <div className='flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8'>
      <div className='flex w-full max-w-4xl flex-col items-center text-center'>
        {/* Illustration */}
        <div className='w-full max-w-55 sm:max-w-70 md:max-w-85 lg:max-w-105 xl:max-w-125'>
          <NotFoundIcon />
        </div>

        {/* Title */}
        <h1 className='mt-6 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl'>
          Page not found
        </h1>

        {/* Description */}
        <p className='mt-3 max-w-xl px-2 text-sm leading-6 text-slate-500 sm:text-base md:text-lg'>
          Sorry, we couldn't find the page you're looking for.
        </p>

        {/* Button */}
        <Link
          to='/'
          className='mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-teal-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-800 sm:w-auto sm:px-8 sm:text-base'
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
