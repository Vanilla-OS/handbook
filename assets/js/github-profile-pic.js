function getGitHubProfilePic() {
    var githubProfilePics = document.querySelectorAll('.authorGitHubPic');
    githubProfilePics.forEach(function (githubProfilePic) {
        var githubUser = githubProfilePic.getAttribute('github-user');
        var githubProfilePicURL = `https://github.com/${githubUser}.png`;
        var githubProfilePicImage = document.createElement('img');
        githubProfilePicImage.src = githubProfilePicURL;
        githubProfilePicImage.alt = `GitHub profile picture for ${githubUser}`;
        githubProfilePicImage.classList.add('authorGitHubPic');
        githubProfilePic.parentNode.replaceChild(githubProfilePicImage, githubProfilePic);
    });
}
