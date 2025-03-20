const Footer = ({ categories = [] }) => {
    const nbCategories = categories.length;
    return(
        <div style={{ backgroudColor: "yellowgreen"}}>
            <div>
                {nbCategories} Categories
            </div>
        </div>
    )
}

export default Footer