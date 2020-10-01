module.exports = repos => {
    let reposArray = repos;
    if(!Array.isArray(reposArray)){
        return new Error("Data is not Correct, should be a github response JSON format, and the JSON should have a data array inside of it");
    }
    reposArray = reposArray.map(repo => {
        return {
            username: repo.owner.login.toLowerCase(),
            repoName: repo.name,
            url: repo.html_url,
            createdAt: repo.created_at
        };
    });
    return reposArray;
};
