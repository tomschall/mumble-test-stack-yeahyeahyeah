import Navi from './includes/navi';
import { Mumble, TextBox, Container } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { useEffect, useState } from 'react';

export default function Detailview() {
  const [posts, setPosts] = useState(['']);
  const [ref, setRef] = useState<React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null> | null>(null);
  const [text, setText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    console.log('text', text);
    if (text !== '') {
      setErrorMessage('');
    }
  }, [text]);

  const handleSend = () => {
    if (ref?.current) ref.current.value = '';
    addText();
  };

  const addText = () => {
    if (text === '') {
      setErrorMessage('Bitte füllen Sie das Feld aus.');
      return;
    }

    if (posts[0] === '') {
      setPosts([text]);
      setText('');
      return;
    }
    setPosts([...posts, text]);
    setText('');
  };

  return (
    <>
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
        <Navi />
        <Container layout="box">
          <div tw="border-b-1 border-slate-200">
            <Mumble
              comment={{
                fCallBack: () => console.log('comment clicked'),
                quantity: 0,
              }}
              img={{
                alt: 'This is a nice picture!',
                fCallBack: () => console.log('img clicked'),
                src: 'https://picsum.photos/640/360',
              }}
              like={{
                fCallBack: () => console.log('like clicked'),
                quantity: 999,
              }}
              mbSpacing="0"
              share={{
                fCallBack: () => console.log('share clicked'),
                label: 'Share',
              }}
              text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
              user={{
                avatar: {
                  alt: 'avatar',
                  src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                  imageCallBack: () => console.log('avatar clicked'),
                },
                joined: {
                  fCallBack: () => console.log('joined clicked'),
                  href: '',
                  label: 'Joined',
                  type: 'joined',
                },
                label: 'Display Name',
                location: {
                  fCallBack: () => console.log('location clicked'),
                  href: '',
                  label: 'Location',
                  type: 'location',
                },
                timestamp: {
                  fCallBack: () => console.log('timestamp clicked'),
                  href: '',
                  label: 'Timestamp',
                  type: 'timestamp',
                },
                username: {
                  fCallBack: () => console.log('username clicked'),
                  href: '',
                  label: 'Username',
                  type: 'username',
                },
                variant: 'large',
              }}
              variant="detailpage"
            />
          </div>
          <div tw="border-b-1 border-slate-200">
            <TextBox
              variant="write"
              user={{
                label: 'Hey, was läuft?',
                username: {
                  label: 'Username',
                  href: '#',
                  type: 'username',
                },
                avatar: {
                  src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                  alt: 'Alter Tag',
                  imageCallBack: () => console.log('avatar clicked'),
                },
              }}
              form={{
                errorMessage: errorMessage,
                placeholder: 'Hast du uns etwas mitzuteilen ?',
                setRef: setRef,
                setText: setText,
              }}
              sendCallback={handleSend}
              uploadCallback={() => console.log('uploadCallback')}
            />
          </div>
          {posts
            .slice(0)
            .reverse()
            .map((post, i) => {
              return (
                <Mumble
                  key={i}
                  comment={{
                    fCallBack: () => console.log('comment clicked'),
                    quantity: 0,
                  }}
                  img={{
                    alt: 'This is a profile picture!',
                    fCallBack: () => console.log('img clicked'),
                    src: 'https://picsum.photos/640/360',
                  }}
                  like={{
                    fCallBack: () => console.log('like clicked'),
                    quantity: 999,
                  }}
                  mbSpacing="0"
                  share={{
                    fCallBack: () => console.log('share clicked'),
                    label: 'Share',
                  }}
                  text={post}
                  user={{
                    avatar: {
                      alt: 'avatar',
                      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                      imageCallBack: () => console.log('avatar clicked'),
                    },
                    joined: {
                      fCallBack: () => console.log('joined clicked'),
                      href: '',
                      label: 'Joined',
                      type: 'joined',
                    },
                    label: 'Display Name',
                    location: {
                      fCallBack: () => console.log('location clicked'),
                      href: '',
                      label: 'Location',
                      type: 'location',
                    },
                    timestamp: {
                      fCallBack: () => console.log('timestamp clicked'),
                      href: '',
                      label: 'Timestamp',
                      type: 'timestamp',
                    },
                    username: {
                      fCallBack: () => console.log('username clicked'),
                      href: '',
                      label: 'Username',
                      type: 'username',
                    },
                    variant: 'large',
                  }}
                  variant="timeline"
                />
              );
            })}
        </Container>
      </div>
    </>
  );
}
