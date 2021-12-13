import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import NewsCard from '../components/news/NewsCard';
import Pagination from '../components/Pagination/Pagination';
import newsApi from '../api/newsApi';
import { FooterW } from '../components/Layouts/FooterW';
import LoadingScreen from '../components/LoandingScreen';

const StyleBox = styled(Box)({
  // padding: '15px 310px',
  width: 870,
  margin: '0 auto',
  backgroundColor: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  height: 'auto',
  zIndex: '100',
  position: 'relative'
});

export default function News() {
  const [newsList, setNewsList] = React.useState(null);
  const [filters, setFilters] = React.useState({
    number: 6,
    page: 1,
  });

  React.useEffect(() => {
    const fetchNewsList = async () => {
      try {
        const response = await newsApi.listNews(filters.page, filters.number);
        setNewsList(response);
      } catch (error) {
        console.log('Failed to fetch news list: ', error)
      }
    }

    fetchNewsList();
  }, [filters])
  
  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      page: newPage,
    })
  }

  return (
    <>
      {newsList && (
        <React.Fragment >
          <StyleBox >
            {newsList.news.map((news) => (
              <NewsCard key={news._id} news={news} />
            ))}

          </StyleBox>
          <Pagination
            pagination={newsList.pagination}
            onPageChange={handlePageChange}
          />
          <FooterW />
        </React.Fragment >
      )}
      {!newsList && (<LoadingScreen/>)}
    </>


  );
}
