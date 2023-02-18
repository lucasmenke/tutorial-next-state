import Component2 from "./component2";

export default function Component1({ name, changeName, clearName }: { name: string, changeName: Function, clearName: Function }) {
  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
      <h2 className="mb-4 font-semibold">Component1</h2>
      <span className="mb-4">My name is: {name}</span>
      <br />
        <button
          onClick={() => changeName()}
          className="my-4 bg-violet-700 rounded-full p-1 px-2 text-white hover:scale-105 transition-all shadow-lg mr-4"
        >
          Set Name
        </button>
        <button
          onClick={() => clearName()}
          className="my-4 bg-violet-700 rounded-full p-1 px-2 text-white hover:scale-105 transition-all shadow-lg"
        >
          Clear Name
        </button>
      <Component2 name={name} changeName={changeName} clearName={clearName} />
    </div>
  );
}
