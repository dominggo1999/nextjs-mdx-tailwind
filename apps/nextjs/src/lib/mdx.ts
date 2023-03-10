import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";
import { generate } from "short-uuid";
import { IPost } from "types/Post";

const POSTS_PATH = path.join(process.cwd(), "src", "posts");

export const getSlugs = () => {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const slug = fileName?.split(".")[0] || generate();
    return slug;
  });
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date < b.meta.date) return 1;
      if (a.meta.date > b.meta.date) return -1;
      return 0;
    })
    .reverse();

  return posts;
};

export const getPostFromSlug = (slug: string): IPost => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      image: data.image ?? "",
    },
  };
};
