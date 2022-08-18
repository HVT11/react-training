import { useRef } from "react";

function ExampleUseRef() {
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
      inputEl.current!.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
}

export default ExampleUseRef;

