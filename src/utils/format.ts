/**
 * 날짜 문자열을 'YYYY.MM.DD' 형식으로 변환합니다.
 * @param dateString - ISO 형식의 날짜 문자열 (예: "2024-03-01T09:00:00.000Z")
 * @returns 'YYYY.MM.DD' 형식의 날짜 문자열
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
};

/**
 * 생년월일을 'YYYY년 MM월 DD일' 형식으로 변환합니다.
 * @param dateString - ISO 형식의 날짜 문자열
 * @returns 'YYYY년 MM월 DD일' 형식의 날짜 문자열
 */
export const formatBirthDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, "0")}월 ${String(date.getDate()).padStart(2, "0")}일`;
};

/**
 * 주어진 날짜가 현재 시점을 기준으로 지났는지 확인합니다.
 * @param deadline - 마감일자 (YYYY-MM-DD 형식)
 * @returns boolean
 */
export const isPrevious = (deadline: string): boolean => {
  return new Date(deadline) < new Date();
};

export const formatSalary = (salary: number) => {
  return `${salary.toLocaleString()}원`;
};
