// import ProductCard from '../ProductCard/Card'
import Products from '../Products/Products';

const UserProfile = ({ userProducts }) => {
  return (
    <>
      <>
        {userProducts.length > 1 ? (
          <>
            <h1>Here are your products: </h1>
            <Products products={userProducts} />
          </>
        ) : (
          <h3>No Products to show</h3>
        )}
      </>
    </>
  );
};

export default UserProfile;
