import React from 'react'
import Card from './Card'

function Cards({ products }) {
    return (
        products.map((prod) => {
            return (
                <Card key={prod.id} data={prod} />
            )
        })

    )
}

export default Cards