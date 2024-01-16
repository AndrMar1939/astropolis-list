import { Box, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
        <Link
          href="https://www.astroclub.kiev.ua/forum/index.php?topic=40791.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          The original page of the 100 best Astropolis DSO
        </Link>


    </Box>
  );
}
