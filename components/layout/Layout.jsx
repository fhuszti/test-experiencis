import React from 'react';
import MenuHeader from "./MenuHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<MenuHeader/>
			{children}
			<Footer/>
		</React.Fragment>
	);
};

export default Layout;