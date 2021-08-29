import { createContext, useReducer, useContext } from 'react'
import storeReducer, { initialStore } from './storeReducer'

const StoreContext = createContext()

const StoreProvider = ({ children }) => (
  /* * store hace referencia al state, tiene toda la informaion del estado global */
  //   const [store, dispatch] = useReducer(storeReducer, initialStore)

  // <StoreContext.Provider value={[store, dispatch]}>
  <StoreContext.Provider value={useReducer(storeReducer, initialStore)}>
    {children}
  </StoreContext.Provider>
)

const useStore = () => useContext(StoreContext)[0]
const useDispatch = () => useContext(StoreContext)[1]

export { StoreContext, useStore, useDispatch }
export default StoreProvider
