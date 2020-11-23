import React, { Component } from 'react';
import propTypes from 'prop-types';

import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        // init the ingredient base on type
        switch (this.props.type) {
            // bread bottom ingredient
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            // bread top ingredient
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            // meat ingredient
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            // cheese ingredient
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            // salad ingredient
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            // bacon ingredient
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            // nothing
            default:
                ingredient = null;
        }
        return ingredient;
    };
}  

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
}

export default BurgerIngredient;