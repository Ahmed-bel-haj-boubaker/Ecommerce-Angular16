export class Products{
    id: number;
    name: string;
    description: string;
    categoryId: number;
    price: number;
    image: string;
    slug:string;
    qte:number;
  category: import("c:/Users/belha/Desktop/Ecommerce Angular/EcommerceWithAngular16/src/app/products/model/category.model").Category | undefined;
    
    constructor() {
       this.id = 0;
       this.description='';
       this.categoryId= 0;
       this.price=0;
       this.image='';
       this.name='';
       this.qte=0;
       this.slug="";
      }
    }