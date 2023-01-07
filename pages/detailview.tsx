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
  const handleAvatar = () => {
    console.log("avatar clicked");
  };

  return (
    <>
      <Navi />
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full">
        <div tw="w-full mb-32">
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
              fCallBack: handleAvatar,
              src: "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
            }}
            settings={{
              label: "Detailview",
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
        </div>
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
