import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Track from '../components/Track';

export const query = graphql`
    query($trackId: String!) {
        track(id: { eq: $trackId }) {
            createdAt(formatString: "MMMM D, YYYY")
            id
            title
            trackType
            streamUrl
            slug
            duration
            commentable
            state
            sharing
            tagList
            permalink
            description
            streamable
            downloadable
            genre
            release
            purchaseUrl
            labelId
            labelName
            isrc
            videoUrl
            trackType
            keySignature
            bpm
            title
            releaseYear
            releaseMonth
            releaseDay
            originalFormat
            license
            uri
            permalinkUrl
            artworkUrl
            waveformUrl
            streamUrl
            downloadUrl
            playbackCount
            downloadCount
            favoritingsCount
            commentCount
            attachmentsUri
        }
    }
`;

const TrackTemplate = ({ data: { track } }) => {
    return (
        <Layout>
            <Track {...track} />
            {/* <pre>{JSON.stringify(track, null, 2)}</pre> */}
        </Layout>
    );
};
export default TrackTemplate;
