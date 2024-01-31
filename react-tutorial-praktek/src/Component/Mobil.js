import {React, useState} from "react";

const Mobil = (props) => {
    const [jumlahProduk, setJumlahProduk] = useState(0);
    const kurangProduct = () => {
        setJumlahProduk(jumlahProduk - 1);
    }
    const tambahProduct = () => {
        setJumlahProduk(jumlahProduk + 1);
    }

    return(
        <div className="card">
            <img style={{width: "100%", height: "200px", borderRadius: "10px 10px 0 0"}} src={props.gambar} alt="" />
            <div className="container">
                <h4><b>{props.tipe}</b></h4>
                <p>{props.deskripsi}</p>
            </div>
            <div className={`card-keranjang ${jumlahProduk > 0 ? "jumlah-Product" : "show-keranjang"}`}>
                {jumlahProduk > 0 ? 
                    <>
                        <button onClick={kurangProduct} className="button">-</button>
                        <div>{jumlahProduk}</div>
                        <button onClick={tambahProduct} className="button">+</button> 
                    </> :  
                    <div className="keranjang" onClick={tambahProduct}>+ Keranjang</div>
                }
            </div>
        </div>
        
    )
}

export default Mobil