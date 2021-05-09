import React from 'react';
import fetchWrapper from '../../utils/fetchWrapper';

const RequestButton = ({label, url, init, handleResponse}) => {

  const handleClick = () => {
    fetchWrapper(url, init).then(handleResponse)
  }

  return (
    <button
      className="btn btn-primary"
      onClick={handleClick}
    >{label}</button>
  )
}

RequestButton.defaultProps = {
  label: 'Request'
}

export default RequestButton;