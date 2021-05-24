function Categories(props) {
    return <ul className='categories'>
      { props.categories.map((category, index) => <li key={index}><a href={'/c/' + category.slug}>{category.title}</a></li>) }
    </ul>
}

export default Categories;