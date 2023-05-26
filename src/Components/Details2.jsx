import React from 'react'
import "./Details2.css"
import { useForm } from "react-hook-form";
import axios from "axios";

const backend = "http://localhost:5000"


const Details2 = () => {

    const { register, handleSubmit, reset} = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
        try {
            const response = await axios.post(`${backend}/api/v1/user/upload`,data);
            console.log(response.data);
            reset();
            } catch (error) {
                console.log(error);
            }
        };
        
        const handleImgChange = (e) => {
            e.preventDefault();
        }

        const uploadImg = async (data) => {
            try {
                const response = await axios.post(`${backend}/api/v1/upload`,data);
                console.log(response);
                } catch (error) {
                    console.log(error);
                }
        }

  return (
    <div>

    {/* Header Part */}
        <div className="header">
            <p>Welcome Investor,</p>
            <p id="header_sub">"To a World of Sustainable Wealth Creation"</p>
            <p>A Financial Journey filled with capitalization of enormous wealth opportunity in an economic<br></br> transition.</p>
        </div>

        {/* Investment Details */}

        <form  className="Investment_Block" onSubmit={handleSubmit(onSubmit)}>

            <div className="Form-Heading">
                <p id="Form-Heading-p">Investment Details</p>
            </div>
            
                <div className='form-field'>
                    <label htmlFor="accountType">Account Type</label>
                    <select id="accountType" {...register('accountType', {required:true})}>
                        <option value="">Select</option>
                        <option value="savings">Savings</option>
                        <option value="current">Current</option>
                    </select>
                </div>

                <div className="form-field"><label htmlFor="portfolio_strategyname">Portfolio/Strategy Name</label>
                <select id="portfolio_strategyname" {...register('portfolio_strategyname', {required:true})}>
                        <option value="">Select</option>
                        <option value="usa">Short-Term Investment Strategies</option>
                        <option value="usa">Long-Term Investment Strategies</option>
                    </select>
                </div>

                <div className="form-field"><label htmlFor="fundfees">Fund Fees Category
                <br></br><span id="smallHeading">Fees Preview according to<br></br> selection</span></label>
                <select id="fundfees" {...register('fundfees', {required:true})}>
                        <option value="">Select</option>
                        <option value="usa">Category 1</option>
                        <option value="usa">Category 2</option>
                    </select>
                </div>


                <div className="form-field"><label htmlFor="InvestmentCategory">Investment Category<br></br><span id="smallHeading">Preview only when systematic<br></br>transfer plan is selected</span></label>
                <select id="InvestmentCategory" {...register('InvestmentCategory', {required:true})}>
                        <option value="">Select</option>
                        <option value="usa">ownership</option>
                        <option value="usa">lending</option>
                        <option value="usa">cash </option>
                    </select>
                </div>

                <div className="form-field"><label htmlFor="communication-address">Communication Address<br></br><span id="smallHeading2">(All further deliverables will be<br></br>communicated on this address)</span></label>
                <input type="text" id="communication-address" {...register('communication_address', {required: true})}></input>
                </div>

                <div className="form-field"><label htmlFor="country">Country of Tax Residency</label>
                <select id="country" {...register('country', {required:true})}>
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/1024px-Flag_of_India.png" alt="india"  width={30}/> */}
                <option value="india">India</option>
                        <option value="usa">USA</option>
                    </select>
                </div>


                <div className="form-field"><label htmlFor="No_of_AccountHolders">No. of Account Holders</label>
                <select id="No_of_AccountHolders" {...register('No_of_AccountHolders', {required:true})}>
                        <option value="">Select</option>
                        <option value="usa">1</option>
                        <option value="usa">2</option>
                    </select>
                </div>


                <div className="form-field"><label htmlFor="quantum_of_investment">Quantum of Investment</label>
                <input type="text" id="quantum_of_investment" {...register('quantum_of_investment', {required: true})}></input>
                </div>

                <div className="form-field"><label htmlFor="investment_mode">Investment Mode</label>
                <select id="investment_mode" {...register('investment_mode', {required:true})}>
                        <option value="">Select</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </select>
                </div>                

{/* Applicant Details */}

            <div className="form_Detail">
             <div className="form_heading"><p id="Form-Heading-p">Applicant Details</p>
             </div>
             <div className="form_heading2"><p id="Form-Heading-p">1st Account Holder Details</p>
             </div>
             </div>

             <div className="Label">
            <input placeholder="Applicant_Name" {...register("Applicant_Name")} />
                


                <div className="LabelContact">
            <input placeholder="Contact No." {...register("Contact")} />
            <button onClick={handleImgChange} className='btn1'>Send OTP</button>
                </div>

                <div className="Enter_otp">
                <input placeholder="Enter OTP" {...register("Contact_OTP")} />
            <button onClick={handleImgChange} className='btn2'>Verify</button>
            <button onClick={handleImgChange} className='btn3'>Re-Send OTP</button>
                </div>


                <div className="LabelContact">
            <input placeholder="Email Id" {...register("Email")} />
            <button onClick={handleImgChange} className='btn1'>Send OTP</button>
                </div>

                
                <div className="Enter_otp">
                <input placeholder="Enter OTP" {...register("Email_OTP")} />
            <button onClick={handleImgChange} className='btn2'>Verify</button>
            <button onClick={handleImgChange} className='btn3'>Re-Send OTP</button>
                </div>


                <div>
            <input placeholder="PAN No." {...register("PAN_No.")} />
                </div>
            

            <div className="DOB">
                <p>Date Of Birth</p>
                <div className="dobdate">
                    <select>
                        <option>Day</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <select>
                        <option>Month</option>
                        <option>Jan</option>
                        <option>Feb</option>
                    </select>
                    <select>
                        <option>Year</option>
                        <option>2001</option>
                        <option>2002</option>
                    </select>
                </div>    
            </div>

            <div className="File">
                <p>Upload scanned copy of PAN Card</p>
                <div className="PanImg">
                    <input type="file" accept="image/*" onChange={uploadImg} className='btn1' /></div>
                <button onClick={uploadImg} className='btn2' type="submit">Upload</button>
            </div>
            <div className="File">
                <p>Upload scanned copy of AADHAR Card</p>
                <div className="PanImg">
                    <input type="file" accept="image/*" onChange={uploadImg} className='btn1' /></div>
                <button onClick={uploadImg} className='btn2' type="submit">Upload</button>
            </div>
            </div>
                                        
            
      


{/* Banking Details */}
    
        
    <div className="form_Detail">
        <div className="form_heading">
            <p id="Form-Heading-p">Banking Preferences</p>
        </div>
        <div className="banking-pref-button">
        <input id="Cancelled_Cheque" type="radio" value="Cancelled_Cheque" name='Cancelled_Cheque'  {...register('Cancelled_Cheque')} /><label htmlFor='Cancelled_Cheque'>Cancelled Cheque</label></div>

        <div className="banking-pref-button">
        <input type="radio" value="Bank_Details" name='Cancelled_Cheque' id="Cancelled_Cheque" {...register('Bank_Details')} /><label htmlFor='Bank_Details'>Bank Details</label>
        </div>   
    </div>

        <div className="Label">
            <input placeholder="Bank Name" {...register("Bank_Name")} />
            <input placeholder="Account No." {...register("Account_No")} />
            <input placeholder="Account Title" {...register("Account_Title")} />
            <input placeholder="Bank IFSC Code" {...register("Bank_IFSC_Code")} />
        </div>

        <div className="form_Detail">
             <div className="form_heading"><p id="Form-Heading-p">Nominee Details</p>
             </div>
             <div className="form_heading2 Nominee-section"><select id="Number_of_Nominees" {...register('Number_of_Nominees', {required:true})}>
                        <option value="">Select Number of Nominees</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
             </div>
             </div>

             <div className="form_Detail form_detail2">
             <div className="form_heading2"><p id="Form-Heading-p">1st Nominee Details</p>
             </div>
             </div>

        <div className="Label">
            <input placeholder="Nominee Name" {...register("Nominee_Name")} />
            <input placeholder="Nominee PAN" {...register("Nominee_PAN")} />
            <input placeholder="Nominee Email Id." {...register("Nominee_Email_Id")} />
            <input placeholder="Nominee Contact No." {...register("Nominee_Contact_No")} />
        

            <div className="DOB">
                <p>Date Of Birth</p>
                <div className="dobdate">
                <select>
                        <option>Day</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <select>
                        <option>Month</option>
                        <option>Jan</option>
                        <option>Feb</option>
                    </select>
                    <select>
                        <option>Year</option>
                        <option>2001</option>
                        <option>2002</option>
                    </select>
                </div>
                
            </div>

            <input placeholder="Nominee Relationship with 1st Applicant" {...register("Nominee Relationship with 1st Applicant")} />
            <input placeholder="Nominee (%)" {...register("Nominee_percentage")} />
            </div>


{/* Risk Profiler */}


            <div className="Form-Heading">
                <p id="Form-Heading-p">Investment Risk Profiler</p>
            </div>
            <div className="risk-content">
                <p>Welcome to <span>Risk Profiler</span></p>
                <p>Your Investment is utmost as important as understanding your emotional risk appetite</p>
            </div>

            <div className="radio-group">
                <label htmlFor="Investment-Experience">Investment Experience</label>
                <div className="radio-group2">
                <input type="radio" value="0-3 yr" id="0-3 yr" name="Investment_Experience" {...register("Investment_Experience")} />
                <label htmlFor='0-3 yr'>0-3 yr</label>

                <input type="radio" value="3-5 yr" id="3-5 yr" name="Investment_Experience" {...register("Investment_Experience")} />
                <label htmlFor='3-5 yr'>3-5 yr</label>

                <input type="radio" value="5-7 yr" id="5-7 yr" name="Investment_Experience" {...register("Investment_Experience")} />
                <label htmlFor='5-7 yr'>5-7 yr</label>

                <input type="radio" value=">7 yr" id=">7 yr" name="Investment_Experience" {...register("Investment_Experience")} />
                <label htmlFor='>7 yr'> {">7yr"}</label>
                </div>
            </div>

            <div className="radio-group">
                <label htmlFor="Investment-Style">Investment Style:</label>
                <div className="radio-group2">
                <input type="radio" value="Active" id="Active" name="Investment_style" {...register("Investment_style")} />
                <label htmlFor='Active'>Active</label>

                <input type="radio" value="Passive" id="Passive" name="Investment_style" {...register("Investment_style")} />
                <label htmlFor='Passive'>Passive</label>
                </div>
            </div>

            <div className="radio-group">
                <label htmlFor="Investment-Style">How would you react if well diversified <br></br>portfolio fells below 10%:</label>
                <div className="radio-group2">

                <input type="radio" value="Accumulate" id="Accumulate" name="Investment_mode" {...register("Investment_mode")} />
                <label htmlFor='Accumulate'>Accumulate</label>

                <input type="radio" value="Hold" id="Hold" name="Investment_mode" {...register("Investment_mode")} />
                <label htmlFor='Hold'>Hold</label>

                <input type="radio" value="Reduce" id="Reduce" name="Investment_mode" {...register("Investment_mode")} />
                <label htmlFor='Reduce'>Reduce</label>

                <input type="radio" value="Exit" id="Exit" name="Investment_mode" {...register("Investment_mode")} />
                <label htmlFor='Exit'>Exit</label>
                </div>
            </div>



            <div className='form-field'>
                    <label htmlFor="Investment-Objective">Investment Objective</label>
                    <select id="Investment-Objective" {...register('Investment_Objective')}>
                        <option value="">Select</option>
                        <option value="">Product</option>
                    </select>
                </div>

                <div className='form-field'>
                    <label htmlFor="Risk_Tolerance">Risk Tolerance</label>
                    <select id="Risk_Tolerance" {...register('Risk_Tolerance')}>
                        <option value="">Select</option>
                        <option value="">Low</option>
                        <option value="">Medium</option>
                        <option value="">High</option>
                    </select>
                </div>



                <div className="footerHeading">
                    <p>I/We understand the above information provided is connect to the best of my knowledge / belief, and understand the adversities/risk tolerance arising from mis-placement of information/data in any manner</p>
                </div>

                <div className="captchaCode">
                    <span>Captcha code</span>
                </div>

                <div className="captcha">
                    <p>Enter Captcha</p>
                    <input type="text" {...register('captcha')}></input>

                </div>

            <button id="submitButton" type="submit" className="btn2">Submit</button>



        </form>
    </div>
  )
}

export default Details2
