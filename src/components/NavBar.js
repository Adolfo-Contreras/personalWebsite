import {
    AppBar,
    Typography,
    Toolbar,
    Link,
    List,
    ListItemButton,
  } from "@mui/material";
  import nextLink from "next/link";
  export default function NavBarComponent() {
    return (
      <AppBar position="sticky" color="primary" sx={{ height: "5rem" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Adolfo</Typography>
          <List sx={{ display: "flex" }}>
            <Link
              href="/"
              variant=""
              component={nextLink}
              /*this works as a Next.js Link while being an mui Link*/ sx={{
                color: "white",
              }}
            >
              <ListItemButton variant="contained" color="glob">
                Home
              </ListItemButton>
            </Link>
            <Link
              href="/About"
              variant=""
              component={nextLink}
              /*this works as a Next.js Link while being an mui Link*/ sx={{
                color: "white",
              }}
            >
              <ListItemButton variant="contained" color="glob">
                About
              </ListItemButton>
            </Link>
            <Link
              href="/Contact"
              variant=""
              component={nextLink}
              /*this works as a Next.js Link while being an mui Link*/ sx={{
                color: "white",
              }}
            >
              <ListItemButton variant="contained" color="glob">
                Contact
              </ListItemButton>
            </Link>
          </List>
        </Toolbar>
      </AppBar>
    );
  }
  