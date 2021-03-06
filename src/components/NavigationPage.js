'use strict'

import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import {
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener
} from 'react-navigation-redux-helpers';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddGoldBugPage2 from '../containers/AddGoldBugPage2Container';
import HomePage from '../containers/HomePageContainer';
import PositionSettingHome from '../containers/PositionSettingHomeContainer'
import TimeSettingPage from '../containers/TimeSettingPageContainer'

export const routerConfig = {
    HomePage:{
        screen: HomePage,
        navigationOptions: (navigation) => ({
            header: null
        })
    },
    PositionSettingHome:{
        screen:PositionSettingHome,
        navigationOptions: (navigation) => ({
            header: null
        })
    },
    AddGoldBugPage2: {
        screen: AddGoldBugPage2,
        navigationOptions: (navigation) => ({
            header: null
        })
    },
    TimeSettingPage:{
        screen: TimeSettingPage,
        navigationOptions: (navigation) => ({
            header: null
        })
    }
};
export const Navigator_ = StackNavigator(routerConfig);
export const navigator_midderware = createReactNavigationReduxMiddleware("root", state => state.navigator);
export const addListener = createReduxBoundAddListener("root");

export default class AppNavigator extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        navigator: PropTypes.object.isRequired
    };
    constructor(props, context) {
        console.log("AppNavigator props");
        console.log(props);
        super(props, context);

    }
    render() {
        return (
            <Navigator_ navigation={
                addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.navigator,
                    addListener
                })
            }>
            </Navigator_>
        )
    }
}