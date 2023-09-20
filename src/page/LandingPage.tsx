import React from "react";
import axios from "axios";
const LandingPage: React.FC = () => {
  // declare state to get the data from the api

  const [data, setData] = React.useState([] as any[]);

  // function to get data and call the api after every 5 seconds

  const getData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setData(response.data.results);
      //   setTimeout(getData, 5000);
    } catch (error) {
      console.log("An error occured" + error);
    }
  };

  console.log(data, "data");

  // call the function

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="data-container">
      <div className="data-container-wrapper">
        <div className="side-1">
          <div className="side-1-wrapper">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            <h1>{data[0]?.name?.title}</h1>
          </div>
        </div>
        <div className="side-2">
          <div className="side-2-wrapper">
            <p className="paragraph-text">UserName</p>
            <p className="paragraph-text">UserName</p>
            <p className="paragraph-text">UserName</p>
            <p className="paragraph-text">UserName</p>
            <p className="paragraph-text">UserName</p>
            <p className="paragraph-text">UserName</p>
            <p className="paragraph-text">UserName</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
