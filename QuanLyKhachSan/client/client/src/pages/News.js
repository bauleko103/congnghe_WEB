import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NewsCard from '../components/news/NewsCard';
import newsMock from '../__mocks__/newsMock';

const StyleBox = styled(Box)({
  padding: '1.5em',
  height: '100vh',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn'
});

export default function News() {
  return (
    <React.Fragment>
      <Container width="200">
        <StyleBox >
          {newsMock.map((news) => (
            <NewsCard news={news} />
          ))}
        </StyleBox>
      </Container>
    </React.Fragment>
  );
}
