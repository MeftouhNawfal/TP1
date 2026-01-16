import "./App.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.png";
import image4 from "./images/image4.jpg";


function App() {
  

  return (
    <div className="container">
      
        <div className="card" >
          <img
            src={image1}
            alt={"image1"}
            className="card-image"
          />

          <p className="card-title">PC portable Game hp</p>
          <p className="card-price">7490</p>

          <button className="btn">Ajouter au panier</button>
        </div>
    </div>
  );
}

export default App;
