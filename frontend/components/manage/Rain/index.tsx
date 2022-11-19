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
        savedCallback.current?.();
      };
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  const makeRains = () => {
    if (emojisToRender.length > 50) {
      emojisToRender.shift();
    }

    const offset = Math.floor(Math.random() * 550);
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
