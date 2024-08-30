import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './DetailCard.scss';

/**
 * DetailCard component renders the card in the home page with the selected category data
 * @param {*} props
 * @returns jsx
 */
const DetailCard = ({ title, subDesc, description, handleCartAction }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className='card-detail-container'>
      <CardHeader title={title} subheader={subDesc} />
      <CardContent>
        <div className='description' title={description}>
          {description?.length ? description?.substring(0, 100) + '...' : ''}
        </div>
      </CardContent>
      <CardActions className='btn-container'>
        <button className='btn-action' onClick={() => handleCartAction()}>
          Add to Cart
        </button>
      </CardActions>
    </Card>
  );
};

export default DetailCard;
