//******************************************************************************
// imports
//******************************************************************************
import { League } from "@prisma/client"


//******************************************************************************
// getLeague
//******************************************************************************
const getLeagues = async () : Promise< League[] > => {
  const url = "http://localhost:3000/api/leagues";

  const response : Response = await fetch( url );
  const leagues  : League[] = await response.json();

  return leagues;
}


//******************************************************************************
// exports
//******************************************************************************
export default getLeagues;
