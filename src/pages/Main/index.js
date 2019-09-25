import React, { Component } from 'react';
import PropType from 'prop-types';
import {
  Container,
  List,
  User,
  Name,
  Avatar,
  Content,
  ImageAward,
} from './styles';
import api from '../../services/api';

class Main extends Component {
  static navigationOptions = {
    title: 'Usuários',
  };

  static propTypes = {
    navigation: PropType.shape({
      navigate: PropType.func,
    }).isRequired,
  };

  state = { users: [] };

  async componentDidMount() {
    const users = await api.get('/users');
    this.setState({ users: users.data });
  }

  handleOnPressUser = user => {
    const { navigation } = this.props;
    navigation.navigate('User', { user });
  };

  render() {
    const { users } = this.state;
    return (
      <Container>
        <List
          data={users}
          keyExtractor={user => user.name}
          renderItem={({ item }) => (
            <User
              onPress={() => {
                this.handleOnPressUser(item);
              }}
            >
              <Avatar source={{ uri: item.avatar }} />
              <Content>
                <Name>{item.name}</Name>
                <ImageAward
                  source={{
                    uri:
                      'https://img.lovepik.com/element/40054/1725.png_860.png',
                  }}
                />
              </Content>
            </User>
          )}
        />
      </Container>
    );
  }
}

export default Main;
