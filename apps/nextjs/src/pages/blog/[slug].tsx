import React from "react";
import { getPostFromSlug, getSlugs } from "lib/mdx";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import "highlight.js/styles/github-dark.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { IPostMeta } from "types/Post";
import { MDXComponents } from "components/MDXComponents.tsx";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import moment from "moment";

interface IPostPage {
  post: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: IPostMeta;
  };
}

const BlogContent: NextPage<IPostPage> = ({ post }) => {
  const router = useRouter();

  return (
    <div className="container mx-auto max-w-[768px]">
      <div
        onClick={() => router.back()}
        className="flex cursor-pointer items-center space-x-2 py-4 hover:underline"
      >
        <ChevronLeftIcon className="h-4" />
        <span className="text-md font-semibold">Go back</span>
      </div>

      <div className="pt-8 pb-20">
        <p className="mb-2 text-sm font-semibold italic text-secondary-300">
          {moment(post.meta.date).format("D MMMM YYYY")}
        </p>
        <h1 className="mb-6 text-4xl font-bold text-secondary-500">
          {post.meta.title}
        </h1>
        <div id="content">
          <MDXRemote {...post.source} components={MDXComponents} />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
