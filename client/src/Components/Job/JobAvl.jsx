import React from "react";
import { useState, useEffect } from "react";
import "./job.css";
import compLogo from "../../Assets/netflix.png";
import { Link } from "react-router-dom";
import axios from "axios";

function JobAvl() {
  const [serachCategory, setSearchCategory] = useState("");
  const [searchLoaction, setSearchLocation] = useState("");
  const [filterJob, setFilterJob] = useState([]);
  const [isDivVisible, setDivVisible] = useState(false);
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/job`);
        setJobData(response.data);
        setFilterJob(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const showDiv = () => {
    setDivVisible(true);
  };
  const hidediv = () => {
    setDivVisible(false);
  };

  const handleCategoryChange = (e) => {
    const categeoryValue = e.target.value;
    setSearchCategory(categeoryValue);
    setFilterJob([categeoryValue, searchLoaction]);
  };

  const handleCategoryLocationChange = (e) => {
    const loactionValue = e.target.value;
    setSearchLocation(loactionValue);
    setFilterJob([serachCategory, loactionValue]);
  };

  const filterJobs = (category="", location="") => {
    if (jobData && jobData.length > 0) {
     
    
    const filterData = jobData.filter(
      (Job) =>
        Job.category.toLowerCase().includes(category.toLowerCase()) &&
        Job.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilterJob(filterData);
  
  };
}

  useEffect(() => {
    filterJobs(serachCategory, searchLoaction);
  }, [searchLoaction, serachCategory]);
  console.log(filterJob);

  return (
    <>
      <div className="flex internship-filter">
        <div className="first-int mb-14">
          <div className="filter-section w-1/6">
            <p className=" text-center">
              <i onClick={showDiv} className="bi bi-funnel  text-blue-400"></i>{" "}
              Filter
            </p>
            <div className="fill flex flex-col ml-2">
              <label htmlFor="pro">Profile</label>
              <input
                type="text"
                id="pro"
                value={serachCategory}
                onChange={handleCategoryChange}
                className="profile border-2 mr-3 w-full rounded-md"
                placeholder="Profile manager"
              />
              <label htmlFor="loc">Location</label>
              <input
                type="text"
                id="loc"
                value={searchLoaction}
                onChange={handleCategoryLocationChange}
                className="location border-2 rounded-md w-full"
                placeholder="Mumbai"
              />
            </div>
            <div className=" preferences mt-8 flex flex-col">
              <div className="flex mt-1 ml-3 mr-3">
                <input
                  type="checkbox"
                  name="wfh"
                  id="whf"
                  className="mr-2 ml-3"
                />
                <label htmlFor="wfh">Work From home</label>
              </div>
              <div className="flex mt-1 mb-4 ml-3 mr-3">
                <input
                  type="checkbox"
                  name="pt"
                  id="whf"
                  className="mr-2 ml-3"
                />
                <label htmlFor="pt">Part-time</label>
              </div>
              <p>Salary Anually (in lakhs) (₹)</p>
              <input className="mt-2" type="range" name="" id="" />
              <p className="mt-2 ml-3 mr-3">
                4 &nbsp; 6 &nbsp; 8 &nbsp; 12 &nbsp; 16 &nbsp; 20
              </p>
            </div>

            <p className=" mt-3 text-blue-400">
              View more filters <i className="bi bi-chevron-down"></i>
            </p>
            <span className="justify-end flex text-blue-400 mr-3 ">
              Clear all
            </span>
          </div>
          <div className="search-2">
            <label className="mt-1 ml-1" htmlFor="ex">
              Experience
            </label>
            <div className="search-container -mt-6">
              <input
                type="text"
                id="ex"
                placeholder="0-1 Year"
                className="rounded-md mr-1"
              />
              <div className="search-icon">
                <i className="bi bi-search"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="all-internships">
          <div className=" show show2 flex justify-center">
            <p id="filter-ico" className=" filterico text-center">
              filter{" "}
              <i className="bi bi-funnel  text-blue-400" onClick={showDiv}></i>{" "}
            </p>
          </div>

          <p className="head font-bold text-lg text-center ">
            {filterJob.length} total jobs
          </p>
          {filterJob.map((data, index) => (
            <div className="shadow-lg rounded-lg bg-white m-7 " id="display">
              <div className="m-4">
                <p className="mb-4 mt-3" id="boxer">
                  {" "}
                  <div className="mt-1">
                    <i className="bi bi-arrow-up-right text-blue-500"></i>{" "}
                    Actively Hiring
                  </div>
                </p>
                <div className="flex justify-end">
                  <img src={compLogo} className="w-14" alt="" />
                </div>
                <div className="all-ele">
                  <div className="text-lg text-black m-2 mt-7 font-bold">
                    {data.title}
                  </div>
                  <div className="info">
                    <p className="text-sm text-slate-300 font-bold">
                      {data.company}
                    </p>
                    <p className=" mt-2">{data.location}</p>
                  </div>
                  <div className="flex text-sm justify-between">
                    <p className="mt-3">
                      {" "}
                      <i className="bi bi-play-circle-fill"></i> Start Date{" "}
                      <br /> {data.StartDate}
                    </p>

                    <p className="mt-3">
                      {" "}
                      <i className="bi bi-calendar-check-fill"></i> Experience{" "}
                      <br />
                      {data.Experience} Years
                    </p>

                    <p className="mt-3">
                      {" "}
                      <i className="bi bi-cash"></i> Salary <br /> {data.CTC}
                    </p>
                  </div>
                </div>
                <span className="bg-slate-200 text-slate-400 w-20 rounded-sm text-center">
                  Job
                </span>
                <br />
                <span>
                  <i className="bi bi-stopwatch text-green-300"></i>23/11/2065
                </span>
                <div className="flex justify-end" id="hr">
                  <Link to={`/detailJob?q=${data._id}`} className="mt-10">
                    <button
                      id="viewButtons"
                      className="bg-transparent text-blue-500"
                    >
                      View In Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isDivVisible && (
        <>
          <div className="first2-int mb-14">
            <div className="filter-section w-1/6">
              <button id="close-btn" onClick={hidediv}>
                <i className=" text-3xl bi bi-x"></i>
              </button>
              <p id="filter-ico" className=" text-center">
                <i
                  onClick={showDiv}
                  className="bi bi-funnel  text-blue-400"
                ></i>{" "}
                Filter
              </p>
              <div className="fill flex flex-col ml-2">
                <label htmlFor="pro">Profile</label>
                <input
                  type="text"
                  id="pro"
                  value={serachCategory}
                  onChange={handleCategoryChange}
                  className="profile border-2 mr-3 w-full rounded-md"
                  placeholder="Profile manager"
                />
                <label htmlFor="loc">Location</label>
                <input
                  type="text"
                  id="loc"
                  value={searchLoaction}
                  onChange={handleCategoryLocationChange}
                  className="location border-2 rounded-md w-full"
                  placeholder="Mumbai"
                />
              </div>
              <div className=" preferences mt-8 flex flex-col">
                <div className="flex mt-1 ml-3 mr-3">
                  <input
                    type="checkbox"
                    name="wfh"
                    id="whf"
                    className="mr-2 ml-3"
                  />
                  <label htmlFor="wfh">Work From home</label>
                </div>
                <div className="flex mt-1 mb-4 ml-3 mr-3">
                  <input
                    type="checkbox"
                    name="pt"
                    id="whf"
                    className="mr-2 ml-3"
                  />
                  <label htmlFor="pt">Part-time</label>
                </div>
                <p>Salary Anually (in lakhs) (₹)</p>
                <input className="mt-2" type="range" name="" id="" />
                <p className="mt-2 ml-3 mr-3">
                  4 &nbsp; 6 &nbsp; 8 &nbsp; 12 &nbsp; 16 &nbsp; 20
                </p>
              </div>

              <p className=" mt-3 text-blue-400">
                View more filters <i className="bi bi-chevron-down"></i>
              </p>
              <span className="justify-end flex text-blue-400 mr-3 ">
                Clear all
              </span>
            </div>
            <div className="search-2">
              <label className="mt-1 ml-1" htmlFor="ex">
                Experience
              </label>
              <div className="search-container -mt-6">
                <input
                  type="text"
                  id="ex"
                  placeholder="0-1 Year"
                  className="rounded-md mr-1"
                />
                <div className="search-icon">
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
          </div>

          <div className=" show show2 flex justify-center">
            <p id="filter-ico" className=" text-center">
              filter{" "}
              <i className="bi bi-funnel  text-blue-400" onClick={showDiv}></i>{" "}
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default JobAvl;
