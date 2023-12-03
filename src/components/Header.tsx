export const Header = () => {
  return (
    <nav className='border-gray-200 bg-primary-800 text-white'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a
          href={'./'}
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <span className='bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-2xl font-extrabold tracking-widest text-transparent'>
            AYP
          </span>
        </a>
      </div>
    </nav>
  );
};
