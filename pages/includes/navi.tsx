import Link from 'next/link';
import { Navigation } from '@smartive-education/design-system-component-library-yeahyeahyeah';

export default function Navi() {
  const handleAvatar = () => {
    console.log('avatar clicked');
  };
  return (
    <>
      <div tw="flex flex-row justify-start items-center font-medium p-16 gap-16">
        <Link href={'/'}>Timeline</Link>
        <Link href={'./detailview'}>Detailview</Link>
        <Link href={'./profilepage'}>Profilepage</Link>
      </div>
      <div tw="w-full mb-32">
        <Navigation
          avatar={{
            avatar: {
              alt: 'Alternative text',
              src: 'https://media.giphy.com/media/3oEduQAsYcJKQH2XsI/giphy.gif',
              variant: 'small',
            },
            fCallBack: () => console.log('avatar clicked'),
            label: 'Profile',
            variant: 'profile',
          }}
          logo={{
            fCallBack: () => console.log('logo clicked'),
            href: '#',
            title: 'Mumble Logo',
          }}
          logout={{
            fCallBack: () => console.log('logout clicked'),
            icon: 'logout',
            label: 'Logout',
            variant: 'default',
          }}
          settings={{
            fCallBack: () => console.log('settings clicked'),
            icon: 'settings',
            label: 'Settings',
            variant: 'default',
          }}
        />
      </div>
    </>
  );
}
