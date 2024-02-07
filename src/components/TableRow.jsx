import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const TableRow = ({ item }) => {
  let link = `https://www.${item.links}`;
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSelect = (e) => {
    setSelectedTags((prev) => [...prev, e.target.value]);
  };

  const handleRemoveTag = (item) => {
    let temp = selectedTags.filter((i) => {
      return item !== i;
    });
    setSelectedTags(temp);
  };

  const mapSelectTag = (data) => {
    let arr = [data.split(",")];
    return (
      <td className="p-[10px] bg-white">
        <select value="" className="p-[5px]" onChange={handleSelect}>
          <option value="" className="p-[5px]">
            Select Tags
          </option>
          {arr[0].map((item) => {
            return (
              <option name={item} id={item}>
                {item}
              </option>
            );
          })}
        </select>
      </td>
    );
  };
  return (
    <>
      <tr className="border-spacing-y-[20px] px-[30px] text-center">
        <td className="p-[10px] ml-[20px] bg-white rounded-tl-lg rounded-bl-lg">
          {item.id}
        </td>
        <td className="p-[10px] bg-white text-blue-600 underline">
          <a href={link} target="_blank">
            www.{item.links}
          </a>
        </td>
        <td className="p-[10px] bg-white">{item.prefix}</td>
        {mapSelectTag(item["select tags"])}
        <td className="p-[5px] bg-white rounded-tr-lg h-[50px] rounded-br-lg flex overflow-wrap">
          {selectedTags.map((item) => {
            return (
              <div className="flex items-center bg-[#605BFF] text-white p-[8px] m-[5px] rounded-md">
                <p className="mr-[5px]">{item}</p>
                <IoMdClose
                  onClick={() => {
                    handleRemoveTag(item);
                  }}
                />
              </div>
            );
          })}
        </td>
      </tr>
    </>
  );
};

export default TableRow;
