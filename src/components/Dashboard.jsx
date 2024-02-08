import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { MdOutlineFileUpload } from "react-icons/md";
import Papa from "papaparse";
import TableRow from "./TableRow";

const Dashboard = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [csvData, setCsvData] = useState([]);
  const [sideBarClass, setSideBarClass] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isSideBarOpen) {
      setSideBarClass(
        `lg:block absolute top:0 w-[100vw] lg:w-[15%] translate-x-[0vw] lg:translate-x-0 top-0 transition-all duration-500`
      );
    } else {
      setSideBarClass(
        `lg:block absolute top:0 w-[100vw] lg:w-[15%] translate-x-[-100vw] lg:translate-x-0 top-0 transition-all duration-500`
      );
    }
  }, [isSideBarOpen]);
  const mapHeader = (csv) => {
    if (csv.length) {
      return (
        <>
          <td className="p-[10px] font-[600]">SI No.</td>
          <td className="p-[10px] font-[600]">Links</td>
          <td className="p-[10px] font-[600]">Prefix</td>
          <td className="p-[10px] font-[600]">Add Tags</td>
          <td className="p-[10px] font-[600]">Selected Tags</td>
        </>
      );
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
      },
      header: true,
    });
  };

  return (
    <div className=" h-[100vh] bg-gray-100 relative m-0, p-0">
      <NavBar className="absolute" setIsSideBarOpen={setIsSideBarOpen} />
      {
        <div className={sideBarClass}>
          <Sidebar
            className="absolute top-0"
            setIsSideBarOpen={setIsSideBarOpen}
          />
        </div>
      }
      <p className="ml-[30px] mt-[30px] mb-[40px] lg:hidden">Upload Csv</p>

      <div className="bg-white w-[90vw] lg:w-[35vw] h-[27vw] m-[auto] p-[20px] rounded-[15px] lg:ml-[40%] mt-[10%]">
        <div className="border-[4px] m-[auto] border-dotted w-[100%] lg:w-[100%] h-[100%] lg:h-[100%] rounded-[15px]">
          <div className="flex justify-center items-center flex-col h-[100%]">
            <img src="/icons/exel-logo.png" alt="" className="w-[50px]" />
            {!fileName && (
              <p className="text-[#9A9AA9]">
                Drop your excel sheet here or{" "}
                <span className="text-blue-600">browse</span>
              </p>
            )}
            {fileName && (
              <div className="flex flex-col justify-center items-center">
                <p className="text-[#9A9AA9]">{fileName}</p>
                <p
                  className="text-[#c63f3f] cursor-pointer"
                  onClick={() => {
                    fileInputRef.current.value = null;
                    setCsvData([]);
                    setFileName("");
                  }}
                >
                  Remove
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="m-[auto] mt-[40px] w-[100%] relative">
          {!isSideBarOpen && (
            <div className="text-center flex justify-center items-center bg-[#605BFF] rounded-md text-white py-[8px] mt-[20px]">
              <MdOutlineFileUpload className="mr-[10px] h-[25px] w-[25px]" />
              <p>Upload</p>
              <input
                type="file"
                name="file"
                accept=".csv"
                ref={fileInputRef}
                className="block h-[100%] w-[100%] opacity-0 cursor-pointer absolute top-0 bottom-0 left-0 right-0"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          )}
        </div>
      </div>
      {csvData && (
        <table className="border border-separate bg-gray-100 border-spacing-y-[10px] p-[20px] w-[80%] m-[auto] rounded-lg mt-[50px] lg:ml-[18%]">
          <thead className="border">{mapHeader(csvData)}</thead>
          <tbody>
            {csvData.map((item, i) => {
              let tr = <TableRow key={i} item={item} />;
              return tr;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
