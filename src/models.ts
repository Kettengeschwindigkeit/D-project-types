
export interface ICategory {
    id: number
    name: string
    path: string
    subCategories: ISubCategory[]
}

interface ISubCategory {
    id: number
    title: string
    path: string
}
