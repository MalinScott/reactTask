import React from 'react';

import { Disclosure, Transition } from '@headlessui/react';
import { CgMenu, CgClose } from 'react-icons/cg';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className='w-full sticky top-0 bg-indigo-100 shadow-lg'>
      <Disclosure as='nav'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <Link
                      to='/'
                      className='text-blue-700 px-3 py-2 rounded-md text-2xl font-bold'
                    >
                      React Task
                    </Link>
                  </div>
                  <div className='hidden sm:block sm:ml-6'>
                    <div className='flex space-x-4'>
                      <NavLink
                        to='/home'
                        className='text-gray-500 px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 hover:text-blue-700'
                        activeClassName='bg-indigo-50 text-blue-700 px-3 py-2 rounded-md text-sm font-medium shadow-md'
                      >
                        Home
                      </NavLink>
                    </div>
                  </div>
                  <div className='hidden sm:block sm:ml-6'>
                    <div className='flex space-x-4'>
                      <NavLink
                        to='/add-user'
                        className='text-gray-500 px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 hover:text-blue-700'
                        activeClassName='bg-indigo-50 text-blue-700 px-3 py-2 rounded-md text-sm font-medium shadow-md'
                      >
                        Add User
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className='-mr-2 flex sm:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <CgClose
                        className='block h-6 w-6'
                        aria-hidden='true'
                        size={20}
                      />
                    ) : (
                      <CgMenu
                        className='block h-6 w-6'
                        aria-hidden='true'
                        size={20}
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Disclosure.Panel className='sm:hidden'>
                {({ close }) => (
                  <div
                    className='px-2 pt-2 pb-3 space-y-1 shadow-lg'
                    on={close}
                  >
                    <Link
                      to='/'
                      onClick={close}
                      className='text-gray-500 hover:bg-indigo-50 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium'
                    >
                      Home
                    </Link>
                    <Link
                      to='/add-User'
                      onClick={close}
                      className='text-gray-500 hover:bg-indigo-50 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium'
                    >
                      Add User
                    </Link>
                  </div>
                  
                  
                )}
                
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
