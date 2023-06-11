//******************************************************************************
// imports
//******************************************************************************
import styles    from './page.module.css'
import getLeague from '@/lib/getLeague';


//******************************************************************************
// types
//******************************************************************************
type Props = {
  params : {
    id : string ,
  }
}


//******************************************************************************
// LeaguePage
//******************************************************************************
const LeaguePage = async ( { params : { id } } : Props ) => {
  const { name } = await getLeague( id );

  return <main className={ styles.main }>
    <h2>{ name }</h2>
  </main>
};


//******************************************************************************
// exports
//******************************************************************************
export default LeaguePage;
