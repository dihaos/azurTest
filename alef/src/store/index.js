import {createStore} from 'redux'
import { dataReducer } from './dataReducer'

export const store = createStore(dataReducer)