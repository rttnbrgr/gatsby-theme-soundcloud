import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout';
import TrackList from '../components/track-list';

export default (props) => {
    const data = useStaticQuery(graphql`
    query {
        allTrack(sort: {fields: createdAt, order: ASC}) {
            nodes {
                id
                createdAt
                trackType
                streamUrl
                title
                slug
            }
        }
    }
    `)
    const tracks = data.allTrack.nodes;
    return (
        <Layout>
            <TrackList tracks={tracks} />
        </Layout>
    )
}