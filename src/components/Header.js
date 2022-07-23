import React from 'react'

const Header = ({titulo}) => {
  return (
    <div className="content-header">
    <div className="container">
        <div className="row mb-2">
            <div className="col-sm-6">
              <h5>{titulo}</h5>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header