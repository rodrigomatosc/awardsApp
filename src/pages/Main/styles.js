import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  padding-top: 5px;
  background: #f9f9f9;
  /* background: black; */
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  margin: 0 10px 5px;
  background: #fff;
  border-radius: 3px;
  border-bottom-width: 0;
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-color: red;
  elevation: 1.2;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 10px 20px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: left;
`;

export const ImageAward = styled.Image`
  width: 30;
  height: 30;
  margin: 20px 20px;
`;
