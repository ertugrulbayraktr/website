import fs from "fs";
import path from "path";
import { projects, getProject, Project } from "./content";

// public/ altındaki bir varlık gerçekten var mı?
function assetExists(publicPath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

// Var olmayan kapak/ekran görüntülerini ayıklar (kırık imaj olmasın diye).
function withAssets(project: Project): Project {
  const cover = project.cover && assetExists(project.cover) ? project.cover : undefined;
  const cardImage =
    project.cardImage && assetExists(project.cardImage)
      ? project.cardImage
      : undefined;
  const screenshots = project.screenshots?.filter((s) => assetExists(s.src));
  return { ...project, cover, cardImage, screenshots };
}

export function getProjectsList(): Project[] {
  return projects.map(withAssets);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const project = getProject(slug);
  return project ? withAssets(project) : undefined;
}
