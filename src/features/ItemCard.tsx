import { FC } from 'react'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface ItemCardProps {
  type: string,
  catalogCode: string,
  RA: string,
  Dec: string,
  objectClass?: string | undefined,
  size?: string,
  mag?: string | undefined,
  constellation: string,
}

export const ItemCard: FC<ItemCardProps> = ({
  type,
  catalogCode,
  RA,
  Dec,
  objectClass,
  size,
  mag,
  constellation,
}) => {
  return (
    <Grid
      xs={12}
      sm={6}
      md={4}
      item
      sx={{
        justifySelf: 'center',
      }}
    >
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image="/telescope-icon.svg"
          title="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {catalogCode}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {type}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
