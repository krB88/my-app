import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"

/**
 * Module representing all the data points which are available on fda.
 * @module ProductsList
 * @return {module} ProductsList
 */


const ProductsList = () => {

    const navigate = useNavigate();

    const [productsData, setProductsData] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductsData(json))
      }, []);

    const handleClick = (item)=>{
        navigate('/productView',{state:{item:item}});
    }

    return(
        <section className="fda-data-points">
            <div class="bg-white">
                <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="sr-only">Products</h2>
                    <div class="grid grid-cols-1 gap-y-10 gap-x-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-30">
                        {
                            productsData && productsData.map((item, index) => (
                                
                                <button onClick={()=>{handleClick(item)} }>
                                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <img src={item.image}/>
                                    </div>
                                    <h3 class="mt-4 text-sm text-gray-700">{item.title}</h3>
                                    <p class="mt-1 text-lg font-medium text-gray-900">{item.price} $</p>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
);}
    
  
ProductsList.propTypes = {
};

export default ProductsList;