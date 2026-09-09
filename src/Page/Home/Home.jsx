import axios from "axios";
import NavBar from "../../Components/Navbar/NavBar";
import Banner from "../../Components/Share/Banner";
import Ticket from "../../Components/Ticket/Ticket";
import { Suspense, useState } from "react";
import Footer from "../../Components/Footer/Footer";

const response = axios.get("/order.json");
const Home = () => {
  const[progress,setProgress]=useState(0)
  const[resolved,setResolved]=useState(0)
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto   md:flex gap-6 ">
        <Banner number={progress} />
        <Banner number={resolved} InProgress="Resolved" backgroundColor="#0D8E77" />
      </div>
      <div>
        <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
          <Ticket setResolved={setResolved} setProgress={setProgress} data={response} />
        </Suspense>
      </div>
      <div className="border bg-black">
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
