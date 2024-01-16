import { FC } from 'react';
import { Grid, Fade } from '@mui/material';
import DSOList from '../shared/api/astropolis-list.json';
import { ItemCard } from '../features';

interface ListProps {
  activeFilter: string;
}

export const List: FC<ListProps> = ({ activeFilter }) => {
  const preparedDSOList = DSOList.filter(({ type }) => activeFilter === type || activeFilter === 'All')

  return (
    <Grid container spacing={2}>
      {preparedDSOList.map(dso => (
        <Fade timeout={300} >
          <ItemCard key={dso.catalogCode} {...dso} />
        </Fade>
      ))}
    </Grid>
  );
};
