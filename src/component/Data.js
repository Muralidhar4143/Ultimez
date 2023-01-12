import React, {useState, useEffect} from 'react'

const Data = () => {
    const url = "https://lobster-app-ddwng.ondigitalocean.app/product/add_new"

    const [useData, setUseData] = useState({})
    const data = async () =>
{
    const response = await fetch(url)
    const jsonData = await response.json()
    setUseData(jsonData)
}    

    useEffect(()=>{
        data()
    })

return (
    <div>
        <table>
            <h1>ALl Products</h1>
            <tr>
                <h1 >Product Name</h1> {useData.product_name}
            </tr>
            <tr>
                <h1>Orginal Price</h1> {useData.original_price}
            </tr>
            <tr>
                <h1>Sale price</h1> {useData.sale_price}
            </tr>
            <tr>
                <h1>Product Type</h1> {useData.product_type}
            </tr>
            <tr>
                <h1>Description</h1> {useData.description}
            </tr>
        </table>
      
    </div>
  )
}

export default Data
