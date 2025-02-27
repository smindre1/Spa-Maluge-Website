import { useEffect } from "react";

function Test() {
    useEffect(() => {
        // Create and append the script dynamically
        const script = document.createElement("script");
        script.src =
            "https://www.vagaro.com//resources/WidgetWindowLoader/OZqpDZ0sCJCcT3qmV35y6RuSdBuOc1WJDvwXDxUra2StkvCxdfkJE1wZCBOvifCs7fYJEPwMc9CxkPwR61WQd0?v=zKNR2ex7ws7QB5ZcYBetfiEB3O4NDRsoRD53yGpsHmr#";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup on unmount
        };
        }, []);

  return (
<div className="vagaro" style={{width: "250px", padding: 0, border: 0, margin: "0 auto", textAlign: "center", fontSize: "14px", color: "#AAA"}}>
    <a href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHj0D92Kry9uKJLZng8QKTshJ0ig+gxT+zAwSlxpgmQd2t6awtBVDSehSgX6YMhE4h8pgxdqsCzEr3PDH+0LQVdjhosn8OItSRdV6n3hkyy1N2HWzaNyW8XqNpiT9XmVY58yGFBXV88yFpzAp0mtl+a5iHiywk18l79oNcGwD8O5Pm5WYh08sQbkBaiJFPyb/hN06+eIq38fL73V6miVAWmrNIWgQc8/RA/fOulplM2MyWEBL7g+6TjXJiiK82VD9W7pIJ5Mkg88wSdfjmMAcUFhXbH1QLYmnvwHZjmcYUYhKT327kzQyxp58PCGOwHr4Oyim430dsKuML7WBO0DOcquQMteJt06XBvXL3hd0WejRyiDxm0VNIrYeCsl3juH82LnfHls/8lSWEP+ipuE1SR98E2xadQPCZUPR/4FW1jG3bigvM0zGNLo3sWb112uyw==">Book Now</a>&nbsp;
{/* <script type="text/javascript" src="https://www.vagaro.com//resources/WidgetWindowLoader/OZqpDZ0sCJCcT3qmV35y6RuSdBuOc1WJDvwXDxUra2StkvCxdfkJE1wZCBOvifCs7fYJEPwMc9CxkPwR61WQd0?v=zKNR2ex7ws7QB5ZcYBetfiEB3O4NDRsoRD53yGpsHmr#"></script> */}
</div>
  );
}

export default Test;