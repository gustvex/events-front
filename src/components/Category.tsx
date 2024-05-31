export default function Category() {
  const CategoryArray = [
    {
      title: "Sertanejo",
      img: "img/category/bg-sertanejo.webp",
    },
    {
      title: "Eletrônico",
      img: "img/category/bg_eletronica.webp",
    },
    {
      title: "Rock",
      img: "img/category/bg-rock.webp",
    },
    {
      title: "Pop",
      img: "img/category/bg_pop.jpeg",
    },
  ];

  return (
    <div className="flex space-x-4">
      {CategoryArray.map((category, index) => (
        <div
          key={index}
          className="w-full sm:w-[320px] h-[290px] p-4 flex flex-none items-center rounded-xl"
          style={{
            backgroundImage: `url(${category.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-primary">{category.title}</h2>
        </div>
      ))}
    </div>
  );
}
