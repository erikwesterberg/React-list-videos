import React from "react";
import StyledPLaylistHeader from "./styles/StyledPlaylistHeader";
import StyledJourney from "./styles/StyledJourney";

const PlaylistHeader = ({ active, total}) => (
  <StyledPLaylistHeader>
    <p>{active.title}</p>
    <StyledJourney>
      {active.num} / {total}
    </StyledJourney>
  </StyledPLaylistHeader>
)

export default PlaylistHeader;
