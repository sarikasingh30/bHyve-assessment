import Head from 'next/head';
import { Fragment } from 'react';

const Layout = ({ ele, children }) => {
  return (
    <Fragment>
      <Head>
        <title>{ele.productName}</title>
        <meta name="description" content={ele.description} />
        <meta name="category" content={ele.category} />
      </Head>
      {children}
    </Fragment>
  );
};

export default Layout;
