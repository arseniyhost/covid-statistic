import React, { FC } from 'react';

interface ItemProps {
    id: number
    country: string
    total: number
    currentCountry:(item: any) => void
    item: object
}

const Item: FC<ItemProps> = ({ id, country, total, currentCountry, item }) => {
    return (
        <tr onClick={() => { currentCountry(item) }} className="item">
            <td className="id-item">{id}</td>
            <td className="country">{country}</td>
            <td className="total">{total}</td>
        </tr>
    )
}

export default Item
