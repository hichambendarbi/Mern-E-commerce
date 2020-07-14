import React from 'react'
import {TitleProductPageRoute, ContainerDisplay, ContainerProDisp, ProDispLivr,ContProdInf, Itm, Itms,
     Main, ContainerImgInf, ContProductImgs, ConImg1, ConImg2, ZoomImg, ImgP, ConImg3, ConImg4, ConImg5,
     LabelImg, ImgList, TitleWish, TitPw, TitH, Fav,  ExportPr, MarquPos, Mark, ContMarFeed, DivFeedback, DivStars,
     PriceAndDis, PriceDis, DiscoDis, SpanDisc, PourDisp, OptionsDetails, ContOptions, SpanOption, LinkDetails, 
     GroupOptions, InputOpt, ContAch, ButtonAch, Share, HShare,SocialShare, Socialbtn, ConstPromo, TitleProm,
     DivProms, LinkPro, TitleRetoureLiv, SectionRetLi, DivRetLiv, ConstRet1, SvgIc, DivTils, Htit, Ptit} from '../Assets'

import { ReactComponent as Facebook} from '../../img/icons/facebook-app-symbol.svg'
import { ReactComponent as Twitter} from '../../img/icons/big-twitter-logo.svg'
import { ReactComponent as Favorite} from '../../img/icons/favori.svg'
import { ReactComponent as UnFavorite} from '../../img/icons/unfavorite.svg'
import { ReactComponent as Paper} from '../../img/icons/paper-plane.svg'
import { ReactComponent as Delivery} from '../../img/icons/delivery.svg'
import { ReactComponent as Returnbox} from '../../img/icons/return.svg'
import { ReactComponent as Shieldstar} from '../../img/icons/shield-with-a-star.svg'
import { ReactComponent as Stars } from "../../img/icons/star.svg"
import { ReactComponent as Starcirl} from '../../img/icons/starcircle.svg'

const DisplayProduct = ({addTocartLocal}) => {
    const ProductFromStorage = JSON.parse(localStorage.getItem('Product'))
        var imgInit = ''
        for(var i=0; i<ProductFromStorage.image.length; i++) 
        {
            imgInit = ProductFromStorage.image[0].productImg        
        }
 

    return (
       
       <Main>
        <ContainerDisplay>
            <TitleProductPageRoute>
                {ProductFromStorage.productName}
            </TitleProductPageRoute>
            <ContainerImgInf> 
                <ContainerProDisp> 
                <ContProductImgs>
                    <ConImg1>
                        <ConImg2><ZoomImg>
                         <ImgP src={imgInit} alt="test"/>
                        </ZoomImg></ConImg2>
                         <ConImg3>
                             <ConImg4>
                                 {ProductFromStorage.image.map(mp=> (
                                 <ConImg5>
                                    <LabelImg>
                                        <ImgList src={mp.productImg} alt="test"/>
                                    </LabelImg>
                                 </ConImg5>
                                 ))}
                             </ConImg4>
                         </ConImg3>
                    </ConImg1>
                    {/* SHARE PRODUCT ON SOCIAL MEDIA */}
                    <Share>
                        <HShare>PARTAGEZ CE PRODUIT</HShare>
                        <SocialShare>
                            <Socialbtn>
                                <Facebook width="15" height="15" fill="#282828"/>
                            </Socialbtn>
                            <Socialbtn>
                                <Twitter width="15" height="15" fill="#282828"/>
                            </Socialbtn>
                        </SocialShare>
                    </Share>
                </ContProductImgs>
                {/* INFO RODUCT */}
                    <ContProdInf>
                        <TitleWish>
                                <TitPw>
                                 <ExportPr>
                                     Expédié depuis l'étranger
                                  </ExportPr>
                                     <TitH>{ProductFromStorage.productName}</TitH>
                                </TitPw>
                                 <Fav>
                                   <UnFavorite height="24" width="24" fill='#f68b1e'/>
                                 </Fav>
                        </TitleWish>
                        {/* Mark Et produits similaires */}
                        <ContMarFeed>
                                 <MarquPos>Marque: <Mark>{ProductFromStorage.brand}</Mark> | <Mark>Produits similaires par Blackview</Mark></MarquPos>
                                 <DivFeedback>
                                      <DivStars>
                                          <Stars height="12" width="12" fill='#f68b1e'/>
                                          <Stars height="12" width="12" fill='#f68b1e'/>
                                          <Stars height="12" width="12" fill='#f68b1e'/>
                                          <Stars height="12" width="12" fill='#f68b1e'/>
                                          <Stars height="12" width="12" fill='#f68b1e'/>
                                 </DivStars> <Mark>{`(0 avis)`}</Mark>
                                  </DivFeedback>
                        </ContMarFeed>
                        {/* Price and discount */}
                        <PriceAndDis>
                                 <PriceDis>{ProductFromStorage.priceS} {` Dhs`}</PriceDis>
                                 <DiscoDis> 
                                     <SpanDisc>{ProductFromStorage.old}{` Dhs`}</SpanDisc>
                                     <PourDisp>{parseInt(ProductFromStorage.discount)}%</PourDisp>
                                 </DiscoDis>

                        </PriceAndDis>
                        {/* Details sise and colors */}
                        <OptionsDetails>
                          <ContOptions>
                              <SpanOption>SÉLECTIONNEZ UNE OPTION</SpanOption>
                              <LinkDetails>Guide des tailles</LinkDetails>
                          </ContOptions>
                          <GroupOptions>
                             {ProductFromStorage.size.map(test=> (
                                  <InputOpt>{test.sizename}</InputOpt>
                             ))}
                          </GroupOptions>
                          <ContAch>
                            <ButtonAch>J'achète</ButtonAch>
                          </ContAch>
                        </OptionsDetails>
                        {/* Start Promotions options */}
                        <ConstPromo>
                            <TitleProm>PROMOTIONS</TitleProm>
                            <DivProms>
                                <LinkPro>
                                <Starcirl width="24" height="24" fill="black"  style={{marginRight:"6px", flexShrink: "0"}}/>
                                Recommandation sanitaire: Favorisez le paiement par carte bancaire pour éviter tout contact avec de la monnaie ou des billets
                                </LinkPro>
                                <LinkPro>
                                <Starcirl width="24" height="24" fill="black" style={{marginRight:"6px", flexShrink: "0"}}/>
                                Livraison gratuite sur Casablanca, Rabat, Fes, Abonnez-vous
                                </LinkPro>
                            </DivProms>
                        </ConstPromo>
                         {/* End Promotions options */}
                    </ContProdInf>
                </ContainerProDisp>
                {/* Start Livraison & Retour */}
                <ProDispLivr>
                    <SectionRetLi>
                    <TitleRetoureLiv>
                       Livraison & Retours
                    </TitleRetoureLiv>
                    <DivRetLiv>
                        {/* ---------------------- */}
                        <ConstRet1>
                            <SvgIc>
                            <Paper width="30" height="30" fill="#282828"/>
                            </SvgIc>
                            <DivTils>
                                <Htit>
                                 Livraison Express
                                </Htit>
                                <Ptit>
                                Livraison rapide à Casablanca.{' '}
                                 <Mark>Détails</Mark>
                                </Ptit>
                            </DivTils>
                        </ConstRet1>
                        {/* ---------------------- */}
                        <ConstRet1>
                            <SvgIc>
                            <Delivery width="30" height="30" fill="#282828"/>
                            </SvgIc>
                            <DivTils>
                                <Htit>
                                 Livraison
                                </Htit>
                                <Ptit>
                                Normalement livré entre le mardi 23 jui.
                                et le mercredi 24 jui. Veuillez vérifier les dates exactes sur la page de paiement.{' '}
                                <Mark>En savoir plus</Mark>
                                </Ptit>
                            </DivTils>
                        </ConstRet1>
                        {/* ---------------------- */}
                        <ConstRet1>
                            <SvgIc>
                            <Returnbox width="30" height="30" fill="#282828"/>
                            </SvgIc>
                            <DivTils>
                                <Htit>
                                 Politique de retour
                                </Htit>
                                <Ptit>
                                Retour gratuit dans les 15 jours pour les articles
                                Jumia Mall et dans les 7 jours pour les autres, sous conditions.{' '}
                                <Mark>En savoir plus</Mark>
                                </Ptit>
                            </DivTils>
                        </ConstRet1>
                        {/* ---------------------- */}
                        <ConstRet1>
                            <SvgIc>
                            <Shieldstar width="30" height="30" fill="#282828"/>
                            </SvgIc>
                            <DivTils>
                                <Htit>
                                 Garantie
                                </Htit>
                                <Ptit>
                                 N/A
                                </Ptit>
                            </DivTils>
                        </ConstRet1>
                    </DivRetLiv>
                    </SectionRetLi>
                </ProDispLivr>
                {/* End Livraison & Retour */}
            </ContainerImgInf>
        </ContainerDisplay>
       </Main> 
  
    )
}

  
export default DisplayProduct
