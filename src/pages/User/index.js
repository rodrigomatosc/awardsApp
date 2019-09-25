import React, { Component } from 'react';
import PropType from 'prop-types';
import {
  Container,
  List,
  HeaderUsuario,
  TextHeaderUsuario,
  Avatar,
  ImageAward,
  ItemAward,
  ContainerNameAward,
  CategoryAwards,
  DescriptionAward,
  ContainerValueAward,
  TextValueAward,
  ValueAward,
  ButtonInserts,
  TextButtonInserts,
} from './styles';
import api from '../../services/api';

class User extends Component {
  static propTypes = {
    navigation: PropType.shape({
      getParam: PropType.func,
      navigate: PropType.func,
    }).isRequired,
  };

  state = { awardsUser: [], user: {}, loading: false };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = await navigation.getParam('user');
    this.setState({ user });
    await this.loadAwards();
  }

  loadAwards = async () => {
    this.setState({ loading: true });
    const { user } = this.state;
    const awards = await api.get(`/awardsUsers/${user.id}`);
    this.setState({ awardsUser: awards.data, loading: false });
  };

  handleOnPressButton = () => {
    const { user } = this.state;
    const { navigation } = this.props;
    navigation.navigate('Game', { user });
  };

  renderItem = ({ item }) => {
    const { CategoryAward } = item;
    const hasAward = item.UserAwards.length > 0;

    return (
      <ItemAward hasAward={hasAward}>
        <ImageAward
          source={{
            uri: CategoryAward.image,
          }}
        />
        <ContainerNameAward>
          <CategoryAwards>{CategoryAward.name}</CategoryAwards>
          <DescriptionAward>{CategoryAward.description}</DescriptionAward>
        </ContainerNameAward>
        <ContainerValueAward>
          <TextValueAward>Valor</TextValueAward>
          <ValueAward>{Number(item.value)}</ValueAward>
        </ContainerValueAward>
      </ItemAward>
    );
  };

  render() {
    const { awardsUser, user } = this.state;
    return (
      <Container>
        <HeaderUsuario>
          <Avatar
            source={{
              uri: user.avatar,
            }}
          />
          <TextHeaderUsuario>{user.name}</TextHeaderUsuario>
        </HeaderUsuario>
        <List
          keyboardShouldPersistTaps="handled"
          data={awardsUser}
          keyExtractor={award => `${award.id} - ${Math.random()}`}
          renderItem={this.renderItem}
          onRefresh={this.loadAwards}
          refreshing={this.state.loading}
        />
        <ButtonInserts onPress={this.handleOnPressButton}>
          <TextButtonInserts>Jogar</TextButtonInserts>
        </ButtonInserts>
      </Container>
    );
  }
}

User.navigationOptions = {
  title: 'Prêmios',
};

export default User;
