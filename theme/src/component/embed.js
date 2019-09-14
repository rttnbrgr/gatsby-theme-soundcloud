import React from 'react';
import Iframe from "react-iframe";

function Embed({ title, id, height = 320, url, size }) {

  if (url && !isUrlValid(url)) {
    console.error("Not a valid url. Please check the url for errors.");
    return null;
  }

  return (
    <Iframe
      //   sx={{
      //     width: "100%",
      //     height,
      //     mb: 4,
      //     mt: 1,
      //     border: 0,
      //     borderRadius: "4px",
      //     overflow: "hidden"
      //   }}
      scrolling="no"
      title={title}
      url={`https://w.soundcloud.com/player/?url=https%3A${url}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=${size === 'l' ? 'true' : 'false'}`}
      allowFullScreen={true}
      frameBorder={0}
      width="100%"
      height="166"
      allow="autoplay"
      loading="lazy"
    />
  );
}

export default Embed;

export const soundCloudRegEx = /\/\/.[^(")|(<)]+/;

export function isUrlValid(url) {
  var res = url.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
  );
  if (res != null) {
    return true;
  } else {
    return false;
  }
}
