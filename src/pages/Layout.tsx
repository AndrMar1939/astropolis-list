import { Outlet } from "react-router-dom"
import { Container, Box, Divider } from "@mui/material"
import { Header, Footer } from "../features"

export const Layout = () => {
  return (
   <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
   >
      <Header />

      <Box 
        component={'main'} 
        sx={{
          flex: 1,
        }}
      >
        <Outlet />
      </Box>

      <Divider />

      <Footer />
   </Container>
  )
}
