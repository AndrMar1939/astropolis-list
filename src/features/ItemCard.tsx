import { Box, Typography } from "@mui/material";

export const ItemCard = () => {
  return (
    <Box
    component="footer"
    sx={{
      marginTop: 'auto',
      padding: '20px',
    }}
  >
      <Typography variant="body2" color="text.secondary" align="center">
        © 2024 Your Company Name
      </Typography>
  </Box>
  );
}
