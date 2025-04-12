const ENDPOINTS = {
  AUTH: {
    LOGIN: "/user_auth/api/v1/create-superadmin/",
    LOGOUT: "/user_auth/api/v1/User/logout/",
    SEND_OTP: "/user_auth/api/v1/User/send-otp-email/",
    VERIFY_OTP: "/user_auth/api/v1/User/verify-email/",
    FORGOT_PASSWORD: "/user_auth/api/v1/User/forgot-password/",
    RESET_PASSWORD: (token) => `/user_auth/api/v1/User/change-password/${token}`,
  },
  USER: {
    GET: "/user_auth/api/v1/User/",
    UPDATE: "/user_auth/api/v1/User/update/",
    UPDATE_MOBILE: "/user_auth/api/v1/User/send-otp-mobile/",
    VERIFY_OTP : "/user_auth/api/v1/User/verify-otp-to-change-mobile/" 
  },
  CATEGORIES: {
    CREATE: "/product_category/api/v1/Category/",
    GET_ALL: "/product_category/api/v1/Categories/",
    UPDATE: (id) => `/product_category/api/v1/Category/update/${id}`,
    DELETE: (id) => `/product_category/api/v1/Category/del/${id}`,
    GET_BY_ID: (id) => `/categories/${id}`,
  },
  PRODUCT: {
    CREATE: "/alvista_product/api/v1/Product/",
    GET_ALL: (page,limit)=> `/alvista_product/api/v1/Products/?page=${page}&limit=${limit}`,
    GET_BY_ID: (id) => `/product/api/v1/Product/${id}`,
    UPDATE: (id) => `/product/api/v1/Product/update/${id}`,
    DELETE: (id) => `/alvista_product/api/v1/Product/del/${id}`,
  },
  PROMO: {
    GET_ALL_PROMO: "/promo_type/api/v1/PromoType/",
    CREATE: "/alvista_promo/api/v1/Promotion/",
  },
  COUPON: {
    CREATE: "/discount_coupon/api/v1/Voucher/",
    GET_ALL_COUPONS: (page, limit)=> `/discount_coupon/api/v1/Vouchers/?page=${page}&limit=${limit}`,
    DELETE_COUPAN: (id) => `/discount_coupon/api/v1/Voucher/del/${id}`,
    EDIT_COUPAN: (id) => `/discount_coupon/api/v1/Voucher/update/${id}`, 
  },
  REVIEW:{
      GET_ALL: "/product_rating_review/api/v1/RatingReview/getAll/",
      APPROVE: (id) => `/product_rating_review/api/v1/RatingReview-approve-disapprove/${id}`,
      DELETE: (id) => `/product_rating_review/api/v1/RatingReview/del/${id}`,
    },
  CUSTOMER:{
    GET_ALL: "/user_auth/api/v1/Users/",
    DELETE: (id) => `/user_auth/api/v1/User/del/${id}`,
  },
  BANNER:{
    GET_ALL_BANNERS: (page,limit)=> `/alvista_promo/api/v1/Promotions/?page=${page}&limit=${limit}`,
    DELETE_BANNER: (id) => `/alvista_promo/api/v1/Promotion/del/${id}`,
    UPDATE: (id) => `/alvista_promo/api/v1/Promotion/update/${id}`,
  }
} 

export default ENDPOINTS;
