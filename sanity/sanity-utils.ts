import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
// import Page from "@/types/Page";

import { Page } from "c:/Users/Rohith/Desktop/portfolio-nextjs13/types/Page";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "tbrh5st2",
    dataset: "production",
    apiVersion: "2023-04-08",
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "tbrh5st2",
    dataset: "production",
    apiVersion: "2023-04-08",
  });

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  const client = createClient({
    projectId: "tbrh5st2",
    dataset: "production",
    apiVersion: "2023-04-08",
  });

  return client.fetch(
    groq`*[_type == "page"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  const client = createClient({
    projectId: "tbrh5st2",
    dataset: "production",
    apiVersion: "2023-04-08",
  });

  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        content
    }`,
    { slug }
  );
}
