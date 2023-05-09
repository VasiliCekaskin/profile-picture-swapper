const { Octokit } = require("@octokit/rest");
const fs = require("fs");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function changeProfilePicture() {
  try {
    const image = fs.readFileSync("path/to/image.jpg");
    const result = await octokit.users.uploadAvatar({ file: image });
    console.log("Profile picture changed successfully");
  } catch (error) {
    console.error(error);
  }
}

changeProfilePicture();
