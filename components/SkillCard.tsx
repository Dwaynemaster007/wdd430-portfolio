interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <article className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-bold text-blue-800 mb-3">{category}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 text-sm bg-blue-50 text-blue-900 rounded-full border border-blue-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
