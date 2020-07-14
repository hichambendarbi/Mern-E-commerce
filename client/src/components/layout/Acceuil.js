import React from 'react'
import {
    ContainerAcceuil,
    MenuAcceuil,
    CarouselAcceuil,
    OptionAcceuil,
    UlCategorie,
    LiCategorie, 
    LinkCategorie,
    Livraison,
    Covid,
    ImageCovid,
    UlLiv,
    LiLiv,
    Alivraison,
    Contn,
    SousSlid,
    ContentS,
    DivIc,
    PlusDemand,
    ContPlusDemn,
    HeaderPDemand,
    Contai1,
    Card,
    ImgDM,
    SpanDM,
    PriceDM,
    ContPiscine,
    VoirPlus,
    Ads,
    Ads1,
    Ads2
} from './Assets'
// import {Shipping, Store, Discount, Offer,
//          Informat, TeleTab, Fashionmode, Motoauto,
//          Gaming, SportL, TvElectronique, BbPer, Homeoffice
//        } from "../img";

import { ReactComponent as Store } from "../img/icons/store.svg";
import { ReactComponent as Discount } from "../img/icons/discount.svg";  
import { ReactComponent as Shipping } from "../img/icons/delivery-truck.svg";  
import { ReactComponent as Offer } from "../img/icons/offer.svg"; 
import { ReactComponent as Informat } from '../img/icons/computer-screen.svg'
import { ReactComponent as Fashionmode } from '../img/icons/vest.svg'
import { ReactComponent as TeleTab } from '../img/icons/phone-and-tablet-file-transfer.svg'
import { ReactComponent as SportL } from '../img/icons/waterpolo.svg'
import { ReactComponent as Motoauto } from '../img/icons/motorbike.svg'
import { ReactComponent as Gaming } from '../img/icons/gaming.svg'
import { ReactComponent as TvElectronique } from '../img/icons/tv.svg'
import { ReactComponent as BbPer } from '../img/icons/smiling-baby.svg'
import { ReactComponent as Homeoffice} from '../img/icons/home-office.svg'
import { getAllCart, getProductCartById } from '../../actions/cart'
import Carousel  from './Carousel';

const Acceuil = ({getAllCart}) => {
            // Function search globale
    const onSearch = (prop) => {
        localStorage.setItem('category', prop);
        window.location='/searchArticle';
      }

    return (
        <Contn>
        <ContainerAcceuil>
             <MenuAcceuil>
                 <UlCategorie>
                     <LiCategorie>
                     <svg viewBox="0 0 24 24" id="cat-beauty" height="20" width="20" fill="black" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}>
                     <path d="M9.7 13.23H8V8.66h.3a.74.74 0 0 0 .7-.75.75.75 0 0 0-.75-.76H8v-.58h.3a.76.76 0 0 0 0-1.51H8v-.58h.3a.75.75 0 0 0 .7-.76.74.74 0 0 0-.72-.72H8v-.24a.76.76 0 1 0-1.51 0V3h-.3a.76.76 0 1 0 0 1.51h.3v.58h-.3a.76.76 0 0 0 0 1.52h.3v.58h-.3a.76.76 0 1 0 0 1.51h.3v4.56H4.75A.76.76 0 0 0 4 14v6.38a2 2 0 0 0 2 2h2.42a2 2 0 0 0 2-2V14a.76.76 0 0 0-.72-.77zm-.76 7.13a.52.52 0 0 1-.52.53H6a.53.53 0 0 1-.53-.53v-5.62h3.47zM19.11 8.27h-.34V5.41a.76.76 0 0 0-.77-.75h-2.73a.76.76 0 0 0-.76.75v2.86h-.34a.76.76 0 0 0-.76.75v11.34a2 2 0 0 0 2 2h2.38a2 2 0 0 0 2-2V9a.76.76 0 0 0-.68-.73zM16 6.17h1.24v2.1H16zm2.33 14.19a.52.52 0 0 1-.52.53h-2.36a.53.53 0 0 1-.53-.53V9.78h3.43z"></path></svg>
                   <LinkCategorie>Beauté & Santé</LinkCategorie></LiCategorie>

                     <LiCategorie onClick={()=> onSearch("Vêtements & Chaussures")}>
                     <Fashionmode height="20" width="20" fill="black" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/> 
                     <LinkCategorie>Vêtements & Chaussures</LinkCategorie></LiCategorie>

                     <LiCategorie>
                     <Informat height="20" width="20" fill="black" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/> <LinkCategorie>Informatique</LinkCategorie></LiCategorie>

                     <LiCategorie>
                     <TeleTab height="20" width="20" fill="black" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/> <LinkCategorie>Téléphone & Tablette</LinkCategorie></LiCategorie>

                     <LiCategorie>
                     <Motoauto height="20" width="20" fill="black" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/> <LinkCategorie>Accessoire Auto moto</LinkCategorie></LiCategorie>

                     <LiCategorie>
                         
                         <SportL height="20" width="20" fill="black" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/> <LinkCategorie>Sports & loisirs</LinkCategorie></LiCategorie>

                     <LiCategorie>
                     <Gaming height="20" width="20" fill="black" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/> <LinkCategorie>Jeux vidéos & Consoles</LinkCategorie></LiCategorie>

                     <LiCategorie>
                     <TvElectronique height="20" width="20" fill="black" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/> <LinkCategorie>TV & Électronique</LinkCategorie></LiCategorie>

                     <LiCategorie>
                     <BbPer height="20" width="20" fill="black" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/> <LinkCategorie>Bébé & Puériculture</LinkCategorie></LiCategorie>

                     <LiCategorie onClick={()=> onSearch("Maison et bureau")}>
                     <Homeoffice height="20" width="20" fill="black" style={{ 
                             marginLeft: "10px", 
                             marginRight: "10px"
                     }}/> <LinkCategorie>Maison et bureau</LinkCategorie></LiCategorie>
                 </UlCategorie>
             </MenuAcceuil>
             <CarouselAcceuil>
                 <Carousel/>
             </CarouselAcceuil>
             <OptionAcceuil> 
                 <Livraison>
                   <UlLiv> 
                      <LiLiv>
                      {/* <Shopping height="30" width="30" fill="#ff8100" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/> */}
                     <img src="https://ma.jumia.is/cms/1_2019/Week29/NewHomePage/JUMIA-USP-ICONS-POD.png" alt="pay" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/>
                      <Alivraison>Payez à la livraison</Alivraison>
                      </LiLiv>
                      <LiLiv>
                      <img src="https://ma.jumia.is/cms/1_2019/Week29/NewHomePage/JUMIA-USP-ICONS-RETURNS.png" alt="pay" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/>
                      <Alivraison>Retour facile</Alivraison>
                      </LiLiv>
                      <LiLiv>
                      <img src="https://ma.jumia.is/cms/1_2019/Week29/NewHomePage/vendre1.png" alt="pay" style={{
                             marginLeft: "10px",
                             marginRight: "10px"
                     }}/>
                      <Alivraison>Vendez sur 3DSTORE</Alivraison>
                      </LiLiv>
                   </UlLiv>
                 </Livraison>
                 <Covid>
                     <ImageCovid src='https://ma.jumia.is/cms/..//cms/1_2020/Week13/MA_W13_BF_CoronaVirusEducational.png' alt='covid'/>
                 </Covid>
             </OptionAcceuil>
        </ContainerAcceuil>

        <SousSlid>
                <ContentS><DivIc background="#AF0001"> <Offer height="25" width="25" fill="#FFF"/> </DivIc>Nos offres</ContentS>  
                <ContentS><DivIc background="#0040CE"> <Discount height="25" width="25" fill="#FFF"/></DivIc>Nos Soldes</ContentS>  
                <ContentS><DivIc background="#F68B1E"> <Shipping height="25" width="25" fill="#FFF" font-weight="700"/></DivIc> Livraison 0 DH</ContentS>  
                <ContentS><DivIc background="#FF4D18"> <Store height="25" width="25" fill="#FFF"/></DivIc>Nos Boutiques</ContentS>  
        </SousSlid>
          
        <PlusDemand>
        <HeaderPDemand>Les plus demandes</HeaderPDemand> 
                <ContPlusDemn>  
                <Contai1>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/cms/1_2020/Collections/Homepage-Images/Piscine.png" alt="TEST"/>
                                <SpanDM>Piscines & jeux</SpanDM>
                                
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/cms/1_2020/Collections/Homepage-Images/Collections-TikTok.png" alt="TEST"/>
                                <SpanDM>Tik Tok Lovers</SpanDM>
                                
                              
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/cms/1_2020/Collections/Homepage-Images/Collections-StayConnected.png" alt="TEST"/>
                                <SpanDM>Rester connecté</SpanDM>
                                
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/cms/1_2020/Collections/Homepage-Images/Animalerie.png" alt="TEST"/>
                                <SpanDM>Pet Lovers</SpanDM>
                                
                        </Card>
                </Contai1>
                <Contai1>
                       <Card>
                                <ImgDM src="https://ma.jumia.is/cms/1_2020/Collections/Homepage-Images/Collections-Gamer.jpg" alt="TEST"/>
                                <SpanDM>Coin gamers</SpanDM>
                                
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/cms/1_2020/Collections/Homepage-Images/Cheveux.png" alt="TEST"/>
                                <SpanDM>Coiffez-vous</SpanDM>
                                
                              
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/cms/1_2020/Collections/Homepage-Images/Music.png" alt="TEST"/>
                                <SpanDM>Conservatoire </SpanDM>
                                
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/cms/1_2020/Collections/Homepage-Images/Medcine-Alternative.png" alt="TEST"/>
                                <SpanDM>Médecine altern</SpanDM>
                                
                        </Card>
                </Contai1>
                </ContPlusDemn>
        </PlusDemand>
        <PlusDemand>
                <HeaderPDemand>
                   Recommandé pour vous
                </HeaderPDemand> 
        <ContPiscine>
               <Contai1>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/794633/1.jpg?0998" alt="TEST"/>
                                <SpanDM>4 en 1 Hachoir Blender Mixeur & Moulin épices - 1 2 3 Moulinette </SpanDM>
                                <PriceDM>199 Dhs</PriceDM>
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/846143/1.jpg?3324" alt="TEST"/>
                                <SpanDM>Hachoir électrique Edyson "Blue Diamond XL" 500w - 6 lames - 1.5L en verre</SpanDM>
                                <PriceDM>229 Dhs</PriceDM>
                              
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/157782/1.jpg?7402" alt="TEST"/>
                                <SpanDM>Robot Autocuiseur Edyson SmartCocotte Gold 8L</SpanDM>
                                <PriceDM>899 Dhs</PriceDM>
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/351443/1.jpg?0406" alt="TEST"/>
                                <SpanDM>Moulin COFFEE GRINDER MCG-151 Idéal pour Grains de Café, Noix, Épices, Céréales -2ans de garantie</SpanDM>
                                <PriceDM>179 Dhs</PriceDM>
                        </Card>
                </Contai1>
        </ContPiscine>
        </PlusDemand>
        <PlusDemand>
                <Ads>
                        <Ads1>
                                <ImgDM src="https://ma.jumia.is/cms/1_2020/Week23/DB/MA_W23_DB_BoueesGonflables.png" alt="test"/>
                        </Ads1>
                        <Ads2>
                                <ImgDM src="https://ma.jumia.is/cms/1_2020/Week23/DB/MA_W23_DB_ArticlesDeToilette.png" alt="test"/>
                        </Ads2>
                </Ads>
        </PlusDemand>
        <PlusDemand>
                <HeaderPDemand>
                Piscines & jeux
                <VoirPlus> Voir plus{' >'} </VoirPlus>
                </HeaderPDemand> 
        <ContPiscine>
               <Contai1>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/105882/1.jpg?3936" alt="TEST"/>
                                <SpanDM>Kemei 3 in 1 Electric Hair Clippers Multifunctional Razor Shavers Nose Hair Trimmers</SpanDM>
                                <PriceDM>115 Dhs</PriceDM>
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/849843/1.jpg?4566" alt="TEST"/>
                                <SpanDM>Bestway Piscine gonflable 4 Anneaux effet nuage - 157 x 46cm</SpanDM>
                                <PriceDM>220 Dhs</PriceDM>
                              
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/250453/1.jpg?3940" alt="TEST"/>
                                <SpanDM>Bestway Haut Qualité Matelas gonflable plage piscine Bestway Fashion lounge Dimensions: 188 x 71 cm  BESTWAY</SpanDM>
                                <PriceDM>120 Dhs</PriceDM>
                        </Card>
                        <Card>
                                <ImgDM src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/042282/1.jpg?7038" alt="TEST"/>
                                <SpanDM>Bestway Piscine gonflable d'été rectangulaire .</SpanDM>
                                <PriceDM>145 Dhs</PriceDM>
                        </Card>
                </Contai1>
        </ContPiscine>
        </PlusDemand>
        </Contn>
    )
}
export default Acceuil
