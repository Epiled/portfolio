class ProjectView {
  constructor(container) {
    this.view = document.querySelector(container);
  }

  render(project) {
    this.createThumbArticle(project);
  }

  createThumbArticle(project) {
    const projectListItem = document.createElement("li");
    projectListItem.dataset.projectsListItem = "";
    projectListItem.dataset.animation = "";
    projectListItem.classList.add("projects__item");

    const projectThumb = document.createElement("img");
    projectThumb.src = `./assets/projetos/${project.thumb}`;
    projectThumb.width = projectThumb.width;
    projectThumb.height = projectThumb.height;
    projectThumb.classList.add("projects__image");

    projectThumb.alt = `Logo do projeto ${project.projectName}`;

    const projectIntroduction = document.createElement("div");
    projectIntroduction.classList.add("projects__introduction");

    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("projects__title");

    const projectText = document.createElement("p");
    projectText.classList.add("projects__text");

    const projectButton = document.createElement("button");
    projectButton.classList.add("projects__button");

    projectTitle.textContent = `${project.projectName}`;
    projectText.textContent = `${project.description}`;
    projectButton.textContent = `Leia mais...`;

    // const projectArticle = this.createContentArticle(project);

    projectButton.addEventListener("click", () => {
      let projectArticle = this.createContentArticle(project);
      this.showArticle(projectArticle);
    });

    projectIntroduction.append(
      projectTitle,
      projectText,
      projectButton,
      // , projectArticle
    );
    projectListItem.append(projectThumb, projectIntroduction);

    return this.view.appendChild(projectListItem);
  }

  createContentArticle(project) {
    // article
    const article = document.querySelector("[data-project-article]");
    article.innerHTML = "";

    const articleGeneral = document.createElement("div");
    articleGeneral.classList.add("article__general");

    const articleContainer = document.createElement("div");
    articleContainer.classList.add("article__container");

    const articleMedia = document.createElement("video");
    articleMedia.src = `./assets/projects/${project.video}`;
    articleMedia.controls = true;
    articleMedia.muted = true;

    articleMedia.classList.add("article__media");

    const articleTitle = document.createElement("h4");
    articleTitle.classList.add("article__title");

    const articleTxt = document.createElement("p");
    articleTxt.classList.add("article__txt");

    const articleTechnologiesTitle = document.createElement("h4");
    articleTechnologiesTitle.classList.add("article__title");

    const articleListTechnologies = document.createElement("ul");
    articleListTechnologies.classList.add(
      "article__list",
      "article__list--technology",
    );

    // Technologies from article
    project.technologies.forEach((technology) => {
      const articleItem = document.createElement("li");
      const articleTechnology = document.createElement("img");
      articleTechnology.classList.add("article__technology");

      articleTechnology.src = technology.image;
      articleTechnology.width = "50";
      articleTechnology.height = "50";
      articleTechnology.loading = "lazy";
      articleTechnology.alt = technology.text;

      articleItem.appendChild(articleTechnology);
      articleListTechnologies.appendChild(articleItem);
    });

    const articleList = document.createElement("ul");
    articleList.classList.add("article__list");

    project.infos.forEach((info) => {
      const articleInfo = document.createElement("li");
      articleInfo.classList.add("article__item");
      articleInfo.textContent = info;

      articleList.appendChild(articleInfo);
    });

    const articleLinks = document.createElement("div");
    articleLinks.classList.add("article__links");

    const articleClose = document.createElement("span");
    articleClose.dataset.projectClose = "";
    articleClose.classList.add("article__close");

    articleTitle.textContent = `${project.projectName}`;
    articleTxt.textContent = `${project.text}`;
    articleClose.textContent = `X`;

    articleClose.addEventListener("click", () => {
      this.showArticle(article);
    });

    articleTechnologiesTitle.textContent = "Tecnologias";

    articleContainer.append(
      articleTitle,
      articleTxt,
      articleTechnologiesTitle,
      articleListTechnologies,
      articleList,
      articleClose,
    );
    articleGeneral.append(articleMedia, articleContainer);

    const articleLinksExternals = this.createButtons(project.links);

    article.append(articleGeneral, articleLinksExternals);

    return article;
  }

  createButtons(links) {
    const containerButtons = document.createElement("div");
    containerButtons.classList.add("article__buttons");

    const linksExternal = [];
    Object.keys(links).forEach((key) => {
      const link = document.createElement("a");
      link.classList.add("article__button");
      link.setAttribute("target", "_blank");
      link.textContent = key;
      link.href = links[key];

      link.getAttribute("href") != "" ? linksExternal.push(link) : "";

      //console.log(key, links[key]);
    });

    linksExternal.forEach((link) => {
      containerButtons.append(link);
    });

    return containerButtons;
  }

  showArticle(article) {
    article.classList.toggle("article--active");
    document.body.classList.toggle("active");
  }
}

export default ProjectView;
