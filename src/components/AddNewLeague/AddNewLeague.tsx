//******************************************************************************
// imports
//******************************************************************************
import styles            from "./AddNewLeague.module.css";
import { redirect      } from "next/navigation";
import { revalidateTag } from "next/cache";
import { prisma        } from "@/lib/db";

async function handleForm( data : FormData ) {
  "use server"

  const name = data.get( "name" )?.valueOf() as string;

  await prisma.league.create({ data : { name } });

  revalidateTag( "leagues" );
  redirect( "/leagues" );
}

//******************************************************************************
// AddNewLeague
//******************************************************************************
const AddNewLeague = () => {
  return <form action={ handleForm } className={ styles.form }>
    <input type="text" name="name" placeholder="Add new league" />
    <input type="submit" value="add" />
  </form>
};


//******************************************************************************
// exports
//******************************************************************************
export default AddNewLeague;
