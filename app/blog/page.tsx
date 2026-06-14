import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Ertuğrul Bayraktar",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-[70vh] max-w-content px-6 py-20">
        <BlogList posts={posts} />
      </main>
      <Footer />
    </>
  );
}
