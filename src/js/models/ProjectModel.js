class ProjectModel {
  constructor(item) {
    this.self = this;
    this.thumb = item.thumb;
    this.projectName = item.projectName;
    this.description = item.description;
    this.technologies = item.technologies;
    this.text = item.text;
    this.infos = item.infos;
    this.links = item.links;
    this.video = item.video;
  }
}

export default ProjectModel;
