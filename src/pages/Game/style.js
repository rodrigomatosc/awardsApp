import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const InputTextNumber = styled.TextInput`
  flex: 1;
  height: 40px;
  background: #eeee;
  font-size: 16px;
  border-radius: 4px;
  padding: 0 15px;
  text-align: center;
  border: 1px solid #eee;
`;

export const ContainerInput = styled.View`
  margin: 20px 20px;
  min-height: 70px;
`;

export const ContainerButtons = styled.View`
  flex: 1;
  /* align-items: center; */
  justify-content: center;
`;

export const Button = styled(RectButton)`
  height: 50px;
  margin: 20px 30px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: #54cfdb;
`;

export const TextButtons = styled.Text`
  font-size: 20px;
  color: #ffff;
`;

export const HeaderUsuario = styled.View`
  flex-direction: column;
  align-items: center;
  align-items: center;
  border-bottom-color: #eee;
  border-bottom-width: 4px;
  padding: 10px 10px;
`;

export const TextHeaderUsuario = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
