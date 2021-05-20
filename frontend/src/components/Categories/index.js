function Categories(props) {
    return <ul className='categories'>
      { props.categories.map((category, index) => <li key={index}><a href="#">{category}</a></li>) }
    </ul>
}

export default Categories;