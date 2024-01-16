import { Tab, Tabs, Divider } from "@mui/material"
import { Link, useLocation } from "react-router-dom"

export const Header = () => {
  const { pathname } = useLocation();

  return (
   <header>
    <Tabs 
      centered
      value={pathname}
    >
        <Tab
          label="Home"
          value={"/"}
          component={Link}
          to="/"
        />

        <Tab
          label="List"
          component={Link}
          to="/list"
          value={"/list"}
        />
    </Tabs>

    <Divider />
   </header>
  )
}
