import React from 'react';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef(({ as, href, ...rest }, ref) => {
	return (
		<NextLink href={href} as={as}>
			<a ref={ref} {...rest} />
		</NextLink>
	);
});

//Décorateur pour le link de NextJS
const Link = ({ href, classNameProps, innerRef, naked, ...rest }) => {
	if (naked)
		return <NextComposed className={classNameProps} ref={innerRef} href={href} {...rest} />;
	
	return <MuiLink component={NextComposed} className={classNameProps} ref={innerRef} href={href} {...rest} />;
};

Link.defaultProps = {
	href: '/',
	classNameProps: '',
	innerRef: null,
	naked: false,
};

export default React.forwardRef((props, ref) => <Link {...props} innerRef={ref} />);