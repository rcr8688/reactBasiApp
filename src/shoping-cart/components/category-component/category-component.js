import CategoryItem from '../category-item-component/category-item-component'
import './category-style.scss'

const CategoryComponent = () => {
    var categories = [
        { id: 1, title: "sneakers" },
        { id: 2, title: "Women" },
        { id: 3, title: "Men" },
        { id: 4, title: "Hats" }
    ]
    return (
        <div className="categories-container">
            {categories.map((category) =>
                <CategoryItem key={category.id} category={category} />
            )}
        </div>
    )
}

export default CategoryComponent;
