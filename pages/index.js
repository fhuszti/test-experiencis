import React, { useState } from "react";
import Head from 'next/head';
import useTheme from "@material-ui/core/styles/useTheme";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Link from '../components/Link';
import { useContentStyles, useFormStyles, useHeroStyles } from '../styles/pages/login';
import { useCardStyles } from '../styles/components';

const Home = () => {
	const theme = useTheme();
	const heroClasses = useHeroStyles();
	const contentClasses = useContentStyles();
	const formClasses = useFormStyles();
	const cardClasses = useCardStyles({ maxWidth: '400px', color: theme.palette.primary.main });
	
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	
	const handleSubmit = e => {
		e.preventDefault();
		console.log({ email: emailValue, password: passwordValue });
	};
	
	return (
		<div>
			<Head>
				<title>Connexion | Test Experiencis</title>
				<link rel="icon" href="/favicon.png"/>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
			</Head>
			
			<main>
				<section className={heroClasses.root}/>
				<Container component="section" className={contentClasses.root}>
					<Card className={cardClasses.root} component="article">
						<CardHeader title="Se connecter"
									subheader="Retrouvez vos informations personnelles"
									component="header"
									avatar={
										<Avatar className={cardClasses.avatar} aria-label="Une clé" color="primary">
											<VpnKeyIcon/>
										</Avatar>
									}/>
						<CardContent component="section">
							<form onSubmit={e => handleSubmit(e)} className={formClasses.root}>
								<TextField required autoFocus fullWidth id="email" name="email" type="email"
										   value={emailValue} onChange={e => setEmailValue(e.target.value)}
										   className={formClasses.input}
										   label="Adresse email" variant="outlined"/>
								<TextField required fullWidth id="password" name="password" type="password"
										   value={passwordValue} onChange={e => setPasswordValue(e.target.value)}
										   className={formClasses.input}
										   label="Mot de passe" variant="outlined"/>
								<Link href="/" title="Réinitialiser son mot de passe">Mot de passe oublié ?</Link>
								<Button type="submit" variant="contained" color="primary" className={formClasses.button}>
									Connexion
								</Button>
							</form>
						</CardContent>
					</Card>
				</Container>
			</main>
		</div>
	);
};

export default Home;
