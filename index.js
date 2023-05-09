const { Octokit } = require("@octokit/rest");
const fs = require("fs");
const path = require("path");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function changeProfilePicture() {
  try {
    const imagesDir = "images";
    const images = fs.readdirSync(imagesDir).filter(file => file.endsWith(".jpg"));
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageFile = path.join(imagesDir, images[randomIndex]);
    const image = fs.readFileSync(imageFile);
    const result = await octokit.users.uploadAvatar({ file: image });
    console.log("Profile picture changed successfully");
  } catch (error) {
    console.error(error);
  }
}

changeProfilePicture();
