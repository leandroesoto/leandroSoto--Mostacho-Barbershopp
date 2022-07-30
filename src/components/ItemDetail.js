import React from 'react'


const ItemDetail = ({item}) => {
  return (
    <>
    <div className='row'>
        <div className="card card-solid ">
            <div className="card-body">
                <div className="row">
                    <div className="col-12 col-sm-5">
                        <h3 className="d-inline-block d-sm-none">{item.title}</h3>
                        <div className="col-12">
                            <img src={item.pictureURL} className="product-image" alt="Product Image0"/>
                        </div>
                        <div className="col-12 product-image-thumbs">
                            <div className="product-image-thumb active"><img src={item.pictureURL} alt="Product Image1"/></div>
                            <div className="product-image-thumb"><img src={item.pictureURL} alt="Product Image2"/></div>
                            <div className="product-image-thumb"><img src={item.pictureURL} alt="Product Image3"/></div>
                            <div className="product-image-thumb"><img src={item.pictureURL} alt="Product Image4"/></div>
                            <div className="product-image-thumb"><img src={item.pictureURL} alt="Product Image5"/></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-7">
                        <h3 className="my-3">{item.title}</h3>
                        <p>{item.description}</p>
                        <hr/>
                        <div className='row'>
                            <div className='col-12 col-sm-6'>
                                <h3 className="mt-4 text-center">
                                    <div className="Text-info">
                                        {item.price}
                                    </div>
                                </h3>
                                <h5 className="mt-4 text-center">
                                    <div className="Text-info">
                                        Disponibles: {item.stock}
                                    </div>
                                </h5>
                                <div className="mt-4 text-center">
                                    <div className="btn btn-primary">
                                        <i className="fas fa-cart-plus fa-lg mr-2"></i>
                                        Agregar al carrito
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <p className="tex-muted text-center">Contactanos</p>
                                        <div className="mt-4 product-share text-center">
                                            <a href="/#" className="text-gray">
                                            <i className="fab fa-facebook-square fa-2x"></i>
                                            </a>
                                            <a href="/#" className="text-gray">
                                            <i className="fab fa-twitter-square fa-2x"></i>
                                            </a>
                                            <a href="/#" className="text-gray">
                                            <i className="fas fa-envelope-square fa-2x"></i>
                                            </a>
                                            <a href="/#" className="text-gray">
                                            <i className="fas fa-rss-square fa-2x"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail