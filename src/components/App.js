import React, {useState, useEffect} from "react";

function App(){
    const [image, setImage] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=> r.json())
        .then((data) => {
        setImage(data.message); 
        setIsLoaded(true); 
      });
  }, []);

    if(!isLoaded)return <p>"Loading..."</p>
    

return(
    <div>

        <img src={image} alt="A Random Dog"/>
    </div>
)
}


export default App;