import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #63cbcb;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerArtist = styled.SafeAreaView`
  padding: 15px;
`;

export const ContainerMusic = styled.SafeAreaView`
  padding-top: 5px;
`;

export const CustomButton = styled.TouchableOpacity`
  margin-top: 30px;
  height: 60px;
  width: 25%;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const InputArea = styled.TextInput`
  /* flex: 1; */
  color: #fff;
  font-size: 16px;
  color: #268596;
  margin-top: 15px;
  /* margin-left: 10px; */
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  background-color: #fff;
`;
