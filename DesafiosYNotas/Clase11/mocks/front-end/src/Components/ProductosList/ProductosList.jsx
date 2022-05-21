import React from 'react'
import Card from "../Card/Card"
import { Grid } from '@mui/material';


export default function ProductosList({productos}) {
  return (
    <Grid container justifyContent="center" alignItems="center" columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {productos.map((producto) => (<Grid item xs="auto"><Card producto={producto}/></Grid>))}
    </Grid>
  )
}
