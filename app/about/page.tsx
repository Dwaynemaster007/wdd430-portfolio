import SkillCard from '@/components/SkillCard';

const skillGroups = [
  { category: 'Web Development', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express'] },
  { category: 'Data & Databases', skills: ['SQL', 'MongoDB', 'Python', 'Data Analysis'] },
  { category: 'Finance', skills: ['Pricing Analysis', 'Financial Modeling', 'Risk Management'] },
];

export default function About() {
  return (
    <main className="max-w-5xl mx-auto w-full px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-4">
        I&apos;m Thubelihle, a Pricing Analyst at a bank in Eswatini. I studied accounting and
        finance, and I&apos;m now studying software development at BYU-Pathway alongside a master&apos;s
        in financial engineering.
      </p>
      <p className="text-lg text-gray-700 mb-10">
        I enjoy building tools that connect finance and technology, from SQL reconciliation
        scripts at work to web applications like the ones in my portfolio.
      </p>

      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <section aria-label="Skills" className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillCard key={group.category} category={group.category} skills={group.skills} />
        ))}
      </section>
    </main>
  );
}
