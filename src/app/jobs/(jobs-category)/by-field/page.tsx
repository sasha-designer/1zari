"use client";

import { JobCard } from "@/features/home/components/JobCard";
import SelectedChips from "@/features/jobs/components/SelectedChips";
import { useFilterTabStore } from "@/features/jobs/components/filter/stores/useJobFilterTabsStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import JobFilter from "../../../../features/jobs/components/JobFilter";

interface JobPosting {
  job_posting_id: string;
  // add more fields if necessary
}

interface JobResponse {
  data: JobPosting[];
  message: string;
  page: number;
  total_pages: number;
  total_results: number;
}

const fetchJobs = async (page: number): Promise<JobResponse> => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/job-postings?page=${page}`);
  return data;
};

export default function JobsByFieldPage() {
  const setShowJobs = useFilterTabStore((state) => state.setShowJobs);
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ["byfield-jobs", page],
    queryFn: () => fetchJobs(page),
    // keepPreviousData: true,
    staleTime: 1000 * 60, // optional: 데이터 새로고침 방지
  });

  const paginatedJobs = data?.data || [];
  const totalPages = data?.total_pages || 1;

  useEffect(() => {
    setShowJobs(true);
  }, []);
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-6">
        <JobFilter />
        <SelectedChips />
      </div>
      <div className="bg-gray-z-light py-6">
        <section className="w-full max-w-7xl mx-auto my-8 px-4 ">
          <div className="flex justify-between items-center py-6 mb-4">
            <h2 className="text-2xl font-semibold">추천 공고</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {paginatedJobs.map((job) => (
              <JobCard key={job.job_posting_id} job={job} />
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              className="px-3 py-2 text-sm rounded border border-gray-300 disabled:opacity-50"
            >
              처음
            </button>
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-3 py-2 text-sm rounded border border-gray-300 disabled:opacity-50"
            >
              ◀ 이전
            </button>
            <span className="text-sm font-medium text-gray-700">
              {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-3 py-2 text-sm rounded border border-gray-300 disabled:opacity-50"
            >
              다음 ▶
            </button>
            <button
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages}
              className="px-3 py-2 text-sm rounded border border-gray-300 disabled:opacity-50"
            >
              마지막
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
