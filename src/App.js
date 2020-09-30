import React, { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [value1, setValue1] = useState(0);
  const [symtom, setSymtom] = useState("");
  const [value2, setValue2] = useState(0);

  const handleAddClick = (event) => {
    if (symtom != "") {
      setValue2(parseInt(value2 + event.target.value));
    } else {
      setValue1(parseInt(value1 + event.target.value));
    }
  };
  const setOperater = (event) => {
    setSymtom(event.target.value);
  };
  const handleResultClick = (event) => {
    if (symtom === "+") {
      setValue1(value1 + value2);
      setSymtom("");
    } else if (symtom === "-") {
      setValue1(value1 - value2);
      setSymtom("");
    } else if (symtom === "*") {
      setValue1(value1 * value2);
      setSymtom("");
    } else {
      setValue1(value1 / value2);
      setSymtom("");
    }
  };

  return (
    <Button>
      <div>{symtom !== "" ? value2 : value1}</div>
      <div>
        <button value="1" onClick={handleAddClick}>
          1
        </button>
        <button value="2" onClick={handleAddClick}>
          2
        </button>
        <button value="3" onClick={handleAddClick}>
          3
        </button>
        <button value="+" onClick={setOperater}>
          +
        </button>
      </div>
      <div>
        <button value="4" onClick={handleAddClick}>
          4
        </button>
        <button value="5" onClick={handleAddClick}>
          5
        </button>
        <button value="6" onClick={handleAddClick}>
          6
        </button>
        <button value="-" onClick={setOperater}>
          -
        </button>
      </div>
      <div>
        <button value="7" onClick={handleAddClick}>
          7
        </button>
        <button value="8" onClick={handleAddClick}>
          8
        </button>
        <button value="9" onClick={handleAddClick}>
          9
        </button>
        <button value="*" onClick={setOperater}>
          *
        </button>
      </div>
      <div>
        <button value="0" onClick={handleAddClick}>
          0
        </button>

        <button value="/" onClick={setOperater}>
          /
        </button>
        <button value={symtom} onClick={handleResultClick}>
          =
        </button>
      </div>
    </Button>
  );
}
