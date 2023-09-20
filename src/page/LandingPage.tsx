import React from "react";
import axios from "axios";
const LandingPage: React.FC = () => {
  // declare state to get the data from the api

  const [data, setData] = React.useState([] as any[]);

  // function to get data and call the api after every 5 seconds

  const getData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/")
      setData(response.data.results);
        setTimeout(getData, 5000);
    } catch (error) {
      console.log("An error occured" + error);
    }
  };

  const formatDate = (date: string) => {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da}-${mo}-${ye}`;
  }


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
              <img src={data[0]?.picture?.large} className="image" alt="" />
            </div>
            <h1 className="heading-text">{`${data[0]?.name?.title} ${data[0]?.name?.first} ${data[0]?.name?.last}`}</h1>
          </div>
        </div>
        <div className="side-2">
          <div className="side-2-wrapper">
            <p className="paragraph-text">Email: {data[0]?.email}</p>
            <p className="paragraph-text">Username: {data[0]?.login?.username}</p>
            <p className="paragraph-text">Gender: {data[0]?.gender}</p>
            <p className="paragraph-text">Phone: {data[0]?.phone}</p>
            <p className="paragraph-text">Country: {data[0]?.location?.country}</p>
            <p className="paragraph-text">City: {data[0]?.location?.city}</p>
            <p className="paragraph-text">DOB: {formatDate(data[0].dob.date)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
