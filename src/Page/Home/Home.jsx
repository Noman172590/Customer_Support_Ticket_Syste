import axios from "axios";
import NavBar from "../../Components/Navbar/NavBar";
import Banner from "../../Components/Share/Banner";
import Ticket from "../../Components/Ticket/Ticket";
import { Suspense } from "react";

const response = axios.get("/order.json");
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto  flex gap-6 ">
        <Banner />
        <Banner number="0" InProgress="Resolved" backgroundColor="#0D8E77" />
      </div>
      <div>
        <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
          <Ticket data={response} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
