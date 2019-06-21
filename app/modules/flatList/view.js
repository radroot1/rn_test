import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import { ListItem } from 'react-native-elements';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from 'AwesomeProject/app/AppViewState';


class Users extends React.Component {
    state = {
        seed: 1,
        page: 1,
        users: [],
        isLoading: false,
        isRefreshing: false,
    };

    loadUsers = () => {
        const { seed, page } = this.state;
        const { users } = this.props;
        this.setState({ isLoading: true });

        fetch(`https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`)
            .then(res => res.json())
            .then(res => {
                const users = page === 1 ? res.results : [...this.props.users, ...res.results];
                this.props.actions.addUsers(users).then(()=>{
                    this.setState({
                        isRefreshing: false,
                    });
                })
            })
            .catch(err => {
                console.error(err);
            });
    };

    handleRefresh = () => {
        this.setState({
            seed: this.state.seed + 1,
            isRefreshing: true,
        }, () => {
            this.loadUsers();
        });
    };

    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.loadUsers();
        });
    };

    componentDidMount() {
        this.loadUsers();
    };

    render() {
        const { isRefreshing } = this.state;
        const { users } = this.props;

        return (
            <View style={s.scene}>
                {
                    users &&
                    <FlatList
                        data={users}
                        renderItem={({item}) => (
                            <ListItem
                                roundAvatar
                                title={item.name.first}
                                subtitle={item.email}
                                avatar={{uri: item.picture.thumbnail}}
                            />
                        )}
                        keyExtractor={i => i.email}
                        refreshing={isRefreshing}
                        onRefresh={this.handleRefresh}
                        onEndReached={this.handleLoadMore}
                        onEndThreshold={0}
                    />
                }
            </View>
        )
    }
}

const s = StyleSheet.create({
    scene: {
        flex: 1,
        paddingTop: 25,
    },
    user: {
        width: '100%',
        backgroundColor: '#333',
        marginBottom: 10,
        paddingLeft: 25,
    },
    userName: {
        fontSize: 17,
        paddingVertical: 20,
        color: '#fff'
    }
});

export default connect(
    state => ({
        users: state['app']['users']
    }),
    dispatch => {
        return {
            actions: bindActionCreators(actions, dispatch),
        }
    }
)(Users);