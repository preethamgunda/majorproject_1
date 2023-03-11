
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink
} from 'mdb-react-ui-kit';

function Ticket() {
  return (
    <div className='container' style={{marginTop: "100px"}}>
    <form>
  <div class="form-group" style={{marginLeft:"500px",marginRight:"500px"}}>
    <label for="exampleInputEmail1">Source</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter source"/>
  </div>
  <div class="form-group" style={{marginLeft:"500px",marginRight:"500px"}}>
    <label for="exampleInputEmail1">Destination</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter destination"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Generate QR</button>
</form>
</div>
  );
}

export default Ticket;