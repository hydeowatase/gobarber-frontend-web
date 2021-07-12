import  {createContext} from "react"

interface IAuthCOntex{
  name :string
}

const AuthContex = createContext<IAuthCOntex>({} as IAuthCOntex);

export default AuthContex;
