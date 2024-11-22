import React, { Component } from 'react';  
class App extends Component{  
   render(){  
      return(  
         <div>  
            {/* <h1>This is my react</h1>   */}
            <table align='center' width='100%'>
               <tr>
                  <td align='right'><font size="25">User registration </font> </td>
                  <td width='668'></td>
                  {/* <td width='668'></td> */}
               </tr>
       
               <tr>
                  <td colSpan={3}>
               <table align='center'>
                  {/* <tr>
                     <td align='left'><font size="25">User registration</font> </td>
                  </tr> */}
                  <tr>
                     <td align='right'><font size="3">Field marked * are required</font></td>
                  </tr>
                  <tr>
                     <td align='right'>Email</td>
                     {/* <td align='left' width='20' style={{color: 'Red', backgroundColor: 'green'}}>*</td> */}
                     <td align='left' width='20' style={{color: 'Red'}}>*</td>
                     <td><input type='text' value='Email' id='mail' name='mail'></input></td>
                  </tr>
                  <tr>
                     <td align='right'>Password</td>
                     <td align='left' width='20' style={{color: 'Red'}}>*</td>
                     <td><input type='text' value='Password' id='pass' name='pass'></input></td>
                  </tr>
                  <tr>
                     <td align='right'>Retype password</td>
                     <td align='left' width='20' style={{color: 'Red'}}>*</td>
                     <td><input type='text' value='Retype password' id='Repass' name='Repass'></input></td>
                  </tr>
                  <tr>
                     <td align='right'>First name</td>
                     <td align='left' width='20' style={{color: 'Red'}}>*</td>
                     <td><input type='text' value='First name' id='fname' name='fname'></input></td>
                  </tr>
                  <tr>
                     <td align='right'>Last name</td>
                     <td align='left' width='20' style={{color: 'Red'}}>*</td>
                     <td><input type='text' value='Last name' id='lname' name='lname'></input></td>
                  </tr>
                  <tr>
                     <td align='right'>Phone number</td>
                     <td align='left' width='20' style={{color: 'Red'}}>*</td>
                     <td><input type='text' value='Phone number' id='phone' name='phone'></input></td>
                  </tr>
                  <tr>
                     <td align='right'>Address</td>
                     <td align='left' width='20' style={{color: 'Red'}}>*</td>
                     <td><input type='text' value='Address 1' id='address1' name='address1'></input></td>
                  </tr>
                  <tr>
                     <td align='right'></td>
                     <td align='left' width='20'></td>
                     <td><input type='text' value='Address 2' id='address2' name='address2'></input></td>
                  </tr>
                  <tr>
                     <td align='right'>Town</td>
                     <td align='left' width='20'></td>
                     <td><input type='text' value='Town' id='town' name='town'></input></td>
                  </tr>
                  <tr>
                     <td align='right'>Region</td>
                     <td align='left' width='20' style={{color: 'Red'}}>*</td>
                     <td><input type='text' value='Region' id='region' name='region'></input></td>
                  </tr>
                  <tr>
                     <td align='right'>Postcode/Zip</td>
                     <td align='left' width='20' style={{color: 'Red'}}>*</td>
                     <td><input type='text' value='Postcode/Zip' id='postcode' name='postcode'></input></td>
                  </tr>
                  <tr>
                     <td align='right'>Country</td>
                     <td align='left' width='20' style={{color: 'Red'}}>*</td>
                     <td>
                        <select name='myDropdown'>
                           <option value='Option1'>TH</option>
                           <option value='Option1'>US</option>
                           <option value='Option1'>JP</option>
                           <option value='Option1'>CN</option>
                           <option value='Option1'>AT</option>
                        </select>
                     </td>
                  </tr>
                  <br></br>
                  <tr>
                     <td colSpan={2} align='Right'><input type='button' value="OK"></input></td>
                  </tr>
               </table>
               </td>
               </tr>
            </table>
         </div>  
      );  
   }  
}  
export default App;  
