import ProjectList from '@/components/ProjectList';

const github = 'https://github.com/dwaynemaster007';

const projects = [
  {
    title: 'Books API',
    description:
      'A RESTful Express and Node.js API for managing a collection of books, built for CSE 341 Web Services.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'REST'],
    link: `${github}/cse341-books`,
  },
  {
    title: 'The First Paycheck',
    description:
      'A multi-page website teaching personal finance basics to young professionals, including an interactive budget calculator.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: `${github}/wdd131`,
  },
  {
    title: 'Filtered Temples',
    description:
      'A responsive image gallery of temples with JavaScript filters for old, new, large and small temples.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: `${github}/wdd131`,
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto w-full px-4 py-12">
      <section className="text-center pb-10">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I&apos;m a pricing analyst and software development student learning Next.js and React.
          Here are some of the projects I have built.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
