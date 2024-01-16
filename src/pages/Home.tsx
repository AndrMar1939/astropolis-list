import { Box, Typography, useTheme } from "@mui/material"

export const Home = () => {
  const theme = useTheme();

  return (
   <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
   >
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: 'center', color: theme.palette.grey[900]}
      }>
        100 objects of Astropolis
      </Typography>
   </Box>
  )
}
