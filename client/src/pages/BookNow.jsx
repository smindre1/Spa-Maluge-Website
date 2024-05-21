import ReservationForm from "../components/ReservationForm.jsx";
import { useRef, useEffect, useState} from "react";

function BookNow() {

  const [refresh, setRefresh] = useState(true);
  const [receiptHeight, setReceiptHeight] = useState("reservationSummary receiptHeightOne");
  const reservationFormId = useRef(null);

  useEffect(() => {
    refresh ? setRefresh(false) : null;

    if(reservationFormId.current != null) {

      const classes = ["reservationSummary receiptHeightOne", "reservationSummary receiptHeightTwo", "reservationSummary receiptHeightThree", "reservationSummary receiptHeightFour", "reservationSummary receiptHeightFive"];
      const servicecount = Number(reservationFormId.current.getAttribute("servicecount"));
      const index = Number(servicecount) - 1;
      setReceiptHeight(classes[index]);
    }
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
      <div className="receiptCharges" key={key}>
        {data.type != "" ? <p className="receiptSubText">Service Charge:</p> : null}
        <p  className="receiptText">{data.type}</p>
        {data.client != "" ? <p  className="receiptText">({data.client})</p> : null}
        {data.type != "" && data.price != "" ? <p  className="receiptText">${data.price}.00</p> : data.type != "" && data.price == "" ? <p>...</p> : null}
        {data?.addons?.[0]?.addition ? <p  className="receiptSubText indent">Addition Service Charge:</p> : null}
        {data?.addons ? <p  className="receiptText indent">{data.addons[0].addition}</p> : null}
        {data?.addons ? <p  className="receiptText indent">${data.addons[0].price}.00</p> : null}

        {data?.addons?.[1]?.addition ? <p  className="receiptSubText indent">Addition Service Charge:</p> : null}
        {data?.addons?.[1]?.addition ? <p className="receiptText indent">{data.addons[1]?.addition}</p> : null}
        {data?.addons?.[1]?.price ? <p className="receiptText indent">${data.addons[1]?.price}.00</p> : null}
      </div>)
    }))
  }


  return (
    <div className="flexRow">
        <section className={receiptHeight}>
          <div className="reservationReceipt">
            {!refresh ? loadServiceInfo() : null}
          </div>
        </section>
        <ReservationForm ref={reservationFormId} updateReceipt={setRefresh}/>
    </div>
  );
}

export default BookNow;