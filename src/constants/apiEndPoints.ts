export const API_ENDPOINTS = {
  AUTH: {
    LOGOUT: "/user/logout/",
    REFRESH_TOKEN: "/user/token/refresh/",
    DELETE_ACCOUNT: "/user/delete/",
    SEND_VERIFICATION: "/user/verification/send/",
    EMAIL_CHECK: "/user/email/check/",
    VERIFY_CODE: "/user/verification/verify/",
    USER: {
      SIGNUP: "/user/common/signup/",
      LOGIN: "/user/normal/login/",
      COMPLETE_SIGNUP: "/user/normal/signup/",
      SOCIAL: {
        KAKAO: {
          LOGIN: "/user/oauth/kakao/login/",
          CALLBACK: "/user/kakao/callback/",
        },
        NAVER: {
          LOGIN: "/user/oauth/naver/login/",
          CALLBACK: "/user/naver/callback/",
        },
      },
    },
    COMPANY: {
      SIGNUP: "/user/common/signup/",
      COMPLETE_SIGNUP: "/user/company/signup/",
      LOGIN: "/user/company/login/",
    },
    VERIFY: {
      SEND_CODE: "/user/verify/send-code/",
      VERIFY_CODE: "/user/verify/code/",
      CHECK_BUSINESS: "/user/verify/business/",
    },
  },

  CSRF: "/csrf",

  USER: {
    PROFILE: "/user/normal/info/",
    UPDATE_PROFILE: "/user/normal/info/update/",
    FIND_EMAIL: "/user/normal/find/email/",
    RESET_PASSWORD: "/user/normal/reset/password/",
    REQUEST_PHONE_CODE: "/user/verify/send-code/",
    VERIFY_PHONE_CODE: "/user/verify/code/",
  },
  COMPANY: {
    PROFILE: "/user/company/info/",
    UPDATE_PROFILE: "/user/company/info/update/",
    FIND_EMAIL: "/user/find/company/email/",
    RESET_PASSWORD: "/user/reset/company/password/",
  },
  JOB_POST: {
    LIST: "/job-postings/",
    DETAIL: (id: string) => `/job-postings/${id}`,
    CREATE: "/job-postings/create/",
    UPDATE: (id: string) => `/job-postings/${id}/`,
    DELETE: (id: string) => `/job-postings/${id}/`,
  },
  JOB_FILTER: {
    LOCATION: "/search/region/",
    CATEGORY: "/search/job/",
  },
  RESUME: {
    LIST: "/resume/",
    DETAIL: (id: string) => `/resume/${id}/`,
    UPDATE: (id: string) => `/resume/${id}/`,
    DELETE: (id: string) => `/resume/${id}/`,
  },
  BOOKMARK: {
    LIST: "job-postings/bookmark/",
    ADD: (id: string) => `job-postings/bookmark/${id}/`,
    DELETE: (id: string) => `job-postings/bookmark/${id}/`,
  },
  APPLICANT: {
    LIST: "submission/company/",
    READ_RESUME: (id: string) => `submission/company/${id}/`,
  },
  APPLY: {
    POST: "submission/",
  },
} as const;

export const API_MESSAGES = {
  SUCCESS: {
    LOGIN: "로그인 성공",
    LOGOUT: "로그아웃 성공",
    SIGNUP: "회원가입 성공",
    SOCIAL_LOGIN: "소셜 로그인 성공",
    COMPANY_LOGIN: "기업 로그인 성공",
    FIND_EMAIL: "이메일 찾기 성공",
    RESET_PASSWORD: "비밀번호 재설정 성공",
    UPDATE_INFO: "회원 정보 수정 성공",
    DELETE_ACCOUNT: "회원 탈퇴 성공",
  },
  ERROR: {
    INVALID_CREDENTIALS: "이메일 또는 비밀번호가 올바르지 않습니다.",
    TOKEN_EXPIRED: "인증이 만료되었습니다. 다시 로그인해주세요.",
    SERVER_ERROR: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
    SOCIAL_LOGIN_FAILED: "소셜 로그인에 실패했습니다. 다시 시도해주세요.",
    COMPANY_LOGIN_FAILED: "기업 로그인에 실패했습니다. 다시 시도해주세요.",
    FIND_EMAIL_FAILED: "이메일 찾기에 실패했습니다. 입력 정보를 확인해주세요.",
    RESET_PASSWORD_FAILED: "비밀번호 재설정에 실패했습니다. 다시 시도해주세요.",
    UPDATE_INFO_FAILED: "회원 정보 수정에 실패했습니다. 다시 시도해주세요.",
    DELETE_ACCOUNT_FAILED: "회원 탈퇴에 실패했습니다. 다시 시도해주세요.",
  },
} as const;
