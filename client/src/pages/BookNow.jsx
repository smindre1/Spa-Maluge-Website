import ReservationForm from "../components/ReservationForm.jsx";
import { useRef, useEffect, useState} from "react";
import shopCheck from "../../utils/shopCheck";

function BookNow() {

  const [refresh, setRefresh] = useState(true);
  const [serviceList, setServiceList] = useState([]);
  const [addOnList, setAddOns] = useState([]);
  const reservationFormId = useRef(null);

  useEffect(() => {
    const url = import.meta.env.VITE_SPA_MALUGE_DB_API + `inventory/`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const serviceCategories = data.filter((itemList) => itemList.ItemCategory == 1 || itemList.ItemCategory == 2);
        let listOfServices = [];
        for (let i=0; i < serviceCategories.length; i++) {
            let itemCategoryNum = serviceCategories[i];
            let orgList = serviceCategories
            let list = orgList[i].Items.map((serviceObj) => {return {Item: serviceObj.Item, Prices: serviceObj.Prices, ItemCategory: itemCategoryNum.ItemCategory}});
            listOfServices = [...listOfServices, ...list];
        }
        setServiceList([...listOfServices]);
        const addOnServices = data.filter((itemList) => itemList.ItemCategory == 4);
        setAddOns(addOnServices[0].Items);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  }, []);

  useEffect(() => {
    refresh ? setRefresh(false) : null;

    if(reservationFormId.current != null) {
      const servicecount = Number(reservationFormId.current.getAttribute("servicecount"));
      const index = Number(servicecount) - 1;
    }
  }, [refresh])

  const loadServiceInfo = () => {
    let receipt = localStorage.getItem("spa_maluge_cart");
    receipt = JSON.parse(receipt) != null ? JSON.parse(receipt) : [];
    if(receipt == {}) {
      return (
        <p>No Services Selected...</p>
      )
    }
    const keys = Object.keys(receipt);

    return (keys.map((key, index) => {
      let data = receipt[key];
      return (
      <div className="receiptCharges" key={key}>
        {data.pro != "" ? <p className="receiptSubText">Service Charge:</p> : null}
        <section className="spcBtw">
          <p  className="receiptText">{data.pro}</p>
          <button onClick={() => {shopCheck.removeItem(index); setRefresh(true)}} className="delBtn">x</button>
        </section>
        {data.cl != "" ? <p  className="receiptText">({data.cl})</p> : null}
        {data.pro != "" && data.pr != "" ? <p  className="receiptText">${data.pr}.00</p> : data.pro != "" && data.pr == "" ? <p>...</p> : null}
        {data?.a_i ? <p  className="receiptSubText indent">Addition Service Charge:</p> : null}
        {data?.a_i[0] ? <p  className="receiptText indent">{data.a_i[0]}</p> : null}
        {data?.a_i ? <p  className="receiptText indent">${data.a_i[1]}.00</p> : null}

        {data?.a_ii ? <p  className="receiptSubText indent">Addition Service Charge:</p> : null}
        {data?.a_ii?.[0] ? <p className="receiptText indent">{data.a_ii[0]}</p> : null}
        {data?.a_ii?.[1] ? <p className="receiptText indent">${data.a_ii[1]}.00</p> : null}
      </div>)
    }))
  }


  return (
    <div className="flexRow resPage">

        <ReservationForm ref={reservationFormId} updateReceipt={setRefresh} items={serviceList} additions={addOnList}/>
        <section className="reservationSummary">
          <div className="reservationReceipt">
            {!refresh ? loadServiceInfo() : null}
          </div>
        </section>
    </div>
  );
}

export default BookNow;