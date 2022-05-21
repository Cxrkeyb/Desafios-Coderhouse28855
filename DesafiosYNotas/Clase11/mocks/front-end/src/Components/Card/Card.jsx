import * as React from 'react';
import {Link} from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({producto}) {
  return (
    <Link to={producto.id} className="antiLinks">
     <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={producto.foto}
          alt={producto.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {(producto.descripcion).length > 100 ? producto.descripcion : producto.descripcion + producto.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
    </Link>
    
  );
}
