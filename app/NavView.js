import React from 'react';
import {createAppContainer, NavigationActions} from 'react-navigation';
import NavRoutes from './NavRoutes';
import {connect} from 'react-redux';
const AppContainer = createAppContainer(NavRoutes);

function getActiveRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getActiveRouteName(route);
    }
    return route.routeName;
}

class NavigatorView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <AppContainer/>
        );
    }
}

export default connect(
    state => {
        return {
            app: state.app,
        }
    }
)(NavigatorView);
