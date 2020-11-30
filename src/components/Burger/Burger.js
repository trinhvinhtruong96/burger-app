import React from 'react';

import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    // transform ingredients object to array
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((pre, cur) => {
            return pre.concat(cur);
        }, []);
    // display recommend in case burger don't have any ingredient
    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" /> 
            {transformIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;