import "twin.macro";
import Navi from "./includes/navi";
import {
  Checkbox,
  Container,
  Heading,
  Mumble,
  WriteComponent,
  ImageContainer,
  Avatar,
  User,
  Paragraph,
} from "@smartive-education/design-system-component-library-yeahyeahyeah";

export default function Profilepage() {
  const handleAvatar = () => {
    console.log("avatar clicked");
  };

  return (
    <>
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
        <Navi />
        <div tw="container py-16">
          <div tw="flex flex-col justify-between">
            <ImageContainer
              src="https://placebeard.it/640x360"
              alt="Picture"
              type="banner"
            />
            <div tw="px-8 mb-16">
              <User
                avatar={{
                  alt: "Alter Tag",
                  buttonCallBack: function noRefCheck() {},
                  imageCallBack: function noRefCheck() {},
                  src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
                }}
                btn={{
                  fCallBack: function noRefCheck() {},
                  label: "Follow",
                }}
                joined={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Joined",
                }}
                label="Display Name"
                location={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Location",
                }}
                timestamp={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Timestamp",
                }}
                username={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Username",
                }}
                variant="xlarge"
              />
            </div>
            <div tw="flex justify-end items-end z-10 h-0 relative -top-16 overflow-visible">
              <Avatar
                src="https://picsum.photos/640/360"
                alt="Picture"
                variant="edit"
              />
            </div>
            <div tw="p-8 mb-32">
              <Paragraph
                text="De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
                color="light"
              />
            </div>

            <Checkbox selection="mumbles" />
          </div>
        </div>
        <Container layout="plain">
          <Heading
            tag="h3"
            size="default"
            label="Empfohlene User"
            mbSpacing="16"
          />

          <div tw="grid grid-flow-row sm:(grid-flow-col grid-rows-3) gap-16 mb-32">
            <div>
              <User
                avatar={{
                  alt: "Alter Tag",
                  buttonCallBack: () => {},
                  imageCallBack: function noRefCheck() {},
                  src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
                }}
                btn={{
                  fCallBack: function noRefCheck() {},
                  label: "Follow",
                }}
                joined={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Joined",
                }}
                label="Display Name"
                location={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Location",
                }}
                timestamp={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Timestamp",
                }}
                username={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Username",
                }}
                variant="recommended"
              />
            </div>
            <div>
              <User
                avatar={{
                  alt: "Alter Tag",
                  buttonCallBack: () => {},
                  imageCallBack: function noRefCheck() {},
                  src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
                }}
                btn={{
                  fCallBack: function noRefCheck() {},
                  label: "Follow",
                }}
                joined={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Joined",
                }}
                label="Display Name"
                location={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Location",
                }}
                timestamp={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Timestamp",
                }}
                username={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Username",
                }}
                variant="recommended"
              />
            </div>
            <div>
              <User
                avatar={{
                  alt: "Alter Tag",
                  buttonCallBack: () => {},
                  imageCallBack: function noRefCheck() {},
                  src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
                }}
                btn={{
                  fCallBack: function noRefCheck() {},
                  label: "Follow",
                }}
                joined={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Joined",
                }}
                label="Display Name"
                location={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Location",
                }}
                timestamp={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Timestamp",
                }}
                username={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Username",
                }}
                variant="recommended"
              />
            </div>
            <div>
              <User
                avatar={{
                  alt: "Alter Tag",
                  buttonCallBack: () => {},
                  imageCallBack: function noRefCheck() {},
                  src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
                }}
                btn={{
                  fCallBack: function noRefCheck() {},
                  label: "Follow",
                }}
                joined={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Joined",
                }}
                label="Display Name"
                location={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Location",
                }}
                timestamp={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Timestamp",
                }}
                username={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Username",
                }}
                variant="recommended"
              />
            </div>
            <div>
              <User
                avatar={{
                  alt: "Alter Tag",
                  buttonCallBack: () => {},
                  imageCallBack: function noRefCheck() {},
                  src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
                }}
                btn={{
                  fCallBack: function noRefCheck() {},
                  label: "Follow",
                }}
                joined={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Joined",
                }}
                label="Display Name"
                location={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Location",
                }}
                timestamp={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Timestamp",
                }}
                username={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Username",
                }}
                variant="recommended"
              />
            </div>
            <div>
              <User
                avatar={{
                  alt: "Alter Tag",
                  buttonCallBack: () => {},
                  imageCallBack: function noRefCheck() {},
                  src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
                }}
                btn={{
                  fCallBack: function noRefCheck() {},
                  label: "Follow",
                }}
                joined={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Joined",
                }}
                label="Display Name"
                location={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Location",
                }}
                timestamp={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Timestamp",
                }}
                username={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Username",
                }}
                variant="recommended"
              />
            </div>
            <div>
              <User
                avatar={{
                  alt: "Alter Tag",
                  buttonCallBack: () => {},
                  imageCallBack: function noRefCheck() {},
                  src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
                }}
                btn={{
                  fCallBack: function noRefCheck() {},
                  label: "Follow",
                }}
                joined={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Joined",
                }}
                label="Display Name"
                location={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Location",
                }}
                timestamp={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Timestamp",
                }}
                username={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Username",
                }}
                variant="recommended"
              />
            </div>
            <div>
              <User
                avatar={{
                  alt: "Alter Tag",
                  buttonCallBack: () => {},
                  imageCallBack: function noRefCheck() {},
                  src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
                }}
                btn={{
                  fCallBack: function noRefCheck() {},
                  label: "Follow",
                }}
                joined={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Joined",
                }}
                label="Display Name"
                location={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Location",
                }}
                timestamp={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Timestamp",
                }}
                username={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Username",
                }}
                variant="recommended"
              />
            </div>
            <div>
              <User
                avatar={{
                  alt: "Alter Tag",
                  buttonCallBack: () => {},
                  imageCallBack: function noRefCheck() {},
                  src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
                }}
                btn={{
                  fCallBack: function noRefCheck() {},
                  label: "Follow",
                }}
                joined={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Joined",
                }}
                label="Display Name"
                location={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Location",
                }}
                timestamp={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Timestamp",
                }}
                username={{
                  type: "joined",
                  fCallBack: function noRefCheck() {},
                  href: "",
                  label: "Username",
                }}
                variant="recommended"
              />
            </div>
          </div>
          <div tw="mb-32">
            <Heading
              tag="h3"
              size="default"
              label="Empfohlene Mumbles"
              mbSpacing="16"
            />

            <WriteComponent
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
  );
}
