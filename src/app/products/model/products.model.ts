

export class Products{
count() {
throw new Error('Method not implemented.');
}
    id: number;
    name: string;
    description: string;
    categoryId: number;
    price: number;
    image: string;
    slug:string;
    qte:number;
    catName:string;
    
    constructor() {
       this.id = 0;
       this.description='';
       this.categoryId= 0;
       this.price=0;
       this.image='';
       this.name='';
       this.qte=0;
       this.slug="";
       this.catName="";
      }
    }