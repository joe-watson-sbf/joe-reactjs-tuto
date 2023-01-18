import React from 'react'

const initialState = {
    name:'',
    price: 0,
    quantity: 0,
}


const DynamicFormFields = () => {

    const [products, setProducts] = React.useState([])

    const addMoreProducts=()=>{
        const list =[...products]
        list.push(initialState)
        setProducts(list)
    }

    const handleProductChange=(e, index)=>{
        const {name, value} = e.target
        const product = {...products[index], [name]: value}
        const list = [...products]
        list[index] = product
        setProducts(list)
    }

    const handleRemoveProduct=(index)=>{
        const list=[...products]
        list.splice(index, 1)
        setProducts(list)
    }


    const handleSubmitProducts=()=>{
        alert(JSON.stringify(products, null, 2))
    }



    return (
        <div className='flex-col'>
            <h1 className='title'>
                Add & Remove Form Fields Dynamically
            </h1>

            {
                products.map((product, index)=> {
                    return (
                        <div className='flex-row input-group' key={index}>
                            <div>
                                <label>Name</label>
                                <input 
                                    type='text'
                                    name='name'
                                    value={product.name} 
                                    onChange={(e)=> handleProductChange(e, index)}
                                    />
                            </div>

                            <div>
                                <label>Price</label>
                                <input 
                                    type='text'
                                    name='price'
                                    value={product.price} 
                                    onChange={(e)=> handleProductChange(e, index)}
                                    />
                            </div>

                            <div>
                                <label>Quantity</label>
                                <input 
                                    type='text'
                                    name='quantity'
                                    value={product.quantity} 
                                    onChange={(e)=> handleProductChange(e, index)}
                                    />
                            </div>

                            <button onClick={()=> handleRemoveProduct(index)} className='delete'> x </button>
                        </div>
                    )
                })
            }




            {
                products.length > 0 ? <div>
                <button onClick={addMoreProducts} className='add-more'>+ Add More</button>
                <button onClick={handleSubmitProducts} className='btn'>Submit Products</button>
                </div> : 
                <button onClick={addMoreProducts} className='btn'>Add Products</button>
            }

        </div>
    )
}

export default DynamicFormFields