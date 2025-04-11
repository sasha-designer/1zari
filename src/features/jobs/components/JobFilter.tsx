"use client";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import FilterJobs from "../../../components/filter/FilterJobs";
import FilterLocation from "../../../components/filter/FilterLocation";
import FilterOtherConditions from "../../../components/filter/FilterOtherConditions";

export default function JobFilter() {
  const [showLocation, setShowLocation] = useState(false);
  const [showJobs, setShowJobs] = useState(false);
  const [showOtherConditions, setShowOtherConditions] = useState(false);

  return (
    <>
      <section className="w-full max-w-7xl mx-auto my-8">
        <div className="flex flex-col mb-4">
          <h2 className="text-2xl font-bold py-6">
            <span className="text-primary">전체 지역, 모든 직종</span>에 대한 채용공고에요!
            <br />
            검색 조건을 변경하고 싶으신가요?
          </h2>
          <div className="max-w-2xl flex gap-2 mt-4 justify-between items-center">
            <button
              className="w-full border border-gray-300 px-2 py-3 rounded-md flex justify-center items-center gap-2 text-gray-500"
              onClick={() => {
                setShowLocation((prev) => !prev);
                setShowJobs(false);
                setShowOtherConditions(false);
              }}
            >
              근무지역
              <span
                className={`transition-transform duration-300 ${showLocation ? "rotate-180" : ""}`}
              >
                <FaCaretDown />
              </span>
            </button>
            <button
              className="w-full border border-gray-300 px-2 py-3 rounded-md flex justify-center items-center gap-2 text-gray-500"
              onClick={() => {
                setShowJobs((prev) => !prev);
                setShowLocation(false);
                setShowOtherConditions(false);
              }}
            >
              직종
              <span className={`transition-transform duration-300 ${showJobs ? "rotate-180" : ""}`}>
                <FaCaretDown />
              </span>
            </button>
            <button
              className="w-full border border-gray-300 px-2 py-3 rounded-md flex justify-center items-center gap-2 text-gray-500"
              onClick={() => {
                setShowOtherConditions((prev) => !prev);
                setShowLocation(false);
                setShowJobs(false);
              }}
            >
              상세조건
              <span
                className={`transition-transform duration-300 ${showOtherConditions ? "rotate-180" : ""}`}
              >
                <FaCaretDown />
              </span>
            </button>
            <button className="w-full bg-primary text-white px-2 py-3 rounded-md flex justify-center items-center gap-2">
              검색하기
            </button>
          </div>
          {showLocation && <FilterLocation />}
          {showJobs && <FilterJobs />}
          {showOtherConditions && <FilterOtherConditions />}
          <div className="flex  justify-end mt-4">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="group flex justify-center items-center gap-2 bg-gray-300 px-4 py-2 rounded-md text-sm text-gray-800 cursor-pointer"
            >
              <span className="group-hover:rotate-180 transform transition-transform duration-300">
                <IoMdRefresh />
              </span>
              초기화
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
