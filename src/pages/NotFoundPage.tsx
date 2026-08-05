import { Link } from 'react-router-dom';

import NotFoundIcon from '../assets/icons/NotFoundIcon';

export default function NotFoundPage() {
  return (
    <div className='h-[80vh] flex items-center text-center justify-center overflow-hidden bg-slate-50 px-6'>
      <div className='mx-auto'>
        <NotFoundIcon size={400} />

        <h1 className='mt-8 text-4xl font-bold text-slate-900'>
          Page not found
        </h1>

        <p className='mt-4 max-w-md text-lg text-slate-500'>
          Sorry, we couldn't find the page you're looking for.
        </p>

        <Link
          to='/'
          className='mt-8 inline-flex items-center rounded-xl bg-teal-700 px-8 py-3 font-medium text-white transition-colors hover:bg-teal-800'
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
