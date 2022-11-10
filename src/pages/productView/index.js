import React, {useEffect, useState} from 'react';
import {useLocation } from "react-router-dom";

/**
 * Module representing the view of a singe product.
 * @module ProductView
 * @return {module} ProductView
 */


const ProductView = () =>{

    const location = useLocation()
    
    const [itemData, setItemData] = useState(null)
    
    useEffect(() => {
        let {item} = location.state
        setItemData(item) 
      }, []);
    
      return(
        itemData &&  
            <div class="bg-white">
            <div class="pt-6">
                <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                        <img src={itemData.image} class="h-full w-full object-cover object-center"/>
                    </div>
                </div>

                <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{itemData.title}</h1>
                    </div>

                    <div class="mt-4 lg:row-span-3 lg:mt-0 lg:col-start-3">
                        <h2 class="sr-only">Product information</h2>
                        <p class="text-3xl font-bold tracking-tight text-gray-900">${itemData.price}</p>
                        <p class="text-md mt-5 tracking-tight text-gray-900">Rating: {itemData.rating.rate}</p>

                        <form class="mt-8">
                            <button type="submit" class="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                        </form>
                    </div>

                    <div class="py-0 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                        <div>
                            <h3 class="sr-only">Description</h3>
                            <div class="space-y-6">
                                <p class="text-base text-gray-900">{itemData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductView;