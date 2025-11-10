import React ,{useState} from 'react'
import './ProductInformation.css'


const ProductInformation = () => {
    const data = [
        {
          material: 'OTC022401',
          description:
            'Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle',
          packaging: '1 BT',
        },
        {
          material: 'OTC022401',
          description:
            'Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle',
          packaging: '144/CS',
        },
        {
          material: 'OTC022401',
          description:
            'Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle',
          packaging: '1 EA',
        },
      ];
    
      return (
        <div className="table-container">
          <table className="product-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Description</th>
                <th>Packaging</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.material}</td>
                  <td>{item.description}</td>
                  <td>{item.packaging}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );




  
};



export default ProductInformation