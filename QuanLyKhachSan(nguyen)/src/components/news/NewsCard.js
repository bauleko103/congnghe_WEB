import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import { Link } from '@mui/material';
import PropTypes from 'prop-types';


const StyleCard = styled(Card)({
  marginTop: 8,
  marginBottom: 8,
  borderRadius: 0,
  boxShadow: 'none'
});

const StyleCardContent = styled(CardContent)({
  padding: '0'
});

const StyleCardActions = styled(CardActions)({
  padding: '10px 0'
});

const StyleLink = styled(Link)({
  color: 'black',
  textDecoration: 'none',
  fontWeight: '700'
});

const StyleTypography = styled(Typography)({
  fontsize: '11px',
  lineHeight: '15px'
});

export default function NewsCard({ news }) {
  return (
    <StyleCard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={news.image}
        alt="green iguana"
      />
      <StyleCardContent>
        <StyleCardActions>
          <StyleLink href={news.url}>{news.title}</StyleLink>
        </StyleCardActions>
        <Typography variant="body2" color="text.secondary">
          {news.description}
        </Typography>
      </StyleCardContent>

    </StyleCard>
  );
}

NewsCard.propTypes = {
  news: PropTypes.array.isRequired
};
