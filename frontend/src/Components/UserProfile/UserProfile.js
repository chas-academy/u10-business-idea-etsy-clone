// import ProductCard from '../ProductCard/Card'
import Products from '../Products/Products';

const UserProfile = ({ userProducts, callsetuser }) => {
  console.log('User proofile component', userProducts);
  return (
    <>
      <>
        {userProducts ? (
          // <h1>Here are your products: </h1>
          <Products products={userProducts} />
        ) : (
          <h3>No Products to show</h3>
        )}
      </>
    </>
  );
};

export default UserProfile;
