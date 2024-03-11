export default function Category() {

  const CategoryTitles = ["Rock", "Funk", "Pop", "Hip-Hop"];
  
  return (
    <div className="flex space-x-4">  
      {CategoryTitles.map((title, index) => (
        <div className="w-full sm:w-[350px] h-[200px] p-4 flex flex-none items-center  bg-secondary">
          <h2 className="text-black ">{title}</h2>
        </div>
      ))}
    </div>
  );
}
