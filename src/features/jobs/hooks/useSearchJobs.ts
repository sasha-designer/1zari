import useFiltersStore from "@/features/jobs/components/filter/stores/useFiltersStore";
import useSearchedListStore from "@/store/useSearchedListStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import qs from "qs";
import { useState } from "react";

type SearchJobResult = {
  job_posting_id: string;
  company_id: string;
  job_posting_title: string;
  address: string;
  city: string;
  district: string;
  town: string;
  work_day: string[];
  posting_type: string;
  employment_type: string;
  education: string;
  description?: string;
  cat?: string[];
  jobCats?: string[];
  work_experience?: string[];
  [key: string]: string | number | string[] | undefined; // 가능한 필드 타입으로 제한
};

export function useSearchJobs() {
  const {
    city,
    district,
    towns,
    selectedDays,
    employmentType,
    educations,
    cat,
    jobCats,
    workExperiences,
  } = useFiltersStore();
  const [result, setResult] = useState<SearchJobResult[] | null>(null);

  const { setSearchedList } = useSearchedListStore();
  const mutation = useMutation({
    mutationFn: async ({ searchKeyword }: { searchKeyword: string }) => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search/`, {
        params: {
          city_no: city?.id,
          district_no: district?.id,
          town_no: towns.map((town) => town.id),
          work_day: selectedDays,
          posting_types: "false",
          employment_type: employmentType,
          education: educations,
          job_keyword_main: cat?.id,
          job_keyword_sub: jobCats?.map((cat) => cat?.id).filter(Boolean),
          // job_keyword_sub: ["서빙"],
          search: searchKeyword,
          work_experience: workExperiences,
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      setSearchedList([]);
      setResult(data);
      setSearchedList(data.results);
    },
  });

  return {
    result,
    isLoading: mutation.isPending,
    error: mutation.error,
    search: (keyword: string) => mutation.mutate({ searchKeyword: keyword }), // 검색 실행 함수
  };
}
