import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function AllCategories() {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch("https://all-about-boardgames.herokuapp.com/api/categories")
            .then((response) => response.json())
            .then((categories) => {
                setCategoryList(categories.categories);
            })
    }, [])

    return (
        <section>
            <ol className="category-list">
                {
                    categoryList.map((category) => {
                        return (<li><Link className="all-links" to={`/reviews/category/${category.slug}`}>{category.slug}</Link></li>)
                    })
                }
            </ol>
        </section>
    );
}