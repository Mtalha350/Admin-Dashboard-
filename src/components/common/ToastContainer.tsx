import Toast from './Toast';

type Props = {
  open: boolean;
};

export default function ToastContainer({ open }: Props) {
  return (
    <div className='pointer-events-none fixed right-6 top-6 z-9999'>
      <div
        className={`transition-all duration-300 ${
          open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}
      >
        {open && (
          <Toast
            title='Invoice Created'
            description='The invoice has been created successfully.'
          />
        )}
      </div>
    </div>
  );
}
