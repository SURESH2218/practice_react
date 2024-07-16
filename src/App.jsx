import data from "./data";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) =>
          item ? (
            <Card
              key={index}
              id={item.id}
              body={item.body}
              email={item.email}
            />
          ) : (
            <div key={index} className="p-4 border rounded shadow-sm">
              Invalid data
            </div>
          )
        )}
      </div>
    </div>
  );
}

const Card = ({ id, body, email }) => {
  return (
    <div className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow duration-200">
      <ul className="list-none">
        <li className="font-bold text-lg">{id}</li>
        <li className="mt-2">{body}</li>
        <li className="mt-2 text-sm text-gray-600">{email}</li>
      </ul>
    </div>
  );
};

export default App;
