import React, { Component } from 'react';
import Proptypes from 'prop-types';
import {
  Container,
  ContainerInput,
  InputTextNumber,
  ContainerButtons,
  TextButtons,
  Button,
} from './style';
import api from '../../services/api';

class Game extends Component {
  static navigationOptions = {
    title: 'Game',
  };

  static propTypes = {
    navigation: Proptypes.shape({
      getParam: Proptypes.func,
    }).isRequired,
  };

  state = { user: null, loading: false, text: '' };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = await navigation.getParam('user');
    this.setState({ user });
  }

  handleOnChangeText = e => {
    const number = Number(e);
    if (number <= 10 && number >= 1) {
      this.setState({ text: number });
    } else if (number == 0) {
      this.setState({ text: '' });
    }
  };

  handleColletedCoin = async () => {
    const { text } = this.state;

    const number = Number(text);
    const qtd = number > 0 ? number : 1;
    const { user } = this.state;
    await api.post('/colletedCoin', {
      idUser: user.id,
      value: qtd,
    });
  };

  handleDead = async () => {
    await this.execPost('/dead');
  };

  handleKillBowser = async () => {
    const { user } = this.state;
    await this.execPost('/killMonster', {
      idUser: user.id,
      idMonster: 2,
    });
  };

  handleKillTurtle = async () => {
    const { user } = this.state;
    await api.post('/killMonster', {
      idUser: user.id,
      idMonster: 1,
    });
  };

  async execPost(route, body = null) {
    this.setState({ loading: true });
    const { text } = this.state;
    const { user } = this.state;
    const idUser = user.id;

    const number = Number(text);
    const qtd = number > 0 ? number : 1;

    for (let i = 0; i < qtd; i++) {
      await api.post(route, body || { idUser });
    }

    this.setState({ loading: false });
  }

  render() {
    const { text } = this.state;
    return (
      <Container>
        <ContainerInput>
          <InputTextNumber
            placeholder="Vezes que deseja inserir o registro."
            keyboardType="numeric"
            onChangeText={this.handleOnChangeText}
            value={String(text)}
          />
        </ContainerInput>
        <ContainerButtons>
          <Button onPress={this.handleColletedCoin}>
            <TextButtons>Coletar Moeda</TextButtons>
          </Button>
          <Button onPress={this.handleDead}>
            <TextButtons>Morrer</TextButtons>
          </Button>
          <Button onPress={this.handleKillBowser}>
            <TextButtons>Matar Bowser</TextButtons>
          </Button>
          <Button onPress={this.handleKillTurtle}>
            <TextButtons>Matar turtle</TextButtons>
          </Button>
        </ContainerButtons>
      </Container>
    );
  }
}

export default Game;
