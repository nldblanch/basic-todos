import { Link, useNavigate } from 'react-router';
import Button from './Button';
import { useState } from 'react';
import { HiBars3, HiChevronDown, HiMagnifyingGlass } from 'react-icons/hi2';
import Menu from './Menu';

const ErrorMenu = () => {
  const errorScenarios = [
    { label: 'Component Error', path: '/purposeful-errors?error=component' },
    { label: '404', path: '/this-does-not-exist' },
    { label: '500', path: '/purposeful-errors?loaderError=500' },
    { label: '401', path: '/purposeful-errors?loaderError=401' },
    {
      label: 'Action Error',
      path: '/purposeful-errors?actionError=validation',
    },
  ];
  return (
    <Menu>
      <Menu.Toggle id='errors'>
        <span className='flex items-center gap-2 text-sm font-normal'>
          Errors
          <HiChevronDown />
        </span>
      </Menu.Toggle>
      <Menu.List id='errors'>
        {errorScenarios.map(({ label, path }) => (
          <Link
            to={path}
            className='block h-full w-full px-2 text-sm text-white hover:bg-teal-600'
          >
            {label}
          </Link>
        ))}
      </Menu.List>
    </Menu>
  );
};

function NavLinks() {
  return (
    <nav className='flex gap-6 max-md:hidden'>
      <Link to='/'>Home</Link>
      <Link to='/blog'>Blog</Link>
      {/* <p>Divs: {divCount}</p>
                    <p>Depth: {depth}</p> */}
    </nav>
  );
}

function ButtonGroup() {
  return (
    <>
      <button className='py-3 pl-4'>
        <HiMagnifyingGlass />
      </button>
      <Button variant='secondary'>Login</Button>
      <Button>Subscribe</Button>
    </>
  );
}

const BURGER_SIZE = 32;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const additionalStyling = isOpen ? '-translate-x-6' : 'translate-x-6';
  return (
    <header className='header grid grid-cols-1 grid-rows-2 items-center'>
      <div className='content-container flex items-center justify-between md:grid md:grid-cols-3'>
        <NavLinks />

        <Link to='/' className='w-full overflow-hidden'>
          <h1
            className={`font-serif text-4xl max-md:transition-all max-md:${additionalStyling} mx-auto text-center font-semibold`}
          >
            News
            <span className={`italic ${isOpen ? 'max-[600px]:hidden' : ''}`}>
              Today
            </span>
          </h1>
        </Link>

        {/* Desktop buttons */}
        <div className='ml-auto flex gap-2 max-md:hidden'>
          <ButtonGroup />
        </div>

        {/* Mobile menu that extends left */}
        <div className='ml-auto flex items-center md:hidden'>
          <div
            className={`flex items-center gap-2 overflow-hidden border-teal-700 transition-all duration-300 ease-in-out ${isOpen ? 'w-64 border-l pl-4 opacity-100' : 'w-0 opacity-0'} `}
          >
            <ButtonGroup />
          </div>

          <button
            type='button'
            className={`ml-2 p-2 transition-all duration-300 ${isOpen ? '-rotate-90' : ''}`}
            onClick={toggle}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <HiBars3 size={BURGER_SIZE} />
          </button>
        </div>
      </div>

      <nav className='relative col-span-3 mb-8 border-t border-gray-200 p-2'>
        <div className='pointer-events-none absolute inset-x-0 top-0 h-full bg-teal-700' />
        <ul className='content-container relative z-10 flex items-center justify-center gap-4 text-white'>
          {['Tailwind CSS', 'MUI', 'Chakra'].map((topic) => (
            <li key={topic}>
              <Link
                to={
                  topic.toLowerCase() === 'tailwind css'
                    ? '/'
                    : `/${topic.toLowerCase()}`
                }
                className='text-sm text-white hover:underline'
              >
                {topic}
              </Link>
            </li>
          ))}
          <li>
            <ErrorMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
