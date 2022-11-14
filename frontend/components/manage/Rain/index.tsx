import { useEffect, useRef, useState } from "react";
import { EmojiContainer, Wrapper } from "./styles";

const Rain = () => {
  const [emojisToRender, setEmojisToRender] = useState([
    {
      key: 0,
      emoji: "💧",
      offset: 0,
    },
  ]);

  const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef<typeof callback>();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        // if (savedCallback.current === callback) {
        savedCallback.current?.(); // tick이 실행되면 callback 함수를 실행시킨다.
        // }
      };
      if (delay !== null) {
        // 만약 delay가 null이 아니라면
        let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
        return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
      }
    }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
  };

  const makeRains = () => {
    if (emojisToRender.length > 50) {
      emojisToRender.shift();
    }

    const offset = Math.floor(Math.random() * 500);
    const key = offset + Math.floor(Math.random() * 1000000);
    const emoji = "💧";

    emojisToRender.push({ key, emoji, offset });
    setEmojisToRender([...emojisToRender]);
  };
  useInterval(() => {
    makeRains();
  }, 50);

  const emojiRains = emojisToRender.map(({ key, emoji, offset }) => {
    return (
      <EmojiContainer key={key} offset={offset}>
        {emoji}
      </EmojiContainer>
    );
  });

  return <Wrapper>{emojiRains}</Wrapper>;
};

export default Rain;
