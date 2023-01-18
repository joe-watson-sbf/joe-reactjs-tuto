import React from 'react'

const initialProduct = {
    name: '',
    price: 0,
    quantity: 0
}


const DynamicFormFields = () => {

    const [products, setProducts] = React.useState([])

    const addMoreProducts = () => {
        const list = [...products]
        list.push(initialProduct)
        setProducts(list)
    }

    const handleProductChange = (e, index) => {
        const { name, value } = e.target
        const product = { ...products[index], [name]: value }
        const list = [...products]
        list[index] = product
        setProducts(list)
    }

    const handleRemoveClick = (index) => {
        const list = [...products]
        list.splice(index, 1)
        setProducts(list)
    }

    const handeSubmit = () => {
        alert(JSON.stringify(products, null, 2))
    }


    return (
        <div className='flex-col'>
            <h1 className='title'>Add & Remove Form Fields dynamically</h1>
            {products.map((product, index) => {
                return (
                    <div className='flex-row input-group' key={index}>
                        <div>
                            <label style={{ display: 'block' }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder='Laptop'
                                value={product.name}
                                onChange={e => handleProductChange(e, index)}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block' }}>Price</label>
                            <input
                                name="price"
                                placeholder='Price'
                                value={product.price}
                                onChange={e => handleProductChange(e, index)}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block' }}>Quantity</label>
                            <input
                                name="quantity"
                                placeholder='Quantity'
                                value={product.quantity}
                                onChange={e => handleProductChange(e, index)}
                            />
                        </div>
                        <span className='delete' onClick={() => handleRemoveClick(index)}> x </span>
                    </div>
                )
            })}

            {products.length > 0 ? <div>
                <button className='add-more' onClick={addMoreProducts}>+ Add More</button>
                <button className='btn' onClick={handeSubmit}> Submit Products </button>
            </div>
                : <button className='btn' onClick={addMoreProducts}>Add Product</button>
            }

        </div>
    )
}

export default DynamicFormFields