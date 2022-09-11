import product from "./ProductMap";
import {getStoreData} from "./ApiMainFunc"
const productCard = ({product
    })=> {
        getStoreData()

        return(
           <div> 
            <div className=" container productOuterContainer ">
                <div className=" row productCardOuter ">
                    <div className="col mt-2">
                    
            <div>
                <img src={product?.image } alt={` of ${product?.title}` }/>
            </div>
            </div>
            <div className="col productInfoStyle">
            <dl>
                <dt>
                    Title
                </dt>
                <dd>
                    {product?.title}
                </dd>
                <dt>
                    Price
                </dt>
                <dd>
                    {product?.price}
                </dd>
                <dt>
                    Product Description
                </dt>
                <dd>
                    {product?.description}
                </dd>
                <dt>
                    Category
                </dt>
                <dd>
                    {product?.category}
                </dd>
            </dl>
            </div>
            
            </div>
            </div>
        </div>
        )
    }

    export default productCard;