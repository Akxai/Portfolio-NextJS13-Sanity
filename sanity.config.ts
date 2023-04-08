import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
// import project from "./sanity/schemas/project-schema";

const config = defineConfig({
  projectId: "tbrh5st2",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-04-08",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
