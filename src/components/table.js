
import React from 'react'
import JsonData from './data.json'
import './home.css';
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
                
				<tr>
					<td>{info.productId}</td>
					<td>{info.batchId}</td>
					<td>{info.distillerName}</td>
                    <td>{info.bottlingTime}</td>
				</tr>
			)
		}
	)

	return(
		<div className='box'>
            <h1 style={{marginLeft:"50px", fontSize:"35px", fontFamily: "Times New Roman",marginTop:"20px",color:"orange"}}>Product Informations</h1>
			<table class="table table-striped">
				<thead>
					<tr>
                    <th>productId</th>
					<th>batchId</th>
					<th>distillerName</th>
					<th>bottlingTime</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
