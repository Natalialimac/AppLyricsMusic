import React from 'react';
import {Text} from 'react-native';
import {
  Container,
  ContainerArtist,
  InputArea,
  ContainerMusic,
  CustomButtonText,
  CustomButton,
} from './styles';

const Home = () => {
  return (
    <Container>
      <ContainerArtist>
        <CustomButtonText>Artista</CustomButtonText>
        {/* add placeholder */}
        <InputArea>
          <Text>Qual o nome do artista?</Text>
        </InputArea>
      </ContainerArtist>

      <ContainerMusic>
        <CustomButtonText>Musica</CustomButtonText>
        {/* add placeholder */}
        <InputArea>
          <Text>Insira o nome da música</Text>
        </InputArea>
      </ContainerMusic>

      <CustomButton>
        <CustomButtonText>Pesquisar</CustomButtonText>
      </CustomButton>
    </Container>
  );
};

export default Home;
