const types = {
  authLogin: 'auth - login',
  authLogout: 'auth - logout',
  productsDelete: 'product - delete all',
  productChange: 'product - change',
}

const initialStore = {
  user: { id: 1, name: 'Lexfer' },
  products: [
    { id: 1, title: 'Product #1' },
    { id: 2, title: 'Product #2' },
    { id: 3, title: 'Product #3' },
  ],
}

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.authLogout:
      return {
        ...state,
        user: null,
      }
    case types.authLogin:
      return {
        ...state,
        user: action.payload,
      }
    case types.productsDelete:
      return {
        ...state,
        products: [],
      }
    case types.productChange:
      return {
        ...state,
        products: [{ id: 4, title: 'product4' }],
      }
    default:
      return state
  }
}

export { initialStore, types }
export default storeReducer
