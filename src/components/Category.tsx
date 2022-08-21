import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../models";

interface CategoryProps {
    category: ICategory
}

export function Category({ category }: CategoryProps) {
    const [subCategories, setSubCategories] = useState(false)

    return (
        <>
            <button className="border px-1 py-1 bg-gray-100" key={category.id} onClick={() => setSubCategories(prev => !prev)}>{category.name}</button>
            <ul>
            {subCategories ? category.subCategories.map(sub => <li className="bg-white border" key={sub.id}><Link to={sub.path}>{sub.title}</Link></li>) : null}
            </ul>
        </>
    )
}
