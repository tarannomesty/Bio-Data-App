function BioData(connection){
    return (
        <div className="App">
          <div className='bio-data'>
            <h4  style={{textAlign: "Center",paddingTop:"30px",marginTop:"-10px"}}>Bio Data Of</h4>
            <h1  style={{textAlign: "Center"}}>{connection.name}
            </h1><hr/>
            <div className='personal-info'style={{paddingLeft:"20px"}}>
              <h2>Personal Information</h2>
              <p>
                Name : {connection.name}
              </p>
              <p>
                Email : {connection.email}
              </p>
              <p>
                Phone : {connection.phone}
              </p>
            </div>
            <div className='skills'style={{paddingLeft:"20px"}}>
              <h2>Skills :</h2>
              <ul>
              {connection.skills.map(skill =>(
                 <li>
                     {skill}
                 </li>
              )
              )
            }
              </ul>
            </div>
            <div className='interest'style={{paddingLeft:"20px"}}>
              <h2>Interest :</h2>
              <ul>
               {connection.interests.map(interest => (
                   <li>
                       {interest}
                   </li>
               ))}
              </ul>
            </div>
            <hr />
            <p style={{paddingBottom:"100px",paddingLeft:"20px"}}>
                Reference By : {connection.referenceBy}
            </p>
          </div>
        </div>
      );
}
export default BioData;