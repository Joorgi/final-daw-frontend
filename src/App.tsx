import './App.css'
import { Switch, Route } from 'wouter'
import LandigPage from './pages/landigPage'
import Navbar from './components/NavBar'
import { ThemeContextProvider } from './context/ThemeContext'
import ErrorPage from './pages/errorPage'
import BrandsPage from './pages/brandsPage'
import BrandModal from './components/BrandModal'

function App() {
	return (
		<ThemeContextProvider>
			<div className='App'>
				<Navbar />
				<main>
					<Switch>
						<Route component={LandigPage} path='/'></Route>
						<Route component={BrandsPage} path='/marcas'></Route>
						<Route path='/marca/:id'>
							{params => <BrandModal id={params.id} />}
						</Route>
						<Route component={ErrorPage} path='/:anything*'></Route>
					</Switch>
				</main>
			</div>
		</ThemeContextProvider>
	)
}

export default App
