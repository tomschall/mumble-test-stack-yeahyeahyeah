import tw from "twin.macro"
import {
	Navigation,
	Mumble,
	WriteComponent,
	Heading,
	Paragraph,
} from "@smartive-education/design-system-component-library-yeahyeahyeah"

export default function Home() {
	const handleAvatar = () => {
		console.log("avatar")
	}
	return (
		<>
			<div tw="bg-slate-200">
				<Navigation
					logo={{
						title: "Mumble Logo",
						href: "#",
						variant: "white",
						alignment: "horizontal",
						fCallBack: () => console.log("logo"),
						isNavigation: true,
					}}
					avatar={{
						label: "Label",
						variant: "profile",
						fCallBack: () => console.log("profile"),
						src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
					}}
					settings={{
						label: "Settings",
						variant: "default",
						fCallBack: () => console.log("settings"),
						icon: "settings",
					}}
					logout={{
						label: "Logout",
						variant: "default",
						fCallBack: () => console.log("logout"),
						icon: "logout",
					}}
				/>
				<div tw="container">
					<div tw="mt-32">
						<Heading
							label="Willkommen auf Mumble"
							color="violet"
							tag="h2"
							size="default"
							spacing="32"
						/>
						<Heading
							label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
							color="light"
							tag="h4"
							size="default"
							spacing="32"
						/>
					</div>
					<div tw="mb-16">
						<WriteComponent
							variant="write"
							spacing="64"
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
									src: "https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif",
								},
								label: "Hey, was läuft?",
								username: {
									href: "#",
									label: "Username",
									type: "username",
								},
								variant: "recommended", // wrong placed
							}}
						/>
					</div>
					<div tw="mb-16">
						<Mumble
							variant="timeline"
							comment={{
								fCallBack: function noRefCheck() {},
								quantity: 0,
							}}
							like={{
								fCallBack: function noRefCheck() {},
								quantity: 999,
							}}
							share={{
								fCallBack: function noRefCheck() {},
								label: "Share",
							}}
							text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
							img={{
								alt: "This is a profile picture!",
								fCallBack: function noRefCheck() {},
								src: "https://learnenglishteens.britishcouncil.org/sites/teens/files/field/image/istock-898916122.jpg",
							}}
							user={{
								avatar: {
									alt: "avatar",
									buttonCallBack: function noRefCheck() {},
									imageCallBack: function noRefCheck() {},
									src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
								},
								joined: {
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Joined",
									type: "joined",
								},
								label: "Display Name",
								location: {
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Location",
									type: "location",
								},
								timestamp: {
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Timestamp",
									type: "timestamp",
								},
								username: {
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Username",
									type: "username",
								},
								variant: "xlarge",
							}}
						/>
					</div>
					<div tw="mb-16">
						<Mumble
							variant="timeline"
							comment={{
								fCallBack: function noRefCheck() {},
								quantity: 0,
							}}
							like={{
								fCallBack: function noRefCheck() {},
								quantity: 999,
							}}
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
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Joined",
									type: "joined",
								},
								label: "Display Name",
								location: {
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Location",
									type: "location",
								},
								timestamp: {
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Timestamp",
									type: "timestamp",
								},
								username: {
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Username",
									type: "username",
								},
								variant: "xlarge",
							}}
						/>
					</div>
					<div tw="mb-16">
						<Mumble
							variant="timeline"
							comment={{
								fCallBack: function noRefCheck() {},
								quantity: 0,
							}}
							img={{
								alt: "This is a profile picture!",
								fCallBack: function noRefCheck() {},
								src: "https://shorturl.at/nEO01",
							}}
							like={{
								fCallBack: function noRefCheck() {},
								quantity: 999,
							}}
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
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Joined",
									type: "joined",
								},
								label: "Display Name",
								location: {
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Location",
									type: "location",
								},
								timestamp: {
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Timestamp",
									type: "timestamp",
								},
								username: {
									fCallBack: function noRefCheck() {},
									href: "",
									label: "Username",
									type: "username",
								},
								variant: "xlarge",
							}}
						/>
					</div>
					<div tw="mt-64">&nbsp;</div>
				</div>
			</div>

			{/* <Button
				variant="pink"
				size="large"
				label="Roli Chicken Fest"
				icon="logo"
				width="default"
				/>
			<Button
				variant="pink"
				size="large"
				label="Roli Chicken Fest"
				icon="eye"
			/>
			<IconLink label="Roli Chicken Fest" href="https://www.google.com" />
			<p css={tw`bg-slate-900 text-slate-white text-3xl`}>Hello World</p>
			<Logo width={200} height={200} css={tw`fill-violet-600`} />
			<LogoMumble width={200} height={200} css={tw`fill-violet-600`} />
			<Calendar width={100} height={100} css={tw`fill-violet-600`} />
			<Cancel width={100} height={100} css={tw`fill-violet-600`} />
			<Checkmark width={100} height={100} css={tw`fill-violet-600`} />
			<Down width={100} height={100} css={tw`fill-violet-600`} />
			<Edit width={100} height={100} css={tw`fill-violet-600`} />
			<p css={tw`text-pink-600 text-3xl`}>Hello World</p>
			<p tw={"text-violet-600 text-3xl"}>Hello World</p>
			<Mumble
				variant="detailpage"
				comment={{
					fCallBack: () => console.log("comment"),
					quantity: 0,
				}}
				img={{
					alt: "This is a profile picture!",
					fCallBack: function noRefCheck() {
						return null
					},
					src: "https://shorturl.at/uvyKU",
				}}
				like={{
					fCallBack: () => console.log("like"),
					quantity: 999,
				}}
				share={{
					fCallBack: () => console.log("share"),
					label: "Share",
				}}
				text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
				user={{
					avatar: {
						alt: "avatar",
						imageCallBack: handleAvatar,
						src: "https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif",
					},
					joined: {
						href: "",
						label: "Joined",
						fCallBack: () => console.log("joined"),
					},
					label: "Display Name",
					location: {
						href: "",
						label: "Location",
						fCallBack: () => console.log("location"),
					},
					timestamp: {
						href: "",
						label: "Timestamp",
						fCallBack: () => console.log("timestamp"),
					},
					username: {
						href: "",
						label: "Username",
						fCallBack: () => console.log("username"),
					},
					variant: "xlarge",
				}}
			/> */}
		</>
	)
}
