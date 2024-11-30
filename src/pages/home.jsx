import React from "react";
import { Container } from "react-bootstrap";
import AppNavbar from "./navbar";
import "./home.css";
import feature1Image from '../assets/feature1.jpeg';
import feature1Image2 from '../assets/Designer (2).jpeg';
import feature1Image3 from '../assets/Designer (3).jpeg';



const Home = () => {
  return (
    <>
      <AppNavbar />
      <div className="animation-container">
      <h1 className="block-effect" style={{ "--td": "1.2s" }}>
        <div className="block-reveal" style={{ "--bc": "#4040bf", "--d": ".1s" }}>
          Certificate 
        </div>
        <div className="block-reveal" style={{ "--bc": "#bf4060", "--d": ".5s" }}>
          Verification System
        </div>
      </h1>
    </div>
      <div className="heading" style={{ marginTop: "1rem", backgroundColor: "transparent" }}>
        <h1 className="animated-heading">
          Streamline your certificate verification and management processes with our efficient system.</h1>


      </div>
      <div className="home-background">
        <Container className="mt-4 text-center text-overlay">


          {/* <div>
          <img
            src={HomeImage}
            alt="Home"
            style={{
              width: "80%",
              maxWidth: "100px",
              height: "auto",
              border: "5px solid black",
            }}
          />
        </div> */}
        </Container>
      </div>
      <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
  <div className="container mx-auto space-y-12">
    <div className="flex flex-col lg:flex-row overflow-hidden rounded-md shadow-sm">
      <img src={feature1Image} alt="" className="h-80 dark:bg-gray-500" height={150} />
      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
        <h3 className="text-3xl font-bold">Easy Data Upload & Management</h3>
        <p className="my-6 dark:text-gray-600">The system allows admins to quickly upload and manage student data, making the process more efficient.</p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row-reverse overflow-hidden rounded-md shadow-sm">
      <img src={feature1Image2} alt="" className="h-80 dark:bg-gray-500 aspect-video" height={150} />
      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
        <h3 className="text-3xl font-bold">Instant Certificate Retrieval</h3>
        <p className="my-6 dark:text-gray-600">Users can easily search for and access their certificates using a unique ID, providing quick and convenient access to important documents.</p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row overflow-hidden rounded-md shadow-sm">
      <img src={feature1Image3} alt="" className="h-80 dark:bg-gray-500 aspect-video" height={150} />
      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
        <h3 className="text-3xl font-bold">Data Validation & Security</h3>
        <p className="my-6 dark:text-gray-600">The system ensures that data is accurate and secure, providing peace of mind to both admins and students.</p>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default Home;
