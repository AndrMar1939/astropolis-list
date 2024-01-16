import { Grid } from "@mui/material"

export const List = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={4}>
        <p>xs=6 md=8</p>
      </Grid>
      <Grid xs={12} md={4}>
        <p>xs=6 md=4</p>
      </Grid>
    </Grid>
  )
}
