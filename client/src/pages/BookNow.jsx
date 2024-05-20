import ReservationForm from "../components/ReservationForm.jsx";
import { useRef, useEffect, useState} from "react";

function BookNow() {

  const [refresh, setRefresh] = useState(true);
  const reservationFormId = useRef(null);

  useEffect(() => {
    refresh ? setRefresh(false) : null;
  }, [refresh])

  const loadServiceInfo = () => {
    // const keys = ["serviceone", "servicetwo", "servicethree", "servicefour", "servicefive"];
    let receipt = localStorage.getItem("receipt");
    receipt = JSON.parse(receipt);
    if(receipt == {}) {
      return (
        <p>No Services Selected...</p>
      )
    }
    const keys = Object.keys(receipt);

    return (keys.map((key) => {
      let data = receipt[key];
      return (
      <div className="reservationReceipt" key={key}>
        <p>{data.type}</p>
        <p>{data.client}</p>
        {data.type != "" && data.price != "" ? <p>{data.price}</p> : data.type != "" && data.price == "" ? <p>...</p> : null}
        {data?.addons ? <p>{data.addons[0].addition}</p> : null}
        {data?.addons ? <p>{data.addons[0].price}</p> : null}
        {data?.addons ? <p>{data.addons[1]?.addition}</p> : null}
        {data?.addons ? <p>{data.addons[1]?.price}</p> : null}
      </div>)
    }))


  }

  return (
    <div className="flexRow">
        <ReservationForm updateReceipt={setRefresh}/>
        <section className="reservationSummary">
          <div className="reservationReceipt">
          {!refresh ? loadServiceInfo() : null}
          </div>
        </section>
    </div>
  );
}

export default BookNow;