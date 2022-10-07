const Blinker = ({ text }) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log(`Current blinking text: ${text}`);
        setVisible((visible) => !visible);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }, [text]);
    return visible ? <h1>{text}</h1> : null;
  };