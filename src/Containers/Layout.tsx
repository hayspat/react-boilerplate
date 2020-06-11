import React from 'react';

const Layout = (props: { children: React.ReactNode }) => {
  return <div className="container min-h-screen mx-auto bg-white">{props.children}</div>;
};

export default Layout;
