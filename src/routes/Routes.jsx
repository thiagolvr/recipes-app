import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import RecipeDetails from '../pages/RecipeDetails';
import RecipeInProgress from '../pages/RecipeInProgress';
import '../styles/RecipeInProgress.css';

function Routes() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route
          path="/foods/:id/in-progress"
          render={ (props) => <RecipeInProgress { ...props } /> }
        />
        <Route
          exact
          path="/foods/:id"
          render={
            (props) => <RecipeDetails { ...props } />
          }
        />
        <Route exact path="/foods" component={ Foods } />
        <Route
          path="/drinks/:id/in-progress"
          render={ (props) => <RecipeInProgress { ...props } /> }
        />
        <Route
          exact
          path="/drinks/:id"
          render={ (props) => <RecipeDetails { ...props } /> }
        />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </div>
  );
}

export default Routes;
