export const  Check=()=>{
  let show=JSON.parse(localStorage.getItem('checkout'));
  return (<>
    <div>{show.location}</div>
    <img src={show.image}></img><br></br>
    <div>Ratings:{show.rating} {   }  stars</div>
    <div>2500</div>
   <div>Discount Available: {show.discount}  % </div>
    <div>Specialty automobile repair shops are shops specializing in certain parts such as brakes, mufflers and exhaust systems, transmissions, body parts, automobile electrification, automotive air conditioner repairs, automotive glass repairs and installation, and wheel alignment or those who only work on certain brands of vehicle or vehicles from certain continents of the world. There are also automotive repair shops that specialize in vehicle modifications and customization.</div>
  </>)
}