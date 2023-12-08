
const Input = document.getElementById("Story");
const btn = document.getElementById("btn");

const storyDiv = document.querySelector(".story-block");


async function searchAndDisplay() {
    const InputValue = Input.value.toLowerCase();
    const storiesResponse = await fetch('stories.json');
    const storiesData = await storiesResponse.json();

        const allStories = storiesData.stories;
        const randomStory = allStories[Math.floor(Math.random() * allStories.length)];
        
       
      storyDiv.innerHTML = `<h2 style="font-family: 'Bebas Neue', sans-serif;">${randomStory.title}</h2><br><p>${randomStory.content}</p><br><p><em>Author: ${randomStory.author}</em></p>`;
  }