import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function AllCategories() {

    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://all-about-boardgames.herokuapp.com/api/categories")
            .then((response) => response.json())
            .then((categories) => {
                setCategoryList(categories.categories);
                setIsLoading(false);
            })
    }, [])
    
    if(isLoading) return <p>Loading...</p>

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