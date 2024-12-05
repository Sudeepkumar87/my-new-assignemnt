import React, { useState, useEffect } from "react";
import Search from "../../organisms/Search";
import {  SearchGetApi } from "../../../reducer/api/GetApiAction";
import {  useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Customization from "../../organisms/Customization";
import Box from "@mui/material/Box";

import Author from "../../organisms/Author";
import moment from "moment";
import { useDebounce } from "use-debounce";
import Paginaltion from "../../organisms/Paginaltion";


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedText, setSelectedText] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selectedTextUrl, setSelectedTextUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const [anchorElSearch, setAnchorElSearch] = useState(null);
  const [anchorElPopularity, setAnchorElPopularity] = useState(null);
  const [anchorElTime, setAnchorElTime] = useState(null);

  const [selectedSearch, setSelectedSearch] = useState("story");
  const [selectedPopularity, setSelectedPopularity] = useState("Date");
  const [selectedTime, setSelectedTime] = useState("All time");


  const searchApiData = async (searchVal, page,selectedSearch) => {
 
    try {
      const response = await dispatch(
        SearchGetApi({ url: searchVal, pageNumber: page,tags:selectedSearch})
      );

      const getResponse = response.hits;
      setSelectedText(getResponse);
      setFilterData(getResponse);
    
      
    } catch (err) {
      console.error("Error in searchApiData:", err);
    }
  };

  const handleSearchClick = (event) => {

    setAnchorElSearch(event.currentTarget);
  };

  const handlePopularityClick = (event) => {
    setAnchorElPopularity(event.currentTarget);
  };
  const handleTimeClick = (event) => {
    setAnchorElTime(event.currentTarget);
  };

  const handleCloseSearch = () => {
    setAnchorElSearch(null);
  };
  const handleClosePopularity = () => {
    setAnchorElPopularity(null);
  };
  const handleCloseTime = () => {
    setAnchorElTime(null);
  };


 const handleSelectSearch = (option) => {
 

 setSelectedSearch(option);
 handleCloseSearch()

};


 

  const handleSelectPopularity = (option) => {
    setSelectedPopularity(option);
    handleClosePopularity();
  };

  const handleSelectTime = (option) => {
    setSelectedTime(option);
    handleCloseTime();
  };
  const dispatch = useDispatch();

  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOFFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = selectedText.slice(indexOFFirstPost, indexOfLastPost);

 

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
  
    searchApiData("keys" , "1",selectedSearch );
  }, [currentPage,selectedSearch]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("2",currentPage)
      searchApiData(debouncedSearchTerm || "keys" || "", currentPage ,selectedSearch );
    }
  }, [debouncedSearchTerm]);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  const specificDate = moment(selectedText.created_at);
  const daysAgo = moment().diff(specificDate, "days");

  return (
    <div>
      {/* <Box sx={{paddingBottom:"2rem"}}> */}
      <Search
        searchTerm={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
       
          setSearchParams({ query: e.target.value });
        }}
      />
      {/* </Box> */}
      <div style={{ background: "#f6f6ef", padding: "50px" }}>
        <Customization
          // selectedText={currentPosts}
          handleSearchClick={handleSearchClick}
          handleSelectSearch={handleSelectSearch}
          anchorElSearch={anchorElSearch}
          selectedSearch={selectedSearch}
          handleCloseSearch ={handleCloseSearch }
          anchorElPopularity={anchorElPopularity}
          selectedPopularity={selectedPopularity}
          handleClosePopularity={handleClosePopularity}
          handleSelectPopularity={handleSelectPopularity}
          anchorElTime={anchorElTime}
          selectedTime={selectedTime}
          handleCloseTime ={handleCloseTime }
          handleSelectTime={handleSelectTime}
          handlePopularityClick={handlePopularityClick}
          handleTimeClick={handleTimeClick}
        />
        <Author selectedText={currentPosts} daysAgo={daysAgo} />
        <Paginaltion
          postsPerPage={postsPerPage}
          totalPosts={selectedText.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;
