import Header from './Header';

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className='flex-1'>{props.children}</main>
    </>
  );
};

export default Layout;
