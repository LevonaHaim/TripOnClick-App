import { useState } from "react";
import axios from 'axios'
//import {distance} from "./Map";
//import {distance} from "../../../trip-on-click-server/map"

import "../css/Filter.css";

export default function FilterComp() {

  const categoriesPreferences = [{ name: "אקסטרים" }, { name: "טבע" }, { name: "תרבות" }, { name: "רחצה" }];
  const populationDesti = [{ name: "ילדים" }, { name: "מבוגרים" }, { name: "כלל הגילאים" }];
  const [checkedState, setCheckedState] = useState(new Array(categoriesPreferences.length).fill(false));
  const [allAttractions, setAttractions] = useState([])
  const [checkedState2, setCheckedState2] = useState(new Array(populationDesti.length).fill(false));
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedOption, setSelectedOption] = useState("");

  //checkbox of categories

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  //checkbox of population

  const handleOnChange2 = (position) => {
    const updatedCheckedState2 = checkedState2.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState2(updatedCheckedState2);
  };
  function handleChange3(event) {
    setSelectedValue(event.target.value);
    console.log(event.target.value)

  }
  const handleChange4 = (event) => {
    setSelectedOption(event.target.value);
  }


  const fetchAttraction = async () => {
    let resp = await axios.get("http://localhost:8080/Attractions/");
    let allAttractions = resp.attractions;
    setAttractions(allAttractions);
    allAttractions = resp.data

    const ChoosedCategories = [];
    const ChoosedArea = [];
    const ChoosedPopulation = [];
    const ChoosedDistance = [];
    const finallFilters = [];


    const areaFilter = async () => {
      allAttractions.filter(item => {
        if (item.Area === selectedOption) {
          ChoosedArea.push(item);
        }
      });
    }


    const categoriesFilter = async () => {

      if (checkedState[0] === true) {
        allAttractions.filter(item => {
          if (item.Category === 'אקסטרים') {
            ChoosedCategories.push(item);
          }
        });
        console.log("print after filter by extreme category")


      }
      if (checkedState[1] === true) {
        allAttractions.filter(item => {
          if (item.Category === 'טבע') {
            ChoosedCategories.push(item);
          }
        }); console.log("print after filter by nature category")

      }
      if (checkedState[2] === true) {
        allAttractions.filter(item => {
          if (item.Category === 'תרבות') {
            ChoosedCategories.push(item);

          }
        }); console.log("print after filter by culture category")

      }
      if (checkedState[3] === true) {
        allAttractions.filter(item => {
          if (item.Category === 'רחצה') {
            ChoosedCategories.push(item);

          }
        });
        console.log("print after filter by water category")
      }

      else
        return
    }
    //population method

    const poupulationFilter = async () => {

      if (checkedState2[0] === true) {
        console.log("hi")
        allAttractions.filter(item => {
          if (item.DestiPopulation === 0) {
            ChoosedPopulation.push(item);

          }
        });
      }


      else if (checkedState2[1] === true) {
        allAttractions.filter(item => {
          if (item.DestiPopulation === 2) {
            ChoosedPopulation.push(item);

          }
        });
      }
      else if (checkedState2[2] === true) {
        allAttractions.filter(item => {
          if ((item.DestiPopulation = 3) || (item.DestiPopulation = 2) || (item.DestiPopulation = 1)) {
            ChoosedPopulation.push(item);

          }
        });

      }

      else
        return
    }
    const allFilter = async () => {
      const finallFilters = ChoosedArea.filter(item => ChoosedCategories.includes(item) && ChoosedPopulation.includes(item)
      );
      console.log(finallFilters);

    }


    // const allFilter = async () => {

    //   ChoosedArea.filter(element => ChoosedCategories.includes(element) && ChoosedPopulation.includes(element)
    //   );
    //   finallFilters.push(element)
    //   console.log(finallFilters)
    // }
    poupulationFilter()
    areaFilter()
    categoriesFilter()
    allFilter()


  }

  fetchAttraction()





  return (
    <html dir="rtl">
          

      <b>תאריך התחלה</b><br></br>
      <input class="form-control" type="date" id="Date" name="Date" />
      <b>תאריך סיום</b><br></br>      <input class="form-control" type="date" id="Date" name="Date" />
      <br></br>
      
<label><b>בחר אטרקציות עבור:</b></label>
      {populationDesti.map(({ name }, index) => {
        return (

          <div>
            <label>

              <input
                type="radio"
                class="light"
                id={`custom-checkbox-${index}`}
                name="group"
                value={name}
                checked={checkedState2[index]}
                onChange={() => handleOnChange2(index)}
              />&nbsp;&nbsp;
              <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
            </label>
          </div>

        );
      })}
      <br></br>

      <select value={selectedOption} onChange={handleChange4}>
        <option value=""><b>בחר אזור</b></option>
        <option value="צפון">צפון</option>
        <option value="מרכז">מרכז</option>
        <option value="דרום">דרום</option>
      </select>
      <br></br>
      <br></br>


      {categoriesPreferences.map(({ name }, index) => {
        return (

          <div className="checkbox">
            <input
              type="checkbox"
              id={`custom-checkbox-${index}`}
              name={name}
              value={name}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
            />&nbsp;&nbsp;
            <label htmlFor={`custom-checkbox-${index}`}>{name} </label>
          </div>
        );
      })}
      <br></br>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input type="button" value="צור טיול" onClick={handleOnChange} />

    </html>
  );



}