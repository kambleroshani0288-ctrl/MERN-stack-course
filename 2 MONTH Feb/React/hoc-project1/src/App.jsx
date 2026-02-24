import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsCard from './components/DetailsCard'; //Reusable component
function App() {


  //  javascript

  console.log("HOC")

  //variable
  const name = "HOC";  //we can not chenge const value
  let age = 20; //we can chenge
  console.log(name, "name ====>");
  console.log(age, "------");

  //string 
  const a = "HOChfnjf";

  //array
  const b = ["apple", "mango", "banana", 1717];

  //object
  const data = {
    name: "Roshani",
    city: "Karad",
  };

  // if else - ternari operator
  const fullname = "hoc";
  if
    (fullname = "hoc") { console.log(true) }
  else { console.log(false) }


  // functions
  function addNumber() {
    console.log("Click")
  }

  //arrays of object
  const cardData = [
    {
      cardTitle: "Test 1",
      cardDescription: "Test Description 1",
    },

    {
      cardTitle: "Test 1",
      cardDescription: "Test Description 1",
    },

    {
      cardTitle: "Test 1",
      cardDescription: "Test Description 1",
    },

    {
      cardTitle: "Test 1",
      cardDescription: "Test Description 1",
    },

    {
      cardTitle: "Test 1",
      cardDescription: "Test Description 1",
    },

    {
      cardTitle: "Test 1",
      cardDescription: "Test Description 1",
    },
  ];

  console.log(cardData, "======");

  //.map
  //asynce await

  return (
    <>
      <button className='btn btn-primary' onClick={addNumber} >
        Click Me
      </button>
      <div className='container'>
        <div className='row my-2'>
          {cardData.map((each) => (

            <div className='col-md-3'>
              {/* cardtitle - propes || cardDescription - propes || we can add more propes also */}


              < DetailsCard
                cardTitle={each.cardTitle}
                cardDescription={each.cardDescription}
              />
            </div>

          ))}

        </div>
      </div>
    </>
  );
};

export default App;
