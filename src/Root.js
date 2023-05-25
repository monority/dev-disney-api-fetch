import { BrowserRouter , Switch , Route } from 'react-router-dom/cjs/react-router-dom'
import NotFound from './components/NotFound'
import React from 'react'
import App from './App'
import MovieDetail from './components/MovieDetail'
import Movie from './components/Movie'

const Root = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/movies/:id" component={MovieDetail}/>
        <Route component={NotFound}/>

        </Switch>
        </BrowserRouter>
    )
}

export default Root