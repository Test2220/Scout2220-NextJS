"use client";
import "@radix-ui/themes/styles.css";
import Script from "next/script";
import "@/app/globals.css";

import {
	Theme,
	Tabs,
	Box,
	Container,
	TextField,
	Select,
	Button,
	Switch,
	Flex,
	TextArea,
} from "@radix-ui/themes";

import "dotenv";
import "react";
import { SubmitResults } from "./actions/googlesheets.action";

export default function Home() {
	const sendResults = async () => {
		const response = SubmitResults();
		console.log(response);
	};

	return (
		<html>
			<body>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* <script src="./button.js"></script>
    <script src="./index.js" defer type="module"></script> */}
				{/* <script src="../index.js" defer></script>  */}
				{/* <script src="https://scout-2220.vercel.app/index.js"></script> */}
				<Script
					src="https://test2220.github.io/button.js"
					strategy="beforeInteractive"
				/>
				<Script
					type="module"
					src="https://test2220.github.io/main.js"
					defer
					strategy="beforeInteractive"
				/>

				<title>Scouter</title>
				<h1>Scouter</h1>
				<div className="scouter">
					<Theme>
						<Box>
							<Container maxWidth="530px">
								<Tabs.Root defaultValue="start">
									<Tabs.List color="blue" size="2">
										<Tabs.Trigger value="start">Start</Tabs.Trigger>
										<Tabs.Trigger value="auto">Auto</Tabs.Trigger>
										<Tabs.Trigger value="teleop">Teleop</Tabs.Trigger>
										<Tabs.Trigger value="endgame">End Game</Tabs.Trigger>
										<Tabs.Trigger value="postmatch">Postmatch</Tabs.Trigger>
										<Tabs.Trigger value="notes">Notes</Tabs.Trigger>
										<Tabs.Trigger value="submit">Submit</Tabs.Trigger>
									</Tabs.List>

									<Tabs.Content value="start">
										<h2>Match #</h2>

										<div>
											<TextField.Root
												id="TextField"
												radius="large"
												size="3"
												placeholder="000"
												name="match number"
											>
												<TextField.Slot id="TextFieldSlot"></TextField.Slot>
											</TextField.Root>
										</div>
										<h2>Scouter Initials</h2>
										<div>
											<TextField.Root
												id="TextField"
												radius="large"
												size="3"
												placeholder="ABC"
												name="scouter initials"
											>
												<TextField.Slot id="TextFieldSlot"></TextField.Slot>
											</TextField.Root>
										</div>

										<h2>Team #</h2>
										<div>
											<TextField.Root
												id="TextField"
												radius="large"
												size="3"
												placeholder="0000"
												name="team number"
											>
												<TextField.Slot id="TextFieldSlot"></TextField.Slot>
											</TextField.Root>
										</div>
									</Tabs.Content>

									<Tabs.Content value="auto">
										<div>
											<h2>Starting position</h2>
											<Select.Root defaultValue="Select" id="Dropdown">
												<Select.Trigger />
												<Select.Content id="DropdownContent">
													<Select.Group>
														<Select.Label>Choose</Select.Label>
														<Select.Item value="Select">Select</Select.Item>
														<Select.Item value="In front of speaker">
															In front of speaker
														</Select.Item>
														<Select.Item value="Next to amp">
															Next to amp
														</Select.Item>
														<Select.Item value="Next to source">
															Next to source
														</Select.Item>
													</Select.Group>
												</Select.Content>
											</Select.Root>
										</div>
										<div>
											<h2>Speaker notes scored</h2>
											<Flex className="Manipulated">
												<Box>
													<Button
														className="minus"
														color="blue"
														id="plus"
														name="speakerNotesScoredAuto"
														size="4"
														radius="full"
													>
														-
													</Button>
												</Box>
												<Box maxWidth="250px">
													<TextField.Root
														id="TextField"
														className="TextField"
														radius="large"
														size="3"
														placeholder="00"
														name="auto speaker notes scored"
													>
														<TextField.Slot
															className="TextField"
															id="TextFieldSlot"
														></TextField.Slot>
													</TextField.Root>
												</Box>
												<Box>
													<Button
														className="plus"
														color="blue"
														id="plus"
														name="speakerNotesScoredAuto"
														size="4"
														radius="full"
													>
														+
													</Button>
												</Box>
											</Flex>
										</div>
										<div>
											<div>
												<h2>AMP notes scored</h2>
												<Flex className="Manipulated">
													<Box>
														<Button
															className="minus"
															color="blue"
															id="plus"
															name="ampNotesScoredAuto"
															size="4"
															radius="full"
														>
															-
														</Button>
													</Box>
													<Box maxWidth="250px">
														<TextField.Root
															id="TextField"
															radius="large"
															size="3"
															placeholder="00"
															name="auto amp notes scored"
														>
															<TextField.Slot
																className="TextField"
																id="TextFieldSlot"
															></TextField.Slot>
														</TextField.Root>
													</Box>
													<Box>
														<Button
															className="plus"
															color="blue"
															id="plus"
															name="ampNotesScoredAuto"
															size="4"
															radius="full"
														>
															+
														</Button>
													</Box>
												</Flex>
											</div>
											<div>
												<div>
													<h2>Left starting area</h2>
													<Switch
														id="Switch"
														size="3"
														color="blue"
														radius="small"
													></Switch>
												</div>
											</div>
										</div>
									</Tabs.Content>

									<Tabs.Content value="teleop">
										<div>
											<h2>Speaker notes scored</h2>
											<Flex className="Manipulated">
												<Box>
													<Button
														className="minus"
														color="blue"
														id="plus"
														name="speakerNotesScoredTeleop"
														size="4"
														radius="full"
													>
														-
													</Button>
												</Box>
												<Box maxWidth="250px">
													<TextField.Root
														id="TextField"
														radius="large"
														size="3"
														placeholder="00"
														name="teleop speaker notes scored"
													>
														<TextField.Slot
															className="TextField"
															id="TextFieldSlot"
														></TextField.Slot>
													</TextField.Root>
												</Box>
												<Box>
													<Button
														className="plus"
														color="blue"
														id="plus"
														name="speakerNotesScoredTeleop"
														size="4"
														radius="full"
													>
														+
													</Button>
												</Box>
											</Flex>
										</div>
										<div>
											<h2>AMP notes scored</h2>
											<Flex className="Manipulated">
												<Box>
													<Button
														className="minus"
														color="blue"
														id="plus"
														name="ampNotesScoredTeleop"
														size="4"
														radius="full"
													>
														-
													</Button>
												</Box>
												<Box maxWidth="250px">
													<TextField.Root
														id="TextField"
														radius="large"
														size="3"
														placeholder="00"
														name="teleop amp notes scored"
													>
														<TextField.Slot
															className="TextField"
															id="TextFieldSlot"
														></TextField.Slot>
													</TextField.Root>
												</Box>
												<Box>
													<Button
														className="plus"
														color="blue"
														id="plus"
														name="ampNotesScoredTeleop"
														size="4"
														radius="full"
													>
														+
													</Button>
												</Box>
											</Flex>
										</div>
										<h2>Note Pickup Location</h2>
										<Select.Root defaultValue="Select" id="Dropdown">
											<Select.Trigger />
											<Select.Content id="DropdownContent">
												<Select.Item value="Select">Select</Select.Item>
												<Select.Item value="Not observed">
													Not observed
												</Select.Item>
												<Select.Item value="None">None</Select.Item>
												<Select.Item value="Ground">Ground</Select.Item>
												<Select.Item value="Source">Source</Select.Item>
												<Select.Item value="Ground + Source">
													Ground + Source
												</Select.Item>
											</Select.Content>
										</Select.Root>
									</Tabs.Content>

									<Tabs.Content value="endgame">
										<h2>Trap note scored</h2>
										<Select.Root defaultValue="Select" id="Dropdown">
											<Select.Trigger />

											<Select.Content id="DropdownContent">
												<Select.Group>
													<Select.Label>Choose</Select.Label>
													<Select.Item value="Select">Select</Select.Item>
													<Select.Item value="0">0</Select.Item>
													<Select.Item value="1">1</Select.Item>
													<Select.Item value="2">2</Select.Item>
													<Select.Item value="3">3</Select.Item>
												</Select.Group>
											</Select.Content>
										</Select.Root>
										<h2>End Position</h2>
										<Select.Root defaultValue="Select" id="Dropdown">
											<Select.Trigger />
											<Select.Content id="DropdownContent">
												<Select.Group>
													<Select.Label>Choose</Select.Label>
													<Select.Item value="Select">Select</Select.Item>
													<Select.Item value="notObserved">
														Not observed
													</Select.Item>
													<Select.Item value="noClimb">No climb</Select.Item>
													<Select.Item value="parked">Parked</Select.Item>
													<Select.Item value="onStage">On stage</Select.Item>
													<Select.Item value="spotlit">Spotlit</Select.Item>
												</Select.Group>
											</Select.Content>
										</Select.Root>
										<div>
											<h2>Contributed to harmony</h2>
											<Switch
												id="Switch"
												size="3"
												color="blue"
												radius="small"
											></Switch>
										</div>

										<div>
											<h2>High note scored on mic</h2>
											<Select.Root defaultValue="Select" id="Dropdown">
												<Select.Trigger />
												<Select.Content id="DropdownContent">
													<Select.Group>
														<Select.Label>Choose</Select.Label>
														<Select.Item value="Select">Select</Select.Item>
														<Select.Item value="0">0</Select.Item>
														<Select.Item value="1">1</Select.Item>
														<Select.Item value="2">2</Select.Item>
														<Select.Item value="3">3</Select.Item>
													</Select.Group>
												</Select.Content>
											</Select.Root>
										</div>
									</Tabs.Content>

									<Tabs.Content value="postmatch">
										<div>
											<h2>Yellow card</h2>
											<Switch
												id="Switch"
												size="3"
												color="blue"
												radius="small"
											></Switch>
										</div>
										<div>
											<h2>Red card</h2>
											<Switch
												id="Switch"
												size="3"
												color="blue"
												radius="small"
											></Switch>
										</div>
										<h2>Offense skill</h2>
										<Select.Root defaultValue="Select" id="Dropdown">
											<Select.Trigger />
											<Select.Content id="DropdownContent">
												<Select.Group>
													<Select.Label>Choose</Select.Label>
													<Select.Item value="Select">Select</Select.Item>
													<Select.Item value="Not observed">
														Not observed
													</Select.Item>
													<Select.Item value="Bad">Bad</Select.Item>
													<Select.Item value="Mid">Mid</Select.Item>
													<Select.Item value="Good">Good</Select.Item>
												</Select.Group>
											</Select.Content>
										</Select.Root>
										<h2>Defense skill</h2>
										<Select.Root defaultValue="Select" id="Dropdown">
											<Select.Trigger />
											<Select.Content id="DropdownContent">
												<Select.Group>
													<Select.Label>Choose</Select.Label>
													<Select.Item value="Select">Select</Select.Item>
													<Select.Item value="Not observed">
														Not observed
													</Select.Item>
													<Select.Item value="Bad">Bad</Select.Item>
													<Select.Item value="Mid">Mid</Select.Item>
													<Select.Item value="Good">Good</Select.Item>
												</Select.Group>
											</Select.Content>
										</Select.Root>
										<div>
											<div>
												<h2>Died or disconnected</h2>
												<Switch
													id="Switch"
													size="3"
													color="blue"
													radius="small"
												></Switch>
											</div>
										</div>
										<div>
											<h2>Tipped over</h2>
											<Switch
												id="Switch"
												size="3"
												color="blue"
												radius="small"
											></Switch>
										</div>
									</Tabs.Content>

									<Tabs.Content value="notes">
										<h2>Additional Notes</h2>
										<TextArea
											name="Notes"
											id="Notes"
											placeholder="Type any additional notes here"
											size="3"
											variant="soft"
											radius="large"
											resize='vertical'
											rows='10'
										></TextArea>
									</Tabs.Content>

									<Tabs.Content value="submit">
										<h2>Submit</h2>
										<div className="EndButton">
											<Button
										
												radius="full"
												size="4"
												color="blue"
												id="endOfForm"
												onClick={sendResults}
											>
												Submit
											</Button>
											<h3>
											TO DO:
											This area lets you know the status of results.
											The options are: saved to device, data sent, or sending saved results. 
											There will also be a progress bar that appeares to let you know the
											progress of these actions.
										</h3>

										</div>
									
										<div className="EndButton">
											<Button

												radius="full"
												size="4"
												color="blue"
												id="clearForm"
											>
												Clear form
											</Button>
											<h3>This button clears all entered results.</h3>
										</div>

										<h3></h3>
									</Tabs.Content>
								</Tabs.Root>
							</Container>
						</Box>
					</Theme>
				</div>
			</body>
		</html>
	);
}
