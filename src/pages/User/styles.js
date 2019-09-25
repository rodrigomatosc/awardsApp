import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin: 10px 10px;
  background: #f9f9f9;
  padding: 10px;
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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

/**
 * Item List ------------------------------------------------
 */

export const ItemAward = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  background: #fff;
  opacity: ${props => (props.hasAward ? 1 : 0.2)};
  border-bottom-color: #eee;
  border-bottom-width: 2px;
`;

export const ImageAward = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const ContainerNameAward = styled.View`
  flex: 1;
  margin: 10px 20px;
`;

export const CategoryAwards = styled.Text`
  font-size: 20px;
`;

export const DescriptionAward = styled.Text`
  font-size: 14px;
`;

export const ContainerValueAward = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextValueAward = styled.Text`
  color: #0e7888;
  font-size: 16px;
`;

export const ValueAward = styled.Text`
  font-size: 20px;
`;

/**
 * Buttons ------------------------------------------------
 */

export const ButtonInserts = styled(RectButton)`
  height: 50px;
  margin: 20px 30px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: #f5b533;
`;

export const TextButtonInserts = styled.Text`
  font-size: 16px;
  color: #fff;
`;
