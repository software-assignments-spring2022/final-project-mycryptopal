import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import './ExploreCard.css';

function ExploreCard(props) {
  return (
    <>
      <Grid container className="exploreCard" onClick={() => window.location.href=`/crypto/${props.symbol}`}>
        <Grid item xs={5} md={2.5} className="cardImage">
          <img src={props.pic} alt = 'crypto-logo'/>
        </Grid>
        <Grid item xs={5} md={2.5} className="cardName">
          <Typography variant={'h6'} className="cardTitle">{props.symbol}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default ExploreCard;
