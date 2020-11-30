import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    };

    addIngredientHandler = (type) => {
        // add new ingredient 
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = { ...this.state.ingredients };
        updatedIngredient[type] = updatedCount;
        // update burger price
        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type];
        const updatedPrice = oldPrice + priceAddition;
        // update burger builder state
        this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice });

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            // remove ingredient
            const updatedCounted = oldCount - 1;
            const updatedIngredient = { ...this.state.ingredients };
            updatedIngredient[type] = updatedCounted;
            // update burger price
            const oldPrice = this.state.totalPrice;
            const priceDeduction = INGREDIENT_PRICES[type]
            const updatedPrice = oldPrice - priceDeduction;
            // update burger builder state
            this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice })
        }
    }

    render() {
        const disableInfo = { ...this.state.ingredients };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    disabled={disableInfo} />
            </Aux>
        );
    }
}

export default BurgerBuilder;