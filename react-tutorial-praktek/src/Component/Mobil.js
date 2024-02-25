import {React, useState} from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import ProductEdit from "./ProductEdit";


const Mobil = ({product, onDeleteProduct, onEditProduct}) => {
    const {id, imageURL, nama, deskripsi} = product;
    const [jumlahProduk, setJumlahProduk] = useState(0);
    const [showEdit, setShowEdit] = useState(false);
    const kurangProduct = () => {
        setJumlahProduk(jumlahProduk - 1);
    }
    const tambahProduct = () => {
        setJumlahProduk(jumlahProduk + 1);
    }
    // const handleDelete = () => {
    //     onDeleteProduct(id);
    // }
    // const handleShow = () => {
    //     setShowEdit(!showEdit);
    // }
    const handleSubmit = (id, data) => {
        setShowEdit(false);
        onEditProduct(id, data);
    }
    const cancelEdit = () => {
        setShowEdit(false);
    }

    return(
        <div className="card">
        {showEdit ? (<ProductEdit product={product} onEditProduct={handleSubmit} cancelEdit={cancelEdit} />) : (
            <>
                <div className="edit-delete">
                    <AiTwotoneEdit className="icon-edit" onClick={() => {setShowEdit(!showEdit)}} />
                    <MdDeleteForever onClick={() => {onDeleteProduct(id)}} className="icon-delete"/>
                </div>
                <img style={{width: "100%", height: "200px", borderRadius: "10px 10px 0 0"}} src={imageURL} alt="" />
                <div className="container">
                    <h4><b>{nama}</b></h4>
                    <p>{deskripsi}</p>
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
            </>
        )}
        </div>
    )
}

export default Mobil