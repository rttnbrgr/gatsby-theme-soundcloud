import React from "react";
import { Link } from "gatsby";

const TrackList = ({ tracks }) => (
    <>
        <h1>All Tracks</h1>
        <ul>
            {tracks.map(track => (
                <li key={track.id}>
                    <strong>
                        <Link to={track.slug}>{track.title}</Link>
                    </strong>
                    <br />
                        created:{" "}
                        {new Date(track.createdAt).toLocaleDateString("en-us", {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        })}
                </li>
            ))}
        </ul>
    </>
);

export default TrackList;
