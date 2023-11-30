export default function Greeter({ person }) {  // We can refer to parameter as 'props'. And we can destructure props as ({ person })  ///  { person = "everyone", from = "anonymous" }  
  return (
    <>
      <h1>Hi there, {person}!!!</h1>   {/* We can refer to parameter as props.person. And instead of that, we can use just {person} */}
      {/* <h2>-{from}</h2> */}
    </>
  );
}
