// import ProductCard from '../ProductCard/Card'
import Products from '../Products/Products';

const UserProfile = ({userProducts}) => {
  return (
    <>
      <h1>Here are your products!</h1>
      <>
      {userProducts ? <Products data={userProducts} /> : <h3>No Products to show</h3>}
      </>
              
    </>
  );
};

export default UserProfile;
