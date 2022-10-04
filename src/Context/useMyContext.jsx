import { useContext } from 'react'
import { MyContext } from './Context'

export function useMyContext()  {

  return useContext(MyContext);
}
