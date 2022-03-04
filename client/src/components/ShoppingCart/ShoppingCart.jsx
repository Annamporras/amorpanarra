import React, { useState } from 'react'
import { ProductsContext } from "../../context/Products.context"
import { useContext } from 'react'

function ShoppingCart() {
    const { shoppingList } = useContext(ProductsContext)
    const [numberOfItems, setNumberOfItems] = useState(0)

    useEffect(() => {
        setNumberOfItems(shoppingList.length)
    }, [shoppingList])

    return (
        <div>{numberOfItems}</div>
    )
}

export default ShoppingCart