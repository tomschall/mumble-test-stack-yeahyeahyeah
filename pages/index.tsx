import Link from "next/link"
import Navi from "./includes/navi"
import {
	Mumble,
	TextBox,
	Heading,
	Container,
} from "@smartive-education/design-system-component-library-yeahyeahyeah"

export default function Timeline() {
	return (
		<>
			<div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
				<Navi />
				<Container layout="plain">
					<Heading
						label="Willkommen auf Mumble"
						color="violet"
						tag="h2"
						size="default"
						mbSpacing="32"
					/>
					<Heading
						label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
						color="light"
						tag="h4"
						size="default"
						mbSpacing="32"
					/>
				</Container>
				<Container layout="plain">
					<div tw="mb-32">
						<TextBox
							variant="write"
							mbSpacing="64"
							form={{
								editType: "textarea",
								autoComplete: "off",
								required: false,
								errorMessage: "Da ist etwas schief gelaufen",
								placeholder: "Na, was meinste dazu ...?",
							}}
							send={{
								fCallBack: function noRefCheck() {},
								icon: "send",
								label: "Absenden",
								size: "small",
								type: "button",
								variant: "violet",
								width: "full",
							}}
							setText={function noRefCheck() {}}
							startHeading="Hey, was läuft?"
							upload={{
								fCallBack: function noRefCheck() {},
								icon: "upload",
								label: "Bild hochladen",
								size: "small",
								type: "button",
								variant: "slate",
								width: "full",
							}}
							user={{
								avatar: {
									alt: "Family Guy goes Mumble",
									src: "https://picsum.photos/40/40",
								},
								label: "Hey, was läuft?",
								username: {
									href: "#",
									label: "Username",
									type: "username",
								},
								variant: "recommended",
							}}
						/>
					</div>
					<div tw="mb-32">
						<Mumble
							comment={{
								fCallBack: function noRefCheck() {},
								quantity: 0,
							}}
							img={{
								alt: "This is a profile picture!",
								fCallBack: function noRefCheck() {},
								src: "https://picsum.photos/640/360",
							}}
							like={{
								fCallBack: function noRefCheck() {},
								quantity: 999,
							}}
							mbSpacing="32"
							share={{
								fCallBack: function noRefCheck() {},
								label: "Share",
							}}
							text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
							user={{
								avatar: {
									alt: "avatar",
									buttonCallBack: function noRefCheck() {},
									imageCallBack: function noRefCheck() {},
									src: "https://picsum.photos/640/360",
								},
								joined: {
									type: "joined",
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Joined",
								},
								label: "Display Name",
								location: {
									type: "joined",
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Location",
								},
								timestamp: {
									type: "joined",
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Timestamp",
								},
								username: {
									type: "joined",
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Username",
								},
								variant: "xlarge",
							}}
							variant="timeline"
						/>
					</div>
					<Mumble
						comment={{
							fCallBack: function noRefCheck() {},
							quantity: 0,
						}}
						like={{
							fCallBack: function noRefCheck() {},
							quantity: 999,
						}}
						mbSpacing="32"
						share={{
							fCallBack: function noRefCheck() {},
							label: "Share",
						}}
						text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
						user={{
							avatar: {
								alt: "avatar",
								buttonCallBack: function noRefCheck() {},
								imageCallBack: function noRefCheck() {},
								src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
							},
							joined: {
								type: "joined",
								fCallBack: function noRefCheck() {},
								href: "",
								label: "Joined",
							},
							label: "Display Name",
							location: {
								type: "joined",
								fCallBack: function noRefCheck() {},
								href: "",
								label: "Location",
							},
							timestamp: {
								type: "joined",
								fCallBack: function noRefCheck() {},
								href: "",
								label: "Timestamp",
							},
							username: {
								type: "joined",
								fCallBack: function noRefCheck() {},
								href: "",
								label: "Username",
							},
							variant: "xlarge",
						}}
						variant="timeline"
					/>
					<Mumble
						comment={{
							fCallBack: function noRefCheck() {},
							quantity: 0,
						}}
						img={{
							alt: "This is a profile picture!",
							fCallBack: function noRefCheck() {},
							src: "https://picsum.photos/640/360",
						}}
						like={{
							fCallBack: function noRefCheck() {},
							quantity: 999,
						}}
						mbSpacing="32"
						share={{
							fCallBack: function noRefCheck() {},
							label: "Share",
						}}
						text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
						user={{
							avatar: {
								alt: "avatar",
								buttonCallBack: function noRefCheck() {},
								imageCallBack: function noRefCheck() {},
								src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
							},
							joined: {
								type: "joined",
								fCallBack: function noRefCheck() {},
								href: "",
								label: "Joined",
							},
							label: "Display Name",
							location: {
								type: "joined",
								fCallBack: function noRefCheck() {},
								href: "",
								label: "Location",
							},
							timestamp: {
								type: "joined",
								fCallBack: function noRefCheck() {},
								href: "",
								label: "Timestamp",
							},
							username: {
								type: "joined",
								fCallBack: function noRefCheck() {},
								href: "",
								label: "Username",
							},
							variant: "xlarge",
						}}
						variant="timeline"
					/>
				</Container>
			</div>
		</>
	)
}
