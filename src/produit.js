import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.png";
import image4 from "./images/image4.jpg";

function Products() {
    const products = [
    {
      id: 1,
      title: "PC Portable Gamer HP VICTUS",
      price: "7490 DH",
      thumbnail: image1,
    },
    {
      id: 2,
      title: "PC Portable Gamer HP VICTUS",
      price: "2190 DH",
      thumbnail: image2,
    },
    {
      id: 3,
      title: "PC Portable Chromebook Acer",
      price: "3640 DH",
      thumbnail: image3,
    },
    {
      id: 4,
      title: "PC Portable - HUAWEI",
      price: "1270 DH",
      thumbnail: image4,
    },
  ];
    return(
         <div className="container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.thumbnail} alt={product.thumbnail} className="card-image" />

          <p className="card-title">{product.title}</p>
          <p className="card-price">{product.price}</p>

          <button className="btn">Ajouter au panier</button>
        </div>
      ))}
    </div>
    );
}

export default Products;