import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Router from './routes/Router'

import './App.css';

function App() {
	return (
		<BrowserRouter>
			{/* <CssBaseline /> */}
			<Navbar/>
			<Router />
				{/* <Route path='/' Component={Home} /> */}
		</BrowserRouter>
	);
}

export default App;
