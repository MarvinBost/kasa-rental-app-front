export default function TagList({tags}: {tags: string[]}) {
  return (
    <div className="flex gap-2 mt-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-[#FF6060] text-white px-4 py-1 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
