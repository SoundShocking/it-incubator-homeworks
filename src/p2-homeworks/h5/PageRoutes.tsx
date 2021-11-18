import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
	PRE_JUNIOR: '/pre-junior',
	JUNIOR: '/junior',
	JUNIOR_PLUS: '/junior-plus'
}

function PageRoutes() {
	return (
		<div>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path={ PATH.PRE_JUNIOR } element={ <PreJunior /> } />
				<Route path={ PATH.JUNIOR } element={ <Junior /> } />
				<Route path={ PATH.JUNIOR_PLUS } element={ <JuniorPlus /> } />

				<Route path="*" element={ <Error404 /> } />
			</Routes>
		</div>
	)
}

export default PageRoutes
