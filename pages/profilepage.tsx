import Link from "next/link";
import Navi from "./includes/navi";
import {
  Navigation,
  Mumble,
  WriteComponent,
  Heading,
  Container,
} from "@smartive-education/design-system-component-library-yeahyeahyeah";

export default function Profilepage() {
  const handleAvatar = () => {
    console.log("avatar clicked");
  };

  return (
    <>
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
        <Navi />
        <Container layout="box">
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
