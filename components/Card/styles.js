import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.9,
}))`
    width: 90%;
    height:220px;
    background-color: ${({ selected }) => (selected ? '#fff' : '#00A6FF')};
    border: 3px solid;
    border-radius: 1px;
    border-color: #000;
    justify-content: space-between;
    padding: 10px 20px 20px 10px;
    margin: 15px;
`;

export const Title = styled.Text`
   color: #BEBEBE;
   font-size: 25px;
`;

export const TitleContent = styled.View`

`;

export const Number = styled.Text`
   color: #000;
   font-weight: bold;
   font-size: 65px;
`;

export const NumberContent = styled.View`
align-items: flex-end;
`;
