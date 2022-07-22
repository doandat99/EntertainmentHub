import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});
const CustomPanigation = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => {
            handlePageChange(e.target.textContent);
          }}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPanigation;
