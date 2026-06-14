import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostView from "@/components/PostView";
import ReadingProgress from "@/components/ReadingProgress";
import { getPost, getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return { title: post ? `${post.title} — Blog` : "Yazı bulunamadı" };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <main className="mx-auto min-h-[70vh] max-w-3xl px-6 py-20">
        <PostView post={post} />
      </main>
      <Footer />
    </>
  );
}
