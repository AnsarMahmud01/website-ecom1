import React from 'react'
import './Info.css'
import { BsFillPatchCheckFill, BsFillEmojiSmileFill } from 'react-icons/bs'
import { GiPresent } from 'react-icons/gi'
import { BiTask } from 'react-icons/bi'
const Info = () => {
    return (
        <>
            <section className='warranties-container'>
                <div className='container'>
                    <div className="row-2">
                        <div className="col-md-12">
                            <div className="col-md-12">
                                <h2 className='product-head'>Сіз бізден не ала аласыз?</h2>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="benefit_icon warranty">
                                    {/* <img src={BsFillPatchCheckFill} alt="lol" /> */}
                                    <BsFillPatchCheckFill className='icon' />
                                </div>
                                <div className="benefit_info warranty">
                                    <div className="benefit_title warranty"> Кепілдікпен сапа </div>
                                    <div className="benefit_description warranty"> Біздің өнімдеріміздің жоғары сапасына өзіңізді сендіріңіз! Біз оған сенімдіміз, сондықтан біз барлық өнімдерге 6 айдан 2 жылға дейін кепілдік береміз (өнімге байланысты). Сатып алуды тиімді шарттармен жасаңыз!</div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="benefit_icon warranty">
                                    {/* <img src={BsFillPatchCheckFill} alt="lol" /> */}
                                    <GiPresent className='icon' />
                                </div>
                                <div className="benefit_info warranty">
                                    <div className="benefit_title warranty"> Сатып алу арқылы сыйлықтар </div>
                                    <div className="benefit_description warranty"> Спидометрлер, шамдар, қалқандар, сорғылар - бұл велосипед сатып алуға арналған стильді және функционалды сыйлықтардың толық тізімі емес! *Науқан модельдердің шектеулі саны үшін жарамды. </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="benefit_icon warranty">
                                    {/* <img src={BsFillPatchCheckFill} alt="lol" /> */}
                                    <BiTask className='icon' />
                                </div>
                                <div className="benefit_info warranty">
                                    <div className="benefit_title warranty">Кәсіби кеңес</div>
                                    <div className="benefit_description warranty">Кеңесшілер сізге ұнайтын модель туралы егжей-тегжейлі айтып береді және сізге ең жақсысын таңдауға көмектеседі, әрбір клиентке жеке көзқарас пен кәсіби құзыреттіліктің жоғары деңгейіне кепілдік береді.</div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="benefit_icon warranty">
                                    {/* <img src={BsFillPatchCheckFill} alt="lol" /> */}
                                    <BsFillEmojiSmileFill className='icon' />
                                </div>
                                <div className="benefit_info warranty">
                                    <div className="benefit_title warranty"> Велосипедтерге қызмет көрсету</div>
                                    <div className="benefit_description warranty"> Мамандары компоненттер мен керек-жарақтарды таңдауды, орнатуды және ауыстыруды жүзеге асырады. Қажет болса, біз сізге сатып алынған велосипедті құрастырылған және конфигурацияланған түрде жеткіземіз. (Алматы және Астана үшін)</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center margin-top">
                            <a href="" className='btn-main'>Каталогты қарау</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Info