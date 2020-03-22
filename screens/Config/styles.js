import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    padding: 15px;
    background-color: #0082C9;
    justify-content: space-between;
`;


export const ButtonContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CounterLabel = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const SelectedCounterLabel = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
`;
