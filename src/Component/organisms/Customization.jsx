import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography, Box } from "@mui/material";

const Customization = ({
  currentPosts,
  handleSearchClick,
  handlePopularityClick,
  handleTimeClick,
  anchorElSearch,
  selectedSearch,
  handleCloseSearch,
  handleSelectSearch,
  anchorElPopularity,
  selectedPopularity,
  handleClosePopularity,
  handleSelectPopularity,
  anchorElTime,
  selectedTime,
  handleCloseTime ,
  handleSelectTime,

}) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" ,paddingBottom:"2rem"}}>
        <Typography sx={{ fontSize: "12px", color: "#000" }}>
          Search:
        </Typography>
        <div>
          <Button
            id="search-button"
            aria-controls={anchorElSearch ? "search-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={anchorElSearch ? "true" : undefined}
            variant="outlined"
            disableElevation
            onClick={handleSearchClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {selectedSearch}
          </Button>

          <Menu
            id="search-menu"
            MenuListProps={{
              "aria-labelledby": "search-button",
            }}
            anchorEl={anchorElSearch}
            open={Boolean(anchorElSearch)}
            onClose={handleCloseSearch}
          >
            {/* <MenuItem onClick={() => handleSelectSearch("story")} disableRipple>
              All
            </MenuItem> */}
            {/* <Divider sx={{ my: 0.5 }} /> */}
            <MenuItem
              onClick={() => handleSelectSearch("story")}
              disableRipple
            >
              Stories
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectSearch("comment")}
              disableRipple
            >
              Comments
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectSearch("ask_hn")}
              disableRipple
            >
              Ask HN
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectSearch("show_hn")}
              disableRipple
            >
              Show HN
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectSearch("Launch HN")}
              disableRipple
            >
              Launch HN
            </MenuItem>
            <MenuItem onClick={() => handleSelectSearch("Jos")} disableRipple>
              Jos
            </MenuItem>
            <MenuItem onClick={() => handleSelectSearch("poll")} disableRipple>
              Polls
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
          </Menu>
        </div>

        <Typography sx={{ fontSize: "12px", color: "#000" }}>by</Typography>
        <div>
          <Button
            id="popularity-button"
            aria-controls={anchorElPopularity ? "popularity-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={anchorElPopularity ? "true" : undefined}
            variant="outlined"
            disableElevation
            onClick={handlePopularityClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {selectedPopularity}
          </Button>

          <Menu
            id="popularity-menu"
            MenuListProps={{
              "aria-labelledby": "popularity-button",
            }}
            anchorEl={anchorElPopularity}
            open={Boolean(anchorElPopularity)}
            onClose={handleClosePopularity}
          >
            <MenuItem
              onClick={() => handleSelectPopularity("Date")}
              disableRipple
            >
              Date
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectPopularity("Stories")}
              disableRipple
            >
              Stories
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectPopularity("Comments")}
              disableRipple
            >
              Comments
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectPopularity("Ask HN")}
              disableRipple
            >
              Ask HN
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectPopularity("Show HN")}
              disableRipple
            >
              Show HN
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectPopularity("Launch HN")}
              disableRipple
            >
              Launch HN
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectPopularity("Jos")}
              disableRipple
            >
              Jos
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectPopularity("Polls")}
              disableRipple
            >
              Polls
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
          </Menu>
        </div>

        <Typography sx={{ fontSize: "12px", color: "#000" }}>for</Typography>
        <div>
          <Button
            id="time-button"
            aria-controls={anchorElTime ? "time-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={anchorElTime ? "true" : undefined}
            variant="outlined"
            disableElevation
            onClick={handleTimeClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {selectedTime}
          </Button>

          <Menu
            id="time-menu"
            MenuListProps={{
              "aria-labelledby": "time-button",
            }}
            anchorEl={anchorElTime}
            open={Boolean(anchorElTime)}
            onClose={handleCloseTime}
          >
            <MenuItem
              onClick={() => handleSelectTime("Last 24h")}
              disableRipple
            >
              Last 24h
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectTime("Past Week")}
              disableRipple
            >
              Past Week
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectTime("Past Month")}
              disableRipple
            >
              Past Month
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectTime("Past Year")}
              disableRipple
            >
              Past Year
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectTime("Custom range")}
              disableRipple
            >
              Custom range
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default Customization;