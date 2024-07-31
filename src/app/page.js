
'use client'
import Script from "next/script";
import styles from "./globals.css";
import 'dotenv'
import { sendResponse } from "next/dist/server/image-optimizer";
import 'react'
import { SubmitResults } from "./actions/googlesheets.action"

export default function Home() {

    const sendResults = async () => {
        const response = SubmitResults()
        console.log(response)
     }


  return (
<main>


    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    {/* <script src="./button.js"></script>
    <script src="./index.js" defer type="module"></script> */}
     {/* <script src="../index.js" defer></script>  */}
    {/* <script src="https://scout-2220.vercel.app/index.js"></script> */}
        <Script src='https://test2220.github.io/button.js' strategy="beforeInteractive" />
          <Script type="module" src="https://test2220.github.io/main.js" defer strategy="beforeInteractive" />
        
    <title>Scouter</title>
    {/* <!-- <scripts src="./qr.js"></script> --> */}
    <Script src="https://test2220.github.io/qr.js" strategy="beforeInteractive" />
    {/* <!-- <link rel="manifest" href="https://scout-2220.vercel.app/manifest.json" /> --> */}

    {/* <!-- <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
        </div> --> */}
    {/* <!-- 
        <script>
            if ("serviceWorker" in navigator) {
                // If yes, we register the service worker
                navigator.serviceWorker.register("sw.js");
              }
            </script>
             --> */}
        <h1>Scouter</h1>
        <div className="scouter">

            <div>
                <button type="button" className="collapsible">Pre-Match ▼</button>
                <div className="section">

                    <h2>Match #</h2>

                    <div>
                        <input placeholder="000" name="match number" title="Match #" maxLength='3' id="Match number"/>
                    </div>
                    <h2>Scouter Initials</h2>
                    <div>
                        <input placeholder="ASP" name="scouter_initials" title="Scouter Initials" maxLength='3'
                            id="scouterInitials"/>
                    </div>

                    <h2>Team #</h2>
                    <div>
                        <input placeholder="0000" name="team_number" title="Team #" maxLength='4' id="teamNumber"/>

                    </div>
                </div>
            </div>


            <div>
                <button type="button" className="collapsible">Autonomous ▼</button>
                <div className="section">
                    <div>
                        <h2>Starting position</h2>
                        <label htmlFor="startingPosition">Starting position</label>

                        <select name="startingPosition" id="startingPosition">
                            <option  defaultValue="Select" >Select</option>
                            <option  defaultValue="In front of speaker">In front of speaker</option>
                            <option  defaultValue="On amp side">On side of amp</option>
                            <option  defaultValue="On source side">On side of source</option>
                        </select>
                    </div>
                    <div>
                        <h2>Speaker notes scored</h2>
                        <button id="minus" name="speakerNotesScoredAuto">-</button>
                        <input  defaultValue="0" id="speakerNotesScoredAuto"></input>
                        <button id="plus" name="speakerNotesScoredAuto">+</button>
                    </div>
                    <div>
                        <div>
                            <h2>AMP notes scored</h2>
                            <button id="minus" name="ampNotesScoredAuto">-</button>
                            <input  defaultValue="0" id="ampNotesScoredAuto"></input>
                            <button id="plus" name="ampNotesScoredAuto">+</button>
                        </div>
                        <div>
                            <div>
                                <h2>Left starting area</h2>
                                <label htmlFor="leftStartingArea">Left starting area</label>

                                <select name="leftStartingArea" id="leftStartingArea">
                                    <option  defaultValue="Select yes/no">Select yes/no</option>
                                    <option  defaultValue="Yes">Yes</option>
                                    <option  defaultValue="No">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button type="button" className="collapsible">Teleop ▼</button>
                <div className="section">
                    <div>
                        <h2>Speaker notes scored</h2>
                        <button id="minus" name="speakerNotesScoredTeleop">-</button>
                        <input  defaultValue="0" id="speakerNotesScoredTeleop"></input>
                        <button id="plus" name="speakerNotesScoredTeleop">+</button>
                    </div>
                    <div>
                        <h2>AMP notes scored</h2>
                        <button id="minus" name="ampNotesScoredTeleop">-</button>
                        <input  defaultValue="0" id="ampNotesScoredTeleop"></input>
                        <button id="plus" name="ampNotesScoredTeleop">+</button>
                    </div>
                    <h2>Note Pickup Location</h2>
                    <label htmlFor="notePickupLocation">Note Pickup Location</label>

                    <select name="notePickupLocation" id="notePickupLocation">
                        <option  defaultValue="Not observed" >Not observed</option>
                        <option  defaultValue="none">None</option>
                        <option  defaultValue="ground">Ground</option>
                        <option  defaultValue="source">Source</option>
                        <option  defaultValue="ground & source">ground & source</option>
                    </select>
                </div>
            </div>

            <div>
                <button type="button" className="collapsible">Endgame ▼</button>
                <div className="section">
                    <h2>Trap note scored</h2>
                    <label htmlFor="trapNoteScored">Trap note scored</label>

                    <select name="trapNoteScored" id="trapNoteScored">
                        <option  defaultValue="Select 0,1,2,3" >Select 0,1,2,3</option>
                        <option  defaultValue="0">0</option>
                        <option  defaultValue="1">1</option>
                        <option  defaultValue="2">2</option>
                        <option  defaultValue="3">3</option>
                    </select>
                    <h2>End Position</h2>
                    <label htmlFor="endPosition">End Position</label>

                    <select name="endPosition" id="endPosition">
                        <option  defaultValue="Not observed" >Not observed</option>
                        <option  defaultValue="noClimb">No Climb</option>
                        <option  defaultValue="parked">Parked</option>
                        <option  defaultValue="onstage">Onstage</option>
                        <option  defaultValue="spotlit">Spotlit</option>
                    </select>
                    <div>
                        <h2>Contributed to harmony</h2>
                        <label htmlFor="contributedToHarmony">Contributed to harmony</label>

                        <select name="contributedToHarmony" id="contributedToHarmony">
                            <option  defaultValue="Select yes/no" >Select yes/no</option>
                            <option  defaultValue="Yes">Yes</option>
                            <option  defaultValue="No">no</option>
                        </select>
                    </div>

                    <div>
                        <h2>High note scored on mic</h2>
                        <label htmlFor="highNote">High note scored on mic</label>

                        <select name="highNote" id="highNote">
                            <option  defaultValue="Select 0,1,2,3" >Select 0,1,2,3</option>
                            <option  defaultValue="0">0</option>
                            <option  defaultValue="1">1</option>
                            <option  defaultValue="2">2</option>
                            <option  defaultValue="3">3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className="collapsible">Postmatch ▼</button>
                <div className="section">
                    <div>
                        <h2>Yellow card</h2>
                        <label htmlFor="yellowCard">Yellow card</label>

                        <select name="notePickupLocation" id="yellowCard">
                            <option  defaultValue="Select yes/no" >Select yes/no</option>
                            <option  defaultValue="Yes">Yes</option>
                            <option  defaultValue="No">No</option>
                        </select>
                    </div>
                    <div>
                        <h2>Red card</h2>
                        <label htmlFor="redCard">Red card</label>

                        <select name="redCard" id="redCard">
                            <option  defaultValue="Select yes/no" >Select yes/no</option>
                            <option  defaultValue="Yes">Yes</option>
                            <option  defaultValue="No">No</option>
                        </select>
                    </div>
                    <h2>Offense skill</h2>
                    <label htmlFor="offenseSkill">Offense skill</label>

                    <select name="offenseSkill" id="offenseSkill">
                        <option  defaultValue="Not observed" >Not observed</option>
                        <option  defaultValue="bad">Bad</option>
                        <option  defaultValue="mid">Mid</option>
                        <option  defaultValue="good">Good</option>
                    </select>
                    <h2>Defense skill</h2>
                    <label htmlFor="defenseSkill">Defense skill</label>

                    <select name="defenseSkill" id="defenseSkill">
                        <option  defaultValue="Not observed" >Not observed</option>
                        <option  defaultValue="bad">Bad</option>
                        <option  defaultValue="mid">Mid</option>
                        <option  defaultValue="good">Good</option>
                    </select>
                    <div>
                        <div>
                            <h2>Died or disconnected</h2>
                            <label htmlFor="died">Died or disconnected</label>

                            <select name="died" id="died">
                                <option  defaultValue="Select yes/no" >Select yes/no</option>
                                <option  defaultValue="Yes">Yes</option>
                                <option  defaultValue="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h2>Tipped over</h2>
                        <label htmlFor="tippedOver">Tipped over</label>

                        <select name="tippedOver" id="tippedOver">
                            <option  defaultValue="Select yes/no" >Select yes/no</option>
                            <option  defaultValue="Yes">Yes</option>
                            <option  defaultValue="No">No</option>
                        </select>

                    </div>
                </div>
            </div>

            <div>

                <h2>Additional Notes</h2>
                <textarea name="Notes" id="Notes" placeholder="Type any additional notes here"
                    style={{fontSize:'35px', rows:'5', cols:'45'}}></textarea>

                
                  <div>
                      <button id='endOfForm' onClick={sendResults}>Submit</button>
                </div>

                <div>
                    <button id="clearForm">Clear form</button>
                </div>
                

            </div>
        </div>

    </main>
  );
}
