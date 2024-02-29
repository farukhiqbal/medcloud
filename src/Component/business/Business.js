import React from "react";
import "./business.css";
import Software from "../Home/Software";

const Business = () => {
  return (
    <div>
      <section>
        <div className="bus-container">
          <div className="bus-heading">
            <div className="bus-title">
              <h1>ERP Modules</h1>
            </div>

            <div className="bus-detail">
              <span>
                Enterprise resource planning (ERP) is the integrated rule of
                principle business processes, regularly continuously and
                furthermore involves programming and invention of new things.
                Even so, ERP Modules are normally alluded to as a classification
                of business. Equally important the executives’ programming is
                normally a set-up of incorporated applications. For the most
                part that an association can use to gather, store, make due and
                solve information from many business exercises.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* first image section  */}
      <section>
        <div className="first-image">
          <div className="first-img">
            <img src="./asset/manuhome.png" />
          </div>
        </div>
      </section>
                 <br/>
                 <br/>
      <section>
        <div className="bus-container1">
          <div className="bus-width">
            <div className="bus-left">
              <div className="bus-list-heading">
                <h6 class="bus-list-title ">
                  Features of the Proposed ERP Modules System
                </h6>
              </div>

              <div className="bus-list-ul">
                <ul>
                  <li>
                    <p>
                      <strong>Given these Points</strong>
                    </p>
                  </li>
                  <li>Rules/Securities Management System</li>
                  <li>General Ledger</li>
                  <li>Inventory Management System</li>
                  <li>Purchase Management System</li>
                  <li>Accounts Payables</li>
                  <li>Sales Management System</li>
                  <li>Accounts Receivables</li>
                  <li>Cash Management System</li>
                  <li>Production Management System</li>
                  <li>HR and Payroll System</li>
                </ul>
              </div>
            </div>

            <div className="bus-right">
              <div className="bus-right-image">
                <img
                  src="https://multi-techno.com/wp-content/uploads/2022/06/ezgif.com-gif-maker-20-768x772.webp"
                  height="400px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* part 3  */}

        <div className="bus-detail1">
          <div className="bus-detail-p">
            <p>
              <strong>
                A brief description of the Features of the System is as follows:
              </strong>
            </p>

            <p>Another key Point</p>

            <p>
              Moreover, System to be developed in Oracle 12c database Oracle 11g
              Forms, and&nbsp; Oracle Report Developer
            </p>
          </div>
        </div>

        {/* part 4  */}

        <div className="sec-width">
          <div className="sec-left">
            <div className="sec-list-heading">
              <h6 class="sec-list-title ">Rules/Security:</h6>
            </div>

            <div className="sec-list-ul">
              <p>
                The Rule module allows you to control the operation of the
                Business Process, and furthermore manage all users and groups.
                Moreover, this chapter describes how to start the Business
                process, and explores the rules interface. It covers the base
                data that is linked to the other modules for transactional
                purposes. Its main features include: Given these Points
              </p>
              <ul>
                <li>User Management</li>
                <li>Responsibility Define</li>
                <li>Backup and Restore Management</li>
                <li>Change Password</li>
                <li>Documents Approval</li>
              </ul>
            </div>
          </div>

          <div className="sec-right">
            <div className="sec-right-image">
              <img src="https://multi-techno.com/wp-content/uploads/2022/06/ezgif.com-gif-maker-19-768x538.webp" />
            </div>
          </div>
        </div>

        {/* key part 5  */}

        <div className="key-width">
          <div className="key-list-heading">
            <h6 class="key-list-title ">Key System Strengths</h6>

            <h4>
              <strong>
                The system will be implemented in Oracle 11g and 12c database
              </strong>
            </h4>
          </div>
        </div>

        {/* part 6  */}

        <div className="key-container">
          <div className="key-width1">

            <div className="key-left">

              <div className="key-list-heading">
                <h5 class="key-list-title ">
                  Enhanced Business Reporting: Given these Points
                </h5>
              </div>

              <div className="key-list-ul">
              <ul>
                <li>Better reporting tools with real-time information</li>
                <li>A single source of truth, one integrated database for all business processes</li>
                </ul>
              </div>


                    {/* <br/> */}
                    <br/>


              <div className="key-list-heading">
                <h5 class="key-list-title ">
                Improved Inventory Costs: Given these Points
                </h5>
              </div>

              <div className="key-list-ul">
              <ul>
                <li>Only carry as much inventory as needed, avoid these common issues</li>
                <li>Too much inventory, and higher overhead costs</li>
              <li>Too little inventory, and longer customer fulfillment times</li>
              </ul>
              </div>



                  <br/>

              <div className="key-list-heading">
                <h5 class="key-list-title ">
                Cost Savings: Given these Points
                </h5>
              </div>

              <div className="key-list-ul">
              <ul>
                <li>Improved&nbsp;<a href="https://multi-techno.com/inventory-management-system/">inventory planning</a>
                </li>
                <li>Better procuring management</li>
                <li>Better customer service</li>
                <li>vendor <a href="https://simple.wikipedia.org/wiki/Enterprise_resource_planning" target="_blank" rel="noopener">relationship management</a></li>
                </ul>
              </div>


            </div>





            <div className="key-right">

            <div className="key-list-heading">
                <h5 class="key-list-title ">
                Better customer service: Given these Points

                </h5>
              </div>

              <div className="key-list-ul">
              <ul>
                <li>Better access to customer information</li>
                <li>Faster response times</li>
                <li>Improved on-time delivery</li>
                <li>Order Accuracy</li>
                </ul>

              </div>




            <div className="key-list-heading">
                <h5 class="key-list-title ">
                Boosted Cash Flow: Given these Points

                </h5>
              </div>

              <div className="key-list-ul">
              <ul> 
                <li>Better invoicing and better collections tools to bring cash in faster</li>
                <li>Faster cash means more cash-on-hand for the business</li>
              </ul>

              </div>







            </div>




          </div>
        </div>
      </section>






<Software/>




    </div>
  );
};

export default Business;
