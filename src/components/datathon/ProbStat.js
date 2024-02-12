import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PSCard({ pdfObj, title, content, img }) {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: '3%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={img}
          alt="PS image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <a href={pdfObj}>
          <Button size="small" variant="outlined">
            Download PDF
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}