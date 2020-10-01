import React from "react";

const Repo = ({createdAt,username,repoName,url}) => (
    <div>
        <h1>{createdAt}</h1>
        <h2>{username}</h2>
        <h3>{repoName}</h3>
        <p>{url}</p>
        <br />
    </div>
);

export default Repo;
