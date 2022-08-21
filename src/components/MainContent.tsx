import React from "react";
import { ICategory } from "../models";
import { Category } from "./Category"

interface CategoriesProps {
    categories: ICategory[]
}

export function MainContent({ categories }: CategoriesProps) {
    return (
        <ul>
            <ul className="bg-gray-300 w-40 top-0 bottom-0">
                {categories.map(category => <Category key={category.id} category={category} />)}
            </ul>
            {/* {categories.map(category => (
          <>
            <li key={category.id}>{category.name}</li>
            <ul>
              {category.subCategories.map(sub => <li className="border rounded py-2 px-4" key={sub.id}>{sub.title}</li>)}
            </ul>
          </>
        ))} */}
        </ul>
    )
}
