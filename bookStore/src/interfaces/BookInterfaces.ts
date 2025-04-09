interface IHasId {
    id: string 
}
interface IAuthor extends IHasId {
    name: string
}
interface ICategory extends IHasId {
    name: string,
    is_leaf: boolean| false
}
interface ISeller extends IHasId {
    sku: string
    name: string
    link: string
    logo: string
    price: number
    product_id: number
    store_id: number
    is_best_store: boolean
    is_offline_installment_supported: null | undefined

}
interface IImage {
    base_url: string,
    large_url: string,
    medium_url: string,
    small_url: string
}
interface IQuanTitySold {
    text: string,
    value: number
}
interface IAttributes {
    code: string
    name: string
    value: string
}
interface ISpecifications {
    name: string,
    attributes: IAttributes[]
}
export   interface IBook extends IHasId {
    
    authors?: IAuthor[],
    category?: ICategory,
    current_seller?: ISeller,
    description?: string,
    images?: IImage[],
    list_price?: number,
    name?: string,
    original_price?: number,
    quantity_sold?: IQuanTitySold,
    rating_average?: number,
    short_description?: string,
    specifications?: ISpecifications[]
}



<<<<<<<< HEAD:bookStore/src/interfaces/BookInterfaces.ts


  

========
export interface ICategory {
    id?: number,
    name: string,
    createdAt: string,
  }
  
  export interface IUser {
    id?: number,
    email: string,
    password?: string
  }
>>>>>>>> 29e2130 (Added Category CRUD  in Admin views and added API for category):bookStore/src/interfaces.ts
  