import { Grid } from "@mui/material"
import DSOList from '../api/astropolis-list.json';
import { ItemCard } from "../features";

export const List = () => {
  console.log(DSOList)
  return (
    <Grid container spacing={2}>
      {DSOList.map(dso => (
        <ItemCard key={dso.catalogCode} {...dso} />
      ))}
    </Grid>
  )
}
