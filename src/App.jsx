import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import './App.css';

function App() {
	return (
		<Router>
			{/* <CssBaseline /> */}
			<Navbar></Navbar>
			<Routes>
				<Route path='/' Component={Home} />
			</Routes>
		</Router>
	);
}

export default App;
