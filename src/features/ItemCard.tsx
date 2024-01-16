import { FC } from 'react'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { spaceObjectTypes } from '../shared';

const listItemStyle = {
  display: 'flex',
  alignItems: 'end',
  gap: 2,
}

interface ItemCardProps {
  type: string,
  catalogCode: string,
  RA: string,
  Dec: string,
  constellation: string,
  imgSrc?: string | undefined,
  objectClass?: string | undefined,
  size?: string,
  mag?: string | undefined,
  wikiLinkEn?: string | undefined,
  wikiLinkUa?: string | undefined,
}

export const ItemCard: FC<ItemCardProps> = ({
  imgSrc = 'skeleton.jpg',
  type,
  catalogCode,
  RA,
  Dec,
  objectClass = 'n.a.',
  size = 'n.a.',
  mag = 'n.a.',
  constellation,
  wikiLinkEn,
  wikiLinkUa,
}) => {
  return (
    <Grid
      xs={12}
      sm={6}
      lg={4}
      item
      sx={{
        justifySelf: 'center',
      }}
    >
      <Card>
        <CardMedia
          component="img"
          sx={{ height: 300, objectFit: 'cover' }}
          image={`./images/${imgSrc}`}
          title="deep space object position"
          loading="lazy"
        />

        <CardContent>
          <List>
            <ListItem 
              sx={listItemStyle}
            >
              <Typography variant="body1" color="primary">
                Type
              </Typography>
           
              <Typography variant="body1">
                {spaceObjectTypes[type.toLocaleLowerCase()]}
              </Typography>
            </ListItem>

            <ListItem 
              sx={listItemStyle}
            >
              <Typography variant="body1" color="primary">
                CatalogCode
              </Typography>
           
              <Typography variant="body1">
                {catalogCode}
              </Typography>
            </ListItem>

            <ListItem 
              sx={listItemStyle}
            >
              <Typography variant="body1" color="primary">
                Constellation
              </Typography>
           
              <Typography variant="body1">
                {constellation}
              </Typography>
            </ListItem>

            <ListItem 
              sx={listItemStyle}
            >
              <Typography variant="body1" color="primary">
                Class
              </Typography>
           
              <Typography variant="body1">
                {objectClass}
              </Typography>
            </ListItem>

            <ListItem 
              sx={listItemStyle}
            >
              <Typography variant="body1" color="primary">
                Mag
              </Typography>
           
              <Typography variant="body1">
                {mag}
              </Typography>
            </ListItem>

            <ListItem 
              sx={listItemStyle}
            >
              <Typography variant="body1" color="primary">
                Size
              </Typography>
           
              <Typography variant="body1">
                {size}
              </Typography>
            </ListItem>

            <ListItem 
              sx={listItemStyle}
            >
              <Typography variant="body1" color="primary">
                RA
              </Typography>
           
              <Typography variant="body1">
                {RA}
              </Typography>
            </ListItem>

            <ListItem 
              sx={listItemStyle}
            >
              <Typography variant="body1" color="primary">
                Dec
              </Typography>
           
              <Typography variant="body1">
                {Dec}
              </Typography>
            </ListItem>
          </List>

        </CardContent>

        <CardActions>
          <Button size="small" disabled={!wikiLinkEn}>
            <a
              href={wikiLinkEn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wiki Eng
            </a>
          </Button>

          <Button size="small" disabled={!wikiLinkUa}>
           <a
              href={wikiLinkUa}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wiki Ua
            </a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
