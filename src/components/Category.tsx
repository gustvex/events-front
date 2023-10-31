interface CategoryProps {
  title?: string;
}
const CategoryTitles = ["Rock", "Funk", "Pop", "Hip-Hop"];

export default function Category({ title }: CategoryProps) {
  return (
    <div className="flex  max-w-[1350px]">
      {CategoryTitles.map((title, index) => (
        <div className="w-[350px] h-[200px] p-4 flex flex-none items-center bg-secondary mr-4">
          <h2 className="text-black ">{title}</h2>
        </div>
      ))}
    </div>
  );
}
