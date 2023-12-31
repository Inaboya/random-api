import React, { useEffect } from "react";
import axios from "axios";
import moment from "moment";
const LandingPage: React.FC = () => {
  // declare state to get the data from the api

  const [data, setData] = React.useState([] as any[]);

  // function to get data and call the api after every 5 seconds

  const getData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setData(response.data.result[0]);
      setTimeout(getData, 5000);
    } catch (error) {
      console.log("An error occured" + error);
    }
  };

  const formatDate = (date: string) => {
    const formattedDate = moment(date).format("DD-MMM-YYYY");
    return formattedDate;
  };

  // call the function to get data

  useEffect(() => {
    getData && getData();
  }, []);

  return (
    <div className="data-container">
      {data && data.length === 0 ? (
        <div className="no-data">Loading...</div>
      ) : (
        <div className="data-container-wrapper">
          <div className="side-1">
            <div className="side-1-wrapper">
              <div className="image-container">
                <img src={data[0].picture.large} className="image" alt="" />
              </div>
              <h1 className="heading-text">{`${data[0].name.title} ${data[0]?.name?.first} ${data[0]?.name?.last}`}</h1>
            </div>
          </div>
          <div className="side-2">
            <div className="side-2-wrapper">
              <p className="paragraph-text">
                <span>Email:</span> {data[0].email}
              </p>
              <p className="paragraph-text">
                <span>Username:</span> {data[0].login.username}
              </p>
              <p className="paragraph-text">
                <span>Gender:</span> {data[0].gender}
              </p>
              <p className="paragraph-text">
                <span>Phone:</span> {data[0].phone}
              </p>
              <p className="paragraph-text">
                <span>Country: </span>
                {data[0].location.country}
              </p>
              <p className="paragraph-text">
                <span>City:</span> {data[0].location.city}
              </p>
              <p className="paragraph-text">
                <span>DOB:</span> {formatDate(data[0].dob.date)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
