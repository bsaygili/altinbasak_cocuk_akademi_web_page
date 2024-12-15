import React from 'react'
import { Link } from 'react-router-dom';


type CategoryBarProps = {
    data: {
        categoryName: string,
        link: string
        className?: string
        styleCss?: { [key: string]: string }
    }[]
}

const CategoryBar: React.FC<CategoryBarProps> = ({ data }) => {
    return data.map(({ categoryName, link, className, styleCss }, index) => {
        return (
            <Link to={link} className={className} style={styleCss} key={index}>
                {categoryName}
            </Link>
        )
    })

}
export default CategoryBar