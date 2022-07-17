
import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/icon_personal.svg'
import { BASE_URL } from '../../utils/request';
import './estilo.css'




type Props = {
  saleId: number;
}

function handleclick(id: number) {
  
  axios.get(`${BASE_URL}/sales/${id}/notification`).then(
    response => {
      toast.info("SMS enviado com sucesso");
    }
  );
}


function NotificationButton({saleId} : Props) {

  return(
    <div className="dsmeta-red-btn" onClick={()=>handleclick(saleId)}>

      <img  src={icon} alt="notificar"/>

    </div>
  )

}
  


export default NotificationButton
