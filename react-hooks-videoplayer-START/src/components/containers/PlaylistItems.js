import React from "react";
import PlaylistItem from "../PlaylistItem";
import StyledPlaylistItems from "../styles/StyledPlaylistitems";
import withLink from "../hoc/withLink";

const PlaylistItemsWithLink = withLink(PlaylistItem)

const Playlistitems = ({ videos, active }) => (
  <StyledPlaylistItems>
    {videos.map(video => (
      <PlaylistItemsWithLink
      key={video.id}
      video={video}
      active={video.id === active.id ? true : false}
      played={video.played}
      />
    ))}
  </StyledPlaylistItems>
);

export default Playlistitems;
