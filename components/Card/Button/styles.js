import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: #fff;
    height: 35px;
    border: 2px solid;
    width: 50%;
    border-color: #4E6F95;
    border-radius: 5px;
    align-items: center;
    flex-direction: row;
    padding: 5px;
    margin-bottom: 5px;
`;

export const Title = styled.Text`
   color: #4E6F95;
   font-size: 15px;
   font-weight: bold;
`;

export const Icon = styled(Ionicons)`
    margin-right: 10px;
    color: #4E6F95;
    
`;
