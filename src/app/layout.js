import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import NavBarComponent from "@/components/NavBar";

export const metadata = {
  title: "Adolfo",
  description: "Welcome to my personal website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
              <NavBarComponent />
              {children}
            </StyledEngineProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
