import React from "react";
import { getAllPosts } from "lib/mdx";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { IPostMeta } from "types/Post";
import { Link } from "@acme/ui";
import moment from "moment";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  postsMeta,
}) => {
  return (
    <div className="container mx-auto max-w-[768px]">
      <h1 className="py-10 text-3xl font-bold">My Blog</h1>

      <div className="flex flex-col gap-y-9 pb-16">
        {postsMeta.map((post) => {
          return (
            <div key={post.slug} className="flex flex-col">
              <Link
                href={`/blog/${post.slug}`}
                className="self-start text-xl font-bold text-secondary-500"
              >
                {post.title}
              </Link>
              <span className="mb-1 text-sm font-semibold italic text-secondary-300">
                {moment(post.date).format("D MMMM YYYY")}
              </span>
              <p>{post.excerpt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  postsMeta: IPostMeta[];
}> = () => {
  return {
    props: {
      postsMeta: getAllPosts()
        .map((post) => post.meta)
        .slice(0, 9),
    },
  };
};
