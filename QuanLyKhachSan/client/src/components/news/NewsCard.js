import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from '@mui/material';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';


export default function NewsCard({ news }) {
  return (
    <Card sx={{
      maxWidth: 275,
      height: 235,
      margin: '6.5px',
      borderRadius: 0,
      boxShadow: 'none',
    }}>
      <Link href={`/news/${news.slug}`}>
        <CardMedia sx={{
          height: 175,
          width: 275,
        }}
          component="img"
          alt={news.title}

          image={`${process.env.REACT_APP_IMAGE_URL}/${news.image}`}
        />
      </Link>
      <CardContent sx={{ padding: "0" }}>
        <CardActions sx={{ padding: "0" }}>
          <Link href="/news/${news.slug}" sx={{
            color: '#000000',
            textDecoration: 'none',
            fontWeight: '300',
            fontSize: '12px',
            ":hover": {
              color: '#6D6D6D'
            }
          }}>{news.title}</Link>
        </CardActions>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '10px' }}>
          <div className='description' dangerouslySetInnerHTML={{ __html: `${news.description}` }}></div>
        </Typography>
      </CardContent>
    </Card>
  );
}

NewsCard.propTypes = {
  news: PropTypes.object.isRequired
};
