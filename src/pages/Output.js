export default function Output(props) {
  const { srcDoc } = props;
  return (
    <iframe
      className="w-screen h-screen"
      title="output"
      srcDoc={srcDoc}
    ></iframe>
  );
}
