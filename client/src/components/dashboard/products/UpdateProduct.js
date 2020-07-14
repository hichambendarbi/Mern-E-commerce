import React, {Fragment ,useState, useEffect} from 'react'
import { Container,
         HeaderNewProduct,
         FormNewProduct,
         ContainerInputs,
         DivInput,
         Input, 
         Label, 
         Button, 
         Btn,
         DescriptionProduct
        } from '../Assets'
import NewCategory from '../categorys/NewCategory'
import { connect } from 'react-redux'
import { updateProduct,getProduct } from '../../../actions/product' 
import { getCategorys } from '../../../actions/category' 
import PropTypes from 'prop-types'
import { setAlert } from '../../../actions/alert'
import './style.css'
const UpdateProduct = ({ updateProduct, getCategorys, getProduct, product:{product, Product ,loading}, category:{categorys}, setAlert }) => {

    const [isOpen, openCloseModal] = useState(false) 
    const ProductFromStorage = JSON.parse(localStorage.getItem('Product'))
    const [formData, setFormData] = useState({
        id: Product._id || ProductFromStorage._id,
        reference: Product.reference || ProductFromStorage.reference,
        productName: Product.productName || ProductFromStorage.productName,
        priceB: Product.priceB || ProductFromStorage.priceB,
        priceS: Product.priceS || ProductFromStorage.priceS,
        quantity: Product.quantity || ProductFromStorage.quantity,
        productCategoryID: Product.productCategoryID || ProductFromStorage.productCategoryID,
        categoryName: Product.categoryName || ProductFromStorage.categoryName,
        etat: Product.etat || ProductFromStorage.etat,
        brand: Product.brand || ProductFromStorage.brand,
        old: Product.old || ProductFromStorage.old,
        discount: Product.discount || ProductFromStorage.discount
    })
    const {
        id,
        reference,
        productName, 
        priceB,
        priceS,
        quantity,
        productCategoryID,
        categoryName,
        etat,
        brand,
        old,
        discount
    } = formData
    
 
    useEffect(() => {
            getCategorys();
    },[getCategorys])



    const openClose = e => {
        e.preventDefault()
        openCloseModal(!isOpen)
    }

        //Build option category 
        var ok = 0;
        categorys.map(te=> {
        if(te._id!=="testID" && ok===0)
        categorys.unshift({_id:"testID", categoryName :"Chosir un categorie"})
        ok=1
        })

    const CategoryOptions = (
        <div className="select">
            <select id="slct" name="categoryName" value={productCategoryID} onChange={e => Onsele(e)}>
                {categorys.map(cat=> <option value={cat._id} id={cat.categoryName}>{cat.categoryName}</option>)}
            </select>
       </div>
      ) 
 
      // Build option etat product 
      const StatutProduct = (
        <div className="select">
            <select name="etat" value={etat} onChange={e => onChange(e)}>
                <option value="En stock">En stock</option>
                <option value="En vente">En vente</option>
            </select>
       </div>
      ) 
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
        console.log(productCategoryID,':',categoryName) 
      }; 

    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    // function Add new product 
    const onSubmit = async (e) => {
          e.preventDefault()
          if(categoryName!=="" && categoryName!=="Chosir un categorie")
          {
           await updateProduct(formData,productCategoryID,id)
              
          } else {
            setAlert('Le choix du categorie est obligatoire', 'danger') 
          } 
    } 
    return ( 
        <Fragment>
            {isOpen && <NewCategory close={e => openClose(e)}/>}
     <Container> 
            <HeaderNewProduct> 
               Ajout de nouveu produit
            </HeaderNewProduct> 
           
            <FormNewProduct>
               
                <form style={{width:"100%"}}>
                <ContainerInputs marginBottom="30px">
                    <DivInput>
                        <Label>Reference:</Label>
                        <Input placeholder="Reference.." name="reference" value={reference} onChange={e=> onChange(e) }/>
                    </DivInput>
                    <DivInput>
                        <Label>La marque:</Label>
                        <Input placeholder="La marque.." name="brand" value={brand} onChange={e=> onChange(e) }/>
                    </DivInput>
                    <DivInput>
                        <Label>Categogie: <Btn onClick={e=> openClose(e)}>+</Btn></Label>
                        {CategoryOptions}
                    </DivInput> 
                </ContainerInputs>

                <ContainerInputs marginBottom="50px">
                    <DivInput>
                        <Label>Quantite:</Label>
                        <Input placeholder="Reference.." name="quantity" value={quantity} onChange={e=> onChange(e) }/>
                    </DivInput>
                    <DivInput>
                        <Label>Prix d'achat:</Label>
                        <Input placeholder="Reference.." name="priceB" value={priceB} onChange={e=> onChange(e) }/>
                    </DivInput>
                    <DivInput>
                        <Label>Prix de vente:</Label>
                        <Input placeholder="Reference.." name="priceS" value={priceS} onChange={e=> onChange(e) }/>
                    </DivInput>
                </ContainerInputs>

                <ContainerInputs marginBottom="50px">
                    <DivInput>
                        <Label>Description:</Label>
                        <Input placeholder="Description.." name="productName" value={productName} onChange={e=> onChange(e) }/>
                    </DivInput>
                    <DivInput>
                        <Label>Encien prix:</Label>
                        <Input placeholder="Encien prix.." name="old" value={old} onChange={e=> onChange(e) }/>
                    </DivInput>
                    <DivInput>
                        <Label>Reduction:</Label>
                        <Input placeholder="Reduction.." name="discount" value={discount} onChange={e=> onChange(e) }/>
                    </DivInput>
                </ContainerInputs>

                {/* <ContainerInputs >
                   <DescriptionProduct placeholder="Description produit.." name="productName" value={productName} onChange={e=> onChange(e) }/>
                </ContainerInputs> */}
                   
                <ContainerInputs marginTop="90px">
                    <DivInput>
                        <Label>Etat (en stock, en vente)</Label>
                        {StatutProduct}
                    </DivInput>
                    <DivInput>
                        <Button background="#343a40">Annuler</Button>
                    </DivInput>
                    <DivInput>
                        <Button background="#F68B1E" onClick={e=> onSubmit(e)}>Ajouter</Button>
                    </DivInput>
                </ContainerInputs>
                </form>
            </FormNewProduct>
        </Container>
    </Fragment>
    )
}

UpdateProduct.propTypes  = {
    updateProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    getCategorys: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    getProduct: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    product : state.product,
    category: state.category
})

export default connect(mapStateToProps, {updateProduct,getCategorys, setAlert, getProduct}) (UpdateProduct)
