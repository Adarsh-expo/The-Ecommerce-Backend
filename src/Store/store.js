import { configureStore } from '@reduxjs/toolkit'
import userreducer from './reducers/userreducer'
import categoriesreducer from './reducers/categoriesreducer'
import productreducer from './reducers/productreducer'
import cartreducer from './reducers/cartreducer'

export default configureStore({
  reducer: {
User:userreducer,
Categories:categoriesreducer,
Products:productreducer,
Cart:cartreducer

  }
})