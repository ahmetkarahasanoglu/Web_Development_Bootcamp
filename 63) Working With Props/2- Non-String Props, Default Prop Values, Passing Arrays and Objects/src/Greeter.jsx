export default function Greeter({ person = "everyone", from="anonymous" }) {  // We can refer to parameter as 'props'. And we can destructure props as ({ person })  ///  And after that, we used 2 parameters, and we gave default values to them.
  return (
    <>
      <h1>Hi there, {person}!!!</h1>   {/* We can refer to parameter as props.person. And instead of that, we can use just {person} */}
      <h2>from -{from}</h2>
    </>
  );
}
