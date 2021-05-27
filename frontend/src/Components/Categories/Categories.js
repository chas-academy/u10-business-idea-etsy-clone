import { Link } from 'react-router-dom';

function Categories(props) {
  return (
    <ul className="categories">
      {props.categories.map((category, index) => (
        <li key={index}>
          <Link to={'/c/' + category.slug}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
