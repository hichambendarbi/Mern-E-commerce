import React, {Fragment ,useState, useEffect} from 'react'
import { Container,
         HeaderNewProduct,
         FormNewProduct,
         ContainerInputs,
         DivInput,
         Input, 
         Label, 
         Button, 
         Btn
        } from '../Assets'
import NewCategory from '../categorys/NewCategory'
import { connect } from 'react-redux'
import { newProduct, getId } from '../../../actions/product' 
import { getCategorys } from '../../../actions/category' 
import PropTypes from 'prop-types'
import { setAlert } from '../../../actions/alert'
import './style.css'
const NewProduct = ({ newProduct, getCategorys,product:{product},getId, category:{categorys}, setAlert }) => {
    const [isOpen, openCloseModal] = useState(false)
    const [formData, setFormData] = useState({
        reference: '', 
        productName: '', 
        priceB: '',
        priceS: '',
        quantity: '',
        productCategoryID: '',
        categoryName: '',
        etat: '',
        brand: '', 
        discount: 0,
        old: 0
    })

    const openClose = e => {
        e.preventDefault()
        openCloseModal(!isOpen)
    }

    //Display all category state
    useEffect(()=> {
        getCategorys()
    },[getCategorys])  
        
  
        //Build option category 
        var ok = 0;
        categorys.map(te=> {
        if(te._id!=="testID" && ok===0) 
        categorys.unshift({_id:"testID", categoryName :"Chosir un categorie"})
        ok=1
        })
    const CategoryOptions = (
        <div className="select">
            <select id="slct" name="categoryName" value={formData.productCategoryID} onChange={e => Onsele(e)}>
                {categorys.map(cat=> <option value={cat._id} id={cat.categoryName}>{cat.categoryName}</option>)}
            </select>
       </div>
      ) 
 
      // Build option etat product 
      const StatutProduct = (
        <div className="select">
            <select name="etat" value={formData.etat} onChange={e => onChange(e)}>
                <option>En vente ou En Stock</option>
                <option>En vente</option>
                <option>En stock</option>
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
        console.log(formData.productCategoryID,':',formData.categoryName) 
      }; 

const onChange = e => {setFormData({ ...formData, [e.target.name]: e.target.value })}
var o = 0;
var p = 0;


const test = (e) => {
    e.preventDefault()
    o=formData.old
    p=formData.priceS
    console.log(o) 
    console.log(p)
    if(o==0 || o=='' || o===null || o===undefined || p=='' || p==0 || p===null || p===undefined ){
        setFormData({
            discount: "Verifier les prix",
            old: formData.old,
            priceS: formData.priceS,
            reference: formData.reference, 
            productName: formData.productName, 
            priceB: formData.priceB,
            quantity: formData.quantity,
            productCategoryID: formData.productCategoryID,
            categoryName: formData.categoryName,
            etat: formData.etat,
            brand: formData.brand
          })  
    } else
    setFormData({
      discount: ((o - p) * (100/o)),
      old: formData.old,
      priceS: formData.priceS,
      reference: formData.reference, 
      productName: formData.productName, 
      priceB: formData.priceB,
      quantity: formData.quantity,
      productCategoryID: formData.productCategoryID,
      categoryName: formData.categoryName,
      etat: formData.etat,
      brand: formData.brand
    })
} 
 
    // function Add new product  
    const onSubmit = async (e) => { 
          e.preventDefault()
          
          if(formData.categoryName!=="" && formData.categoryName!=="Chosir un categorie" && formData.discount!=="Verifier les prix")
          {
           await newProduct(formData,formData.productCategoryID)
          } else {
            setAlert('Verifier le categorie et le prix encien', 'danger') 
          } 
    } 
    return ( 
        <Fragment>
            {isOpen && <NewCategory close={e => openClose(e)}/>}
        <Container>
            <HeaderNewProduct> 
               Ajout de nouveau produit
            </HeaderNewProduct> 
            <FormNewProduct>
               
                <form style={{width:"100%"}}>
                <ContainerInputs marginBottom="30px">
                    <DivInput>
                        <Label>Reference:</Label>
                        <Input placeholder="Reference.." name="reference" value={formData.reference} onChange={e=> onChange(e) }/>
                    </DivInput>
                    <DivInput>
                        <Label>La marque:</Label>
                        <Input placeholder="La marque.." name="brand" value={formData.brand} onChange={e=> onChange(e) }/>
                    </DivInput>
                    <DivInput>
                        <Label>Categogie: <Btn onClick={e=> openClose(e)}>+</Btn></Label>
                        {CategoryOptions}
                    </DivInput>  
                </ContainerInputs>

                <ContainerInputs marginBottom="50px">
                    <DivInput>
                        <Label>Quantite:</Label>
                        <Input placeholder="Reference.." name="quantity" value={formData.quantity} onChange={e=> onChange(e) }/>
                    </DivInput>
                    <DivInput>
                        <Label>Prix d'achat:</Label>
                        <Input placeholder="Reference.." name="priceB" value={formData.priceB} onChange={e=> onChange(e) } />
                    </DivInput>
                    <DivInput>
                        <Label>Prix de vente:</Label>
                        <Input placeholder="Reference.." name="priceS" value={formData.priceS} onChange={e=> onChange(e) } />
                    </DivInput>
                </ContainerInputs>

                <ContainerInputs marginBottom="50px">
                    <DivInput>
                        <Label>Description:</Label>
                        <Input placeholder="Description.." name="productName" value={formData.productName} onChange={e=> onChange(e) } />
                    </DivInput>
                    <DivInput>
                        <Label>Encien prix:</Label>
                        <Input placeholder="Encien prix.." name="old" value={formData.old} onKeyUp={e=> test(e)}  onChange={e=> onChange(e) } />
                    </DivInput>
                    <DivInput>
                        <Label>Reduction:</Label>
                        <Input placeholder="Reduction.." name="discount" value={formData.discount} onChange={e=> onChange(e) }/>
                    </DivInput>
                </ContainerInputs>
 
                <ContainerInputs marginTop="90px">
                    <DivInput>
                        <Label>Etat (en stock, en vente)</Label>
                        {StatutProduct}
                    </DivInput>
                    <DivInput>
                        <Button background="#343a40" >Ajouter plus de details</Button>
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

NewProduct.propTypes  = {
    newProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    getCategorys: PropTypes.func.isRequired,
    getId: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    product : state.product,
    category: state.category
})

export default connect(mapStateToProps, {newProduct,getCategorys,getId, setAlert}) (NewProduct)
