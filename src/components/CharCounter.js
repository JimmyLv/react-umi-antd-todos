function CharacterCount({ text }) {
  if (!text) {
    return <div>Please input your name</div>;
  }
  return (
    <div>
      {`The text "${text}" has `}
      {text.length ? <strong>{text.length}</strong> : 'No'}
      {' characters'}
    </div>
  );
}

export default CharacterCount;
