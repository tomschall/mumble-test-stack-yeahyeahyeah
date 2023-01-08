import Link from "next/link";
import Navi from "./includes/navi";
import {
  Checkbox,
  Container,
  Heading,
  Navigation,
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
            <ImageContainer src="https://placebeard.it/640x360" alt="Picture" />
            <div tw="px-8 mb-16 z-50">
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
        <Container layout="box">
          <div tw="mb-32">
            <Mumble
              comment={{
                fCallBack: function noRefCheck() {},
                quantity: 0,
              }}
              img={{
                alt: "This is a profile picture!",
                fCallBack: function noRefCheck() {},
                src: "",
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
          </div>
          <Mumble
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
            mbSpacing="0"
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
            variant="detailpage"
          />
          <Mumble
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
              variant: "write",
            }}
            variant="response"
          />
          <Mumble
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
              variant: "small",
            }}
            variant="response"
          />
        </Container>
      </div>
    </>
  );
}
