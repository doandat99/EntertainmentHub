import React, { useEffect, useState } from "react";
import {
  Button,
  createTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import CustomPagination from "../../component/Pagination/CustomPagination";
import SingleContent from "../../component/SingleContent/SingleContent";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPage, setNumOfPage] = useState();
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: { main: "#fff" },
    },
  });
  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPage(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div style={{ display: "flex" }}>
          <TextField
            label="Search"
            variant="filled"
            className="searchBox"
            style={{ flex: 1 }}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginLeft: 20 }}
            onClick={fetchSearch}
          >
            <SearchIcon />
          </Button>
        </div>{" "}
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 5 }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%" }} label="Search movie" />
          <Tab style={{ width: "50%" }} label="Search TV series" />
        </Tabs>
      </ThemeProvider>
      <div className="search">
        {content.length > 1 ? (
          content.map((item) => (
            <SingleContent
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={item.vote_average}
            />
          ))
        ) : (
          <h1>Chưa có dữ liệu tìm kiếm</h1>
        )}
      </div>
      {numOfPage > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPage} />
      )}
    </>
  );
};

export default Search;
