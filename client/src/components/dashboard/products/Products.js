import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Container,
    HeaderNewProduct,
    FormNewProduct,
    ContainerFiltre,
    InputsSearch
   } from '../Assets'
   import {ContainerSearch,
    InputClearDiv,
    InputSearch,
    ButtonCancel,
    ButtonSearchMobile, 
    SearchIconDiv,
    InputSearchDiv} from '../../layout/Assets'
    // import { Search, Right, Edit, Delete} from "../../img";
import { ReactComponent as Search } from "../../img/icons/search.svg"
import { ReactComponent as Right } from "../../img/icons/right-arrow.svg"
import { ReactComponent as Edit } from "../../img/icons/edit.svg"
import { ReactComponent as Delete} from '../../img/icons/delete-bin.svg'
// Redux importing 
import {connect} from 'react-redux'
import { getAllProduct, getProduct, getId, removeProductStock } from '../../../actions/product'
import { getCategorys } from '../../../actions/category'
import PropTypes from 'prop-types'


const Products = ({ getAllProduct, getCategorys, category:{categorys}, product: {products, loading}, getId, removeProductStock }) => {
    const [formData, setFormData] = useState({
        productCategoryID: '',
        categoryName: ''
    })
        // Search State 
        const [dataSearch, setdataSearch] = useState ({
            searchEtat: '',
            categoryName: '',
            searchNameIDProduct: ''
           })
     
           const {
             searchEtat,
             searchNameIDProduct
             } = dataSearch;
     
           const onSearch = e => {
               setdataSearch({
                 ...dataSearch,
                  [e.target.name]:e.target.value}
                  )
             }
             useEffect(()=> {
                 getAllProduct()
                 getCategorys()
             }, [])

        //Build option category 
        var ok = 0;
        categorys.map(te=> {
        if(te._id!=="testID" && ok===0)
        categorys.unshift({_id:"testID", categoryName :"Filtrer par categorie"})
        ok=1
        })
            //Function select option category
      const Onsele = e =>{
        e.preventDefault() 
        var dropd = document.getElementById("slct"); 
        var options = dropd.options;
        var id = options[options.selectedIndex].id;
        var value = options[options.selectedIndex].value;
        
          setFormData({
            ...formData,
            productCategoryID: value,
            categoryName: id
          })
          if(id==="Filtrer par categorie") {
            setFormData({
                ...formData,
                productCategoryID: value,
                categoryName: ''
              })
          }
          setdataSearch({
            ...dataSearch,
            [e.target.name]:e.target.value}
             )
          console.log(formData.productCategoryID,':',formData.categoryName) 
        }; 
    // Build option etat product 
      const FilterByCategorie = (
        <div className="select" style={{width:"100%"}}>
            <select id="slct" name="categoryName" value={formData.productCategoryID} onChange={e => Onsele(e)}>
                {categorys.map(cat=> <option value={cat._id} id={cat.categoryName}>{cat.categoryName}</option>)}
            </select>
        </div>
      ) 
          const FilterByEtat = (
            <div className="select" style={{width:"100%"}}>
                <select name="searchEtat" value={searchEtat} onChange={(e)=> onSearch(e)}>
                    <option value=''>Filtrer par etat</option>
                    <option>En vente</option>
                    <option>En stock</option>
                </select>
           </div>
          ) 
          const FilterByProduct = (
            <div className="select" style={{width:"100%"}}>
                <select >
                    <option value=''>Filtrer par etat de stock</option>
                    <option>Imprimantes 3D</option>
                    <option>Imprimantes Coleur</option>
                </select>
           </div>
          ) 

          // tbody our table product 

              // Search Into Table Filter
    let Prods=[];
   
    if (products === null || loading) {
      console.log("Spinner")
    }else{
      Prods = products.filter(
    (ProdF) => {
      const query = searchEtat.toLowerCase();
      const query1 = formData.categoryName.toLowerCase();
      const query2 = searchNameIDProduct.toLowerCase();
      const query3 = searchNameIDProduct.toLowerCase();
     return ProdF.categoryName.toLowerCase().indexOf(query1)>=0 
        &&  ProdF.etat.toLowerCase().indexOf(query)>=0 
        &&  ProdF.productName.toLowerCase().indexOf(query2)>=0
        &&  ProdF._id.toLowerCase().indexOf(query3)>=0
    }
      );
    }
          const Tbody = (
            <tbody>
                {Prods.map(prod=> (
                    <tr key={prod._id}> 
                       <td>{prod.productName}</td>
                       <td>{prod.priceB}</td>
                       <td>{prod.priceS}</td>
                       <td>{prod.quantity}</td>
                       <td>{prod.etat}</td>
                       <td>{prod.categoryName}</td>
                       <td style={{
                               display: "flex", 
                               justifyContent: "space-evenly"
                       }}>     
                           <Link style={{ 
                               border: "none",
                               color: "#28a745",
                               background: "transparent",
                               fontWeight:700,
                               cursor: "pointer",
                               textDecoration: "none"
                               }} to="/administration/updateProduct" onClick={e=> getId(prod)}>
                                   <Edit width="20px" height="20px" fill="gray"/>
                               </Link>

                        
                           <button type="submit" style={{ 
                               border: "none",
                               color: "#dc3545",
                               background: "transparent",
                               fontWeight:700,
                               cursor: "pointer"
                           }} onClick={()=> removeProductStock(prod._id)}>
                               <Delete width="20px" height="20px" fill="red"/>
                           </button>
                       </td>  
                    </tr>  
                ))} 
            </tbody>
          )

    return (
        <Container> 
            <HeaderNewProduct position="initial">
                Liste des produits 
                <ContainerSearch>
                    <SearchIconDiv>
                    <Search height="20" width="20" fill="#928f8f"/>
                    </SearchIconDiv>
                    <InputSearchDiv>
                    <InputSearch placeholder="Cherchez sur 3DSTORE.." name="searchNameIDProduct" value={searchNameIDProduct} onChange={(e)=> onSearch(e)}/>
                    </InputSearchDiv>
                    <InputClearDiv>
                    <ButtonCancel  >
                        {/* {show && <Cancel height="12" width="12" fill="#928f8f"/>} */}
                    </ButtonCancel>
                    <ButtonSearchMobile>
                        <Right height="12" width="12" fill="#928f8f"/>
                    </ButtonSearchMobile>
                    </InputClearDiv>
           </ContainerSearch> 
            </HeaderNewProduct>
            <FormNewProduct>
            <ContainerFiltre>
                <InputsSearch bblr="10px" btlr="10px">
                   {FilterByCategorie}
                </InputsSearch>
                <InputsSearch>
                   {FilterByEtat}
                </InputsSearch>
                <InputsSearch bbrr="10px" btrr="10px">
                   {FilterByProduct}
                </InputsSearch>
            </ContainerFiltre>
    <div class="table-wrapper">
        <table className="fl-table">
            <thead>
            <tr>
                <th>LEBELE</th>
                <th>PRIX ACHAT</th>
                <th>PRIX VENTE</th>
                <th>QUANTITE</th>
                <th>ETAT</th>
                <th>CATEGORIE</th>
                <th>Operations</th>
            </tr>
            </thead>
            {Tbody}
        </table>
    </div>
            </FormNewProduct>
        </Container>
    )
}

Products.propTypes = {
    getAllProduct: PropTypes.func.isRequired,
    getCategorys: PropTypes.func.isRequired,
    getProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    getId: PropTypes.func.isRequired,
    removeProductStock: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    product: state.product,
    category: state.category
}) 

export default  connect(mapStateToProps, {getProduct, getAllProduct, getCategorys, getId, removeProductStock}) (Products)
