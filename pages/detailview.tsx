import Link from "next/link";
import Navi from "./includes/navi";
import {
  Navigation,
  Mumble,
  WriteComponent,
  Heading,
  Container,
} from "@smartive-education/design-system-component-library-yeahyeahyeah";

export default function Detailview() {
  return (
    <>
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
        <Navi />
        <Container layout="box">
          <div tw="border-b-1 border-slate-200">
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
                variant: "large",
              }}
              variant="detailpage"
            />
          </div>
          <div tw="border-b-1 border-slate-200">
            <WriteComponent
              variant="inline"
              form={{
                errorMessage: "Da ist etwas schief gelaufen",
                placeholder: "Na, was meinste dazu ...?",
                required: false,
                editType: "textarea",
                autoComplete: "off",
              }}
              send={{
                fCallBack: () => {},
                icon: "send",
                label: "Absenden",
                size: "small",
                type: "button",
                variant: "violet",
                width: "full",
              }}
              setText={function noRefCheck() {}}
              startHeading="Hey, was läuft?"
              startParagraph="Schreib deinen ersten Mumble, oder folge einem User."
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
                variant: "inline",
                avatar: {
                  alt: "Family Guy goes Mumble",
                  src: "https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif",
                },
                label: "Hey, was läuft?",
                username: {
                  type: "joined",
                  href: "#",
                  label: "Username",
                },
              }}
            />
          </div>
          <div tw="border-b-1 border-slate-200">
            <Mumble
              comment={{
                fCallBack: function noRefCheck() {},
                quantity: 0,
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
          </div>
          <div tw="border-b-1 border-slate-200">
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
          </div>
          <div tw="border-b-1 border-slate-200">
            <Mumble
              comment={{
                fCallBack: function noRefCheck() {},
                quantity: 0,
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
                variant: "inline",
              }}
              variant="response"
            />
          </div>
          <div tw="border-b-1 border-slate-200">
            <Mumble
              comment={{
                fCallBack: function noRefCheck() {},
                quantity: 0,
              }}
              img={{
                alt: "This is a profile picture!",
                fCallBack: function noRefCheck() {},
                src: "http://placeimg.com/640/360/any",
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
              label: "Holy Fuck!!",
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
              variant: "write",
            }}
            variant="response"
          />
        </Container>
      </div>
    </>
  );
}
