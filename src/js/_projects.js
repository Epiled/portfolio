import projects from "./mocks/projects.js";

// console.log(projects[0].nameProject);
projects.forEach((project) => {
  new Project(project);
});

class Project {
  constructor(item) {
    this.self = this;
    this.article = project.querySelector("[data-project-article]");
    this.button = project.querySelector("[data-project-button]");
    this.buttonClose = project.querySelector("[data-project-close]");

    this.thumb = item.thumb;
    this.title = item.nameProject;
    this.description = item.description;

    [this.button, this.buttonClose].forEach((element) => {
      element.addEventListener("click", () => {
        this.showArticle();
      });
    });
  }

  showArticle() {
    this.article.classList.toggle("article--active");
  }
}

let projectsContainer = document.querySelector("[data-projects-list]");
let projectsItems = projectsContainer.querySelectorAll(
  "[data-projects-list-item]",
);

projectsItems.forEach((project) => {
  new Project(project);
});

// let projectButton = document.querySelector('[data-projects-btn]');
// let projectArticle = document.querySelector('[data-project-article]');

// projectButton.addEventListener('click', (e) => {
//   projectArticle.classList.toggle('article--active');
// })
