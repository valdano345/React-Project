import './App.css';
import Mobil from './Component/Mobil'



// const ProductCard = () => {
//   return (
//     <div className="card">
//       <img style={{width: "100%", height: "200px", borderRadius: "10px 10px 0 0"}} src="https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" />

//       <div className="container">
//           <h4>
//             <b>Ford</b>
//           </h4>
//           <p>Mobil Ford adalah ....</p>
//       </div>

//     </div>

//   )
// }

function App() {
  return (
    <div className="cards">
        <Mobil gambar="https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" tipe="Ford"  deskripsi="Mobil ford adalah mobil yang sangat bagus" />
        <Mobil gambar="https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMzE1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" tipe="Mustang"  deskripsi="Mobil Mustang mempunyai desain yang elegan" />
        <Mobil gambar="https://images.unsplash.com/photo-1559416523-140ddc3d238c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0MjIxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" tipe="Toyota"  deskripsi="Mobil toyota memiliki interior dan body yang kokoh" />
    </div>
  );
}

export default App;
