import React from 'react';

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className='container mt-5'>
      <div className='row'>

        <div className='col-6 p-5 mt-5'>
          <h4>{productName}</h4>

          <p style={{ width: "60%" ,lineHeight:"2" }}>
            {productDescription}
          </p>

          <div>
            <a
              href={learnMore}
              style={{
                
                textDecoration: "none"
              }}
            >
              Learn More →
            </a>
          </div>
        </div>

        <div className='col-6'>
          <img src={imageURL} />
        </div>

      </div>
    </div>
  );
}

export default RightSection;