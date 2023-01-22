import React from "react";
import { getAllPosts } from "lib/mdx";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { IPostMeta } from "types/Post";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  postsMeta,
}) => {
  return (
    <div className="container mx-auto">
      {postsMeta.map((post) => {
        return (
          <div key={post.slug}>
            <span>{post.title}</span>
          </div>
        );
      })}
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
