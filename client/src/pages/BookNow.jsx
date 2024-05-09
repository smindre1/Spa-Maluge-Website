import ReservationForm from "../components/ReservationForm.jsx";

function BookNow() {
  // ReservationId.current.getAttribute("receipt");

    return (
    <div className="flexRow">
        <ReservationForm />
        <section className="reservationSummary">
          <div className="reservationReceipt">

          </div>
        </section>
    </div>
  );
}

export default BookNow;