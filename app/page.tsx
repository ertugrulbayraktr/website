import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";
import { getTimeline } from "@/lib/timelineData";
import { getProjectsList } from "@/lib/projectsData";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const timelineItems = getTimeline();
  const projectItems = getProjectsList();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline items={timelineItems} />
        <TechStack />
        <Projects items={projectItems} />
        <Blog posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
