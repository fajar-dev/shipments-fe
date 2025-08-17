import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "red",
        },
      },
    },
  },
});

export default theme;
