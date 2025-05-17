import React from "react";
import AppImages from "../Assets";

const SimpleLazy = () => {
    return (
        <div id='simple-lazy-loading'>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="img-thumbnail p-3">
                        <h6>Meenakshi Amman Temple</h6>
                        <p>
                            <img src={AppImages.MeenakshiTemple} alt="MeenakshiTemple" className="img-fluid" />
                        </p>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <h6>Full Description:</h6>
                    <p>
                        The Meenakshi Temple in Madurai, Tamil Nadu, is a large and historically significant Hindu temple dedicated to Goddess Meenakshi (a form of Parvati) and her consort Sundareswar (a form of Shiva). It is a renowned architectural marvel and a major pilgrimage site, attracting millions of visitors annually. 
                    </p>

                    <p>
                        The Meenakshi Temple in Madurai, Tamil Nadu, is renowned for its magnificent Dravidian architecture, including towering gopurams, intricate carvings, and the Hall of Thousand Pillars. It's a spiritual hub dedicated to Goddess Meenakshi and Lord Sundareswarar, with the temple complex spanning 14 acres and housing numerous shrines and halls. 
                    </p>

                    <p>
                        Arulmigu Meenakshi Sundareshwarar Temple is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India. It is dedicated to the goddess Meenakshi, a form of Parvati, and her consort, Sundareshwar, a form of Shiva.
                    </p>
                </div>
            </div>

            <hr className="bg-danger"/>

            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="img-thumbnail p-3">
                        <h6>Dona Paula Goa</h6>
                        <p>
                            <img src={AppImages.DonaPaulaBeach} alt="Dona Paula Beach" className="img-fluid" />
                        </p>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <h6>Full Description:</h6>
                    <p>
                        The legend of Dona Paula revolves around a woman, Dona Paula de Menezes, who supposedly fell in love with a local fisherman and met an untimely end after her father, the Viceroy, forbade their union. The site is now known as "Lover's Paradise" and is a popular tourist destination. 
                    </p>

                    <p>
                        Dona Paula was a very kind woman and she fell in love with a local fisherman of Goa and decided to marry him but her relationship was denied by her father and she fell off the cliff as a result. Today, locals share some haunted stories about Dona Paula and refer to this area as `lovers” paradise” of Goa.
                    </p>

                    <p>
                        Dona Paula Beach in Goa is a picturesque destination known for its scenic beauty and vibrant atmosphere. The beach offers soft sands and clear waters, making it perfect for sunbathing and swimming. Water sports are popular here, including jet skiing and parasailing, which add an adventurous touch.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SimpleLazy;