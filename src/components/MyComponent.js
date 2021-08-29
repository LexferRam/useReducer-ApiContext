// import React, { useContext } from 'react'
// import { StoreContext } from '../store/StoreProvider'
import { useDispatch, useStore } from '../store/StoreProvider'
import { types } from '../store/storeReducer'

const MyComponent = () => {
  //   const [store, dispatch] = useContext(StoreContext)
  //   const { user, products } = store
  const { user, products } = useStore()
  const dispatch = useDispatch()

  return (
    <div>
      <h1>My component</h1>
      <h2>User: {user?.name}</h2>
      <button onClick={() => dispatch({ type: types.authLogout })}>
        Logout
      </button>
      <button
        onClick={() =>
          dispatch({
            type: types.authLogin,
            payload: { id: 1, name: 'Lexfer' },
          })
        }
      >
        Login
      </button>

      <h2>Products</h2>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: types.productsDelete })}>
        Delete All
      </button>
      <button onClick={() => dispatch({ type: types.productChange })}>
        Change
      </button>
    </div>
  )
}

export default MyComponent
