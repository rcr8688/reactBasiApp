

const CategoryItem = (category) => {
  const { title } = category;
  return (
    <div className="category-continer">
      <div className="background-Image" />
      <div className="categories-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
