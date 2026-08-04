import { X } from 'lucide-react';

type Props = {
  open: boolean;

  title: string;

  onClose: () => void;

  children: React.ReactNode;
};

export default function Modal({ open, title, children, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-full max-w-xl rounded-3xl bg-white shadow-2xl'
      >
        <div className='flex items-center justify-between border-b p-6'>
          <h2 className='text-2xl font-bold'>{title}</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className='p-6'>{children}</div>
      </div>
    </div>
  );
}
