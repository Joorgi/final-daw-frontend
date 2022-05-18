import './App.css'
import { Switch, Route } from 'wouter'
import LandigPage from './pages/landigPage'
import Navbar from './components/NavBar'
import { ThemeContextProvider } from './context/ThemeContext'

function App() {
	return (
		<ThemeContextProvider>
			<div className='App'>
				<Navbar />
				<main>
					<Switch>
						<Route component={LandigPage} path='/'></Route>
						<Route component={LandigPage} path='/:anything*'></Route>
					</Switch>
				</main>
			</div>
		</ThemeContextProvider>
	)
}

export default App
