import React from 'react'

const Item = ({ id, id_item, country, total, currentCountry, item }) => {
    return (
        <tr key={id_item} onClick={() => { currentCountry(item) }} className="item">
            <td className="id-item">{id}</td>
            <td className="country">{country}</td>
            <td className="total">{total}</td>
        </tr>
    )
}

export default Item
